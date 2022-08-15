import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import Axios from "axios"
import "../Result/Result.css"

export default function Result() {
  const loc = useLocation()
  const[dete,setdete] = useState([])
  const img_url = "https://image.tmdb.org/t/p/w500"

  useEffect(()=>{
    getStudent()
  }, [])

 function getStudent(){
  Axios.get(`https://api.themoviedb.org/3/movie/${loc.state.id}?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US`)
    .then(ress=>{
      setdete(ress.data)
      })
    .catch(err =>{
      setdete(err)
    })
  }
  console.log(dete)
  
  return (
    <div class="card text-bg-light m-0 p-0 ">
     <div className='bg__box'>
     <img  src={img_url + dete.backdrop_path} className="bg__box card-img img-fluid" alt="..."/>
     </div>
    <div className="card-img-overlay back">
      <div className="row container">
          <div className="col-4 backdrop_path">
              <img  src={img_url + dete.poster_path} alt="" />
          </div>  
          <div className='col-8 result__text'>
            <div>
              <h3>{dete.original_title}</h3>
              
              <div>
                <h6>{dete.release_date}</h6>
              </div>

              <div className='icon'>
                <i class="fa-brands fa-stack-exchange"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-bookmark"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>

          </div>
      </div>  
    </div>
    </div>
  )
}