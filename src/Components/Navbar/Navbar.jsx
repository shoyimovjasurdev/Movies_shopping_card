import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='mainNavbar'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container container-fluid navigationBar">
          <Link to="/"><h3>TMDB</h3></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mt-3" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul className='ms-5 d-flex'>
                <li className='manNav'>Movies 
                  <ul className='supportNav'>
                    <li><Link to="/popular">Popular</Link></li>
                    <li><Link to="/navplaying">Now Playing</Link></li>
                    <li><Link to="/upcoming">Upcoming</Link></li>
                    <li><Link to="/top_rated">Top Rated</Link></li>
                  </ul>
                </li >
                <li className='manNav'>TV Shows
                  <ul className='supportNav'>
                    <li><Link to="/popular1">Popular</Link></li>
                    <li><Link to="/airing">Airing Today</Link></li>
                    <li><Link to="/on_tv">On TV</Link></li>
                    <li><Link to="/top_rated1">Top Rated</Link></li>
                  </ul>
                </li>
                <li className='manNav'>People</li>
                <li className='manNav'>More</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
