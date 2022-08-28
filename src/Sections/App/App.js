import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Home from '../Home/Home'
import Popular from '../Movies/Popular'
import Nav_playing from '../Movies/Nov_playing'
import Top_rated from '../Movies/Top_rated'
import Upcoming from '../Movies/Upcoming'
import  Popular1 from '../Tv_shows/Popular1'
import Airing from '../Tv_shows/Airing'
import On_tv from '../Tv_shows/On_tv'
import Top_rated1 from '../Tv_shows/Top_rated1'
import Result from '../Result/Result'
import ToResult from "../Result/TvResult"
import People from '../People/People'
import Like from "../like and save/Like"
import Foter from '../../Components/Footer/Foter'
import Search from '../../Search/Search'
import Save from '../like and save/Save'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exac path='/' element={<Home/>}/>
        <Route exac path='/popular' element={<Popular/>}/>
        <Route exac path='/navplaying' element={<Nav_playing/>}/>
        <Route exac path='/upcoming' element={<Upcoming/>}/>
        <Route exac path='/top_rated' element={<Top_rated/>}/>
        <Route exac path='/popular1' element={<Popular1/>}/>
        <Route exac path='/airing' element={<Airing/>}/>
        <Route exac path='/on_tv' element={<On_tv/>}/>
        <Route exac path='/top_rated1' element={<Top_rated1/>}/>
        <Route exac path='/result/:id' element={<Result/>}/>
        <Route exac path='/tvresult/:id' element={<ToResult/>}/>
        <Route exac path="/people" element={<People/>}/>
        <Route exac path='/like' element={<Like/>}/>
        <Route exac path='/save' element={<Save/>}/>
      <Route exac path='/search/:id' element={<Search/>}/>

        
      </Routes>
      <Foter/>
    </div>
  )
}

