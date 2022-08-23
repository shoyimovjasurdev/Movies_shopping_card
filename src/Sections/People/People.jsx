import React,{useState,useEffect} from 'react'
import Axios from "axios"
import {Link, useNavigate} from "react-router-dom"

export default function Render(props) {
  const [arre,setArre]=useState([])
  const [pag, setPag]=useState(1)
  const img_url = "https://image.tmdb.org/t/p/w500"
  const nav = useNavigate()

  useEffect(()=>{
    getStudent()
  }, [pag])

 function getStudent(){
  Axios.get(`https://api.themoviedb.org/3/person/popular?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US&page=${pag}`)
    .then(ress=>{
      console.log(ress.data.results)
      setArre(ress.data.results)
    })
    .catch(err =>{
      console.log(err);
  })
  }

  return (
    <div className='container'>
      <h3 className='mt-4'>Popular People</h3>
      <div className='mainSection '>
      {
        (arre.length >0) ? (
          arre.map((e,index)=>{
            return(
              <div className='cardSection card' key={index}>
                <img src={img_url+e.profile_path } alt="Rosim" />
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
      <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li onClick={()=>setPag(pag-1)} class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li onClick={()=>setPag(1)} class="page-item"><a class="page-link" href="#">1</a></li>
        <li onClick={()=>setPag(2)} class="page-item"><a class="page-link" href="#">2</a></li>
        <li onClick={()=>setPag(3)} class="page-item"><a class="page-link" href="#">3</a></li>
        <li onClick={()=>setPag(pag+1)} class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
</nav>
    </div>
  )
}