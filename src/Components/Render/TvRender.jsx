import React,{useState,useEffect} from 'react'
import Axios from "axios"
import "./Render.css"
import {Link} from "react-router-dom"

export default function TvRender(props) {
  const [arre,setArre]=useState([])
  const [sum, setSum]=useState(10)
  const img_url = "https://image.tmdb.org/t/p/w500"
  const [display, setDisplay]=useState("d-none")

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

  const iconClick=(id)=>{
    if(display=="d-black"){
      setDisplay("d-none")
    }else{
      setDisplay("d-black")
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
                <Link state={{id:e.id}} to={`/tvresult/${e.id}`}>
                <img src={img_url+e.poster_path} alt="Rosim" />
                </Link>
                {console.log(e)}
                
                <div>
                <div  className={`saveIcon ${display}`}>
                  <i class="fs-6 fa-brands fa-stack-exchange"></i>
                  <i class="fs-6 fa-solid fa-heart"></i>
                  <i class="fs-6 fa-solid fa-bookmark"></i>
                  <i class="fs-6 fa-solid fa-star"></i>
              </div>
                </div>
                <div onClick={()=>iconClick(e.id)} className='menuIcon'>
                    <i class="fs-5 fa-solid fa-ellipsis"></i>
                </div>
                <h3 className=''>{e.name}</h3>
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
