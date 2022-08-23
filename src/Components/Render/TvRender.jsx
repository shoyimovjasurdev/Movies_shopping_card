import React,{useState,useEffect} from 'react'
import Axios from "axios"
import "./Render.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"

export default function TvRender(props) {
  const [arre,setArre]=useState([])
  const [sum, setSum]=useState(10)
  const img_url = "https://image.tmdb.org/t/p/w500"
  const [display, setDisplay]=useState(false)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    getStudent()
  }, [arre])

 function getStudent(){
  Axios.get(`${props.Api}`)
    .then(ress=>{
      setArre(ress.data.results)
    })
    .catch(err =>{
      console.log(err);
  })
  }

  const likeFun=(e)=>{
    dispatch({type:"addLike",piload:e})
  }


  return (
    <div className='container'>
      <div className='mainSection'>
      {
        (arre.length >0) ? (
          arre.slice(0,sum).map((e,index)=>{
            return(
              <div className='cardSection card' key={index}>
                <Link state={{id:e.id}} to={`/tvresult/${e.id}`}>
                <img src={img_url+e.poster_path} alt="Rosim" />
                </Link>                
               {
                (display)?(
                  <div  className={`saveIcon ${display}`}>
                  <i className="fs-6 fa-brands fa-stack-exchange"></i>
                  <i onClick={()=>likeFun(e)} className="fs-6 fa-solid fa-heart"></i>
                  <i className="fs-6 fa-solid fa-bookmark"></i>
                  <i className="fs-6 fa-solid fa-star"></i>
                </div>
                ):
                (
                  <h3></h3>
                )
               }
                <div onClick={()=>setDisplay(!display)} className='menuIcon'>
                    <i className="fs-5 fa-solid fa-ellipsis"></i>
                </div>
                <h3>{e.name}</h3>
                <p>{e.first_air_date}</p>
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
