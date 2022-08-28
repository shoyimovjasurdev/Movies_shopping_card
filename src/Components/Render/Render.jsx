import React,{useState,useEffect} from 'react'
import Axios from "axios"
import "./Render.css"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"

export default function Render(props) {
  const [arre,setArre]=useState([])
  const [sum, setSum]=useState(10)
  const img_url = "https://image.tmdb.org/t/p/w500"
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [detel,setDetel] =useState("d-none")

  useEffect(()=>{
    getStudent()
  }, [])

 function getStudent(){
  Axios.get(`${props.Api}`)
    .then(ress=>{
      setArre(ress.data.results)
    })
    .catch(err =>{
      console.log(err);
  })
  }

  console.log(arre)

  const likeFun=(e)=>{
    dispatch({type:"addLike",piload:e})
  }

  function saveFun(e){
    dispatch({type:"addSave",piload:e})
  }

  
    function btnfun(){
      if(detel=="d-block"){
        setDetel("d-none")
      }else{
        setDetel("d-block")
      }
    }

  

  return (
    <div className='container'>
      <div className='mainSection'>
      {
        (arre.length >0) ? (
          arre.slice(0,sum).map((e,index)=>{
            return(
              <div className='cardSection card' key={index}>
                  <Link state={{id:e.id}} to={`/result/${e.id}`}>
                    <img src={img_url+e.poster_path } alt="Rosim" />
                  </Link>
               {
                <div  className={`saveIcon ${detel}` }>
                  <div><i className="fs-6 fa-brands fa-stack-exchange"></i></div>
                  <div><i onClick={()=>likeFun(e)} className="fs-6 fa-solid fa-heart"></i></div>
                  <div><i onClick={()=>saveFun(e)}  className="fs-6 fa-solid fa-bookmark"></i></div>
                  <div><i className="fs-6 fa-solid fa-star"></i></div>
                </div>
               }
                <div  onClick={()=>btnfun()}className='menuIcon'>
                    <i  className="fs-5 fa-solid fa-ellipsis"></i>
                </div>
                  <h3>{e.title+""+e.name}</h3>
                  <p>{e.release_date+""+e.first_air_date}</p>
              </div>
            )
          })
        ):
        (
          <h4 >loading...</h4>
        )
      }
      </div>
      <button className='btn btn-primary text-ceter my-5 w-100' onClick={()=>{setSum(sum+10)}}>Lore more</button>
    </div>
  )
}
