import React from 'react'
import "./footer.css"

export default function Foter() {
  return (
    <div className='main'>
      <div className='container'>
        <div className='row foter'>
          <div className='col-2'></div>
          <div className='col item '>
            <img width={150} src={require('../Footer//Foot_img/footer.svg').default} alt='mySvgImage' /><br></br>
            <button><b>HI Jasur!</b></button>
          </div>
          <div className='col item mt-5'>
            <h5>THE BASICS</h5>
            <p><b>About TMDB</b></p>
            <p><b>Contact Us</b></p>
            <p><b>Support Forums</b></p>
            <p><b>API</b></p>
            <p><b>System Status</b></p>  
          </div>
          <div className='col item mt-5'>
            <h5>GET INVOLVED</h5>
            <p><b>Contribution Bible</b></p>
            <p><b>Add New Movie</b></p>
            <p><b>Add New TV Show</b></p>
          </div>
          <div className='col item mt-5'>
            <h5>COMMUNITY</h5>
            <p><b>Guidelines</b></p>
            <p><b>Discussions</b></p>
            <p><b>Leaderboard</b></p>
            <p><b>Twitter</b></p>
          </div>
          <div className='col item mt-5'>
            <h5>LEGAL</h5>
            <p><b>Terms of Use</b></p>
            <p><b>API Terms of Use</b></p>
            <p><b>Privacy Policy</b></p>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </div>

  )
}
