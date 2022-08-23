import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import Foter from '../../Components/Footer/Foter'

export default function Like() {
  const img_url = "https://image.tmdb.org/t/p/w500"
  const state = useSelector(state=>state.card)
  const dispatch = useDispatch()


    function delFun(e){
      dispatch({type:"delItem",piload:e})
    }
   
  return (
    <div className=''>
       <div className='row'>
       {
        (state != null) ? (
          state.map((e,index)=>{
            return(
              <div className='cardSection card col-3' key={index}>
                <div><img src={img_url+e.poster_path} alt="Rosim" /></div>
                <p>{e.first_air_date}</p>
                <p>{e.release_date}</p>
                <i onClick={()=>{delFun(index)}}  className="fs-3 fa-solid fa-heart"></i>
                 
              </div>
              
            )
          })
        ):
        (
          <h4></h4>
        )
      }
       </div>
    </div>
  )
}
