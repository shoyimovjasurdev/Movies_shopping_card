import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import "./likeSave.css"

export default function Save() {
  const img_url = "https://image.tmdb.org/t/p/w500"
  const state = useSelector(state=>state.save)
  const dispatch = useDispatch()

  console.log(state)


    function delFun(e){
      dispatch({type:"delSave",piload:e})
    }

    console.log(state)
   
  return (
    <div className=''>
       <div className='row cardssection'>
       {
        (state != null) ? (
          state.map((e,index)=>{
            return(
              <div className='col cardList' key={index}>
                <div><img src={img_url+e.poster_path} alt="Rosim" /></div>
                <p>{e.first_air_date}</p>
                <p>{e.release_date}</p>
                <i onClick={()=>{delFun(index)}}  class="fs-3 fa-solid fa-bookmark save"></i>
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
