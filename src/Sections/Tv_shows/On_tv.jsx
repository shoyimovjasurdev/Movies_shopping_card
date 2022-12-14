import React from 'react'
import Render from "../../Components/Render/Render"

export default function On_tv() {
  return (
    <div className='row'>
      <div className='col-2'>
        <h3 className='text-center ms-4 mt-4'>Popular Movies</h3>
      </div>
      <div className='col-10'>
        <Render dete="first_air_date" name="name" Api="https://api.themoviedb.org/3/tv/on_the_air?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US&page=1"/>
      </div>

    </div>
  )
}
