import React from 'react'
import Render from "../../Components/Render/Render"

export default function Upcoming() {
  return (
    <div className='row'>
      <div className='col-2'>
        <h3 className='text-center ms-4 mt-4'>Upcoming Movies</h3>
      </div>
      <div className='col-10'>
        <Render Api="https://api.themoviedb.org/3/movie/upcoming?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US&page=1"/>
      </div>
    </div>
  )
}
