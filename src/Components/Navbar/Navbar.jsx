import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {useSelector} from "react-redux"

export default function Navbar() {
  const state = useSelector(state=>state.card)
 
  return (
    <div className='mainNavbar'>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
        <div class="container container-fluid navigationBar">
          <Link to="/"><h3><img width={180} src={require('../Navbar/Nav_img/nav.svg').default} alt='mySvgImage' /></h3></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            
          </button>
          <div class="collapse navbar-collapse mt-3" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul className='d-flex'>
                <li className='manNav'><b>Movies</b> 
                  <ul className='supportNav'>
                    <li><Link to="/popular">Popular</Link></li>
                    <li><Link to="/navplaying">Now Playing</Link></li>
                    <li><Link to="/upcoming">Upcoming</Link></li>
                    <li><Link to="/top_rated">Top Rated</Link></li>
                  </ul>
                </li >
                <li className='manNav'><b>TV Shows</b>
                  <ul className='supportNav'>
                    <li><Link to="/popular1">Popular</Link></li>
                    <li><Link to="/airing">Airing Today</Link></li>
                    <li><Link to="/on_tv">On TV</Link></li>
                    <li><Link to="/top_rated1">Top Rated</Link></li>
                  </ul>
                </li>
                <li className='manNav'><b>People</b>
                <ul className='supportNav'>
                    <li className='my-2'><Link to="/people">Popular People</Link></li>
                  </ul>
                </li>
                <li className='manNav'><b>More</b></li>
              </ul>
              
            </div>
            <div className='likeIcon'>
              <h4><Link to="/like"><i class="fs-3 fa-solid fa-heart like"><sup className='h6'>{(state.length>=0)?(
                state.length
              ):(
                0
              )}</sup></i></Link></h4>
              <h4><Link to="/like"><i class="fs-3 fa-solid fa-bookmark save"></i></Link></h4>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  )
}
