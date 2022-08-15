import React,{useState,useEffect} from 'react'
import Axios from "axios"
import "./Render.css"
import {Link, useNavigate} from "react-router-dom"

export default function Render(props) {
  const [arre,setArre]=useState([])
  const [sum, setSum]=useState(10)
  const img_url = "https://image.tmdb.org/t/p/w500"
  const nav = useNavigate()

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
                  <div className='menuIcon'>
                    <i class="fs-5 fa-solid fa-ellipsis"></i>
                  </div>
                <h3 className=''>{e.original_title}</h3>
                <h3 className=''>{e.name}</h3>
                  <p>{e.first_air_date}</p>
                  <p>{e.release_date}</p>
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
