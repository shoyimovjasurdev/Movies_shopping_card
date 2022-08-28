import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import "./Main.css"
const halfimg = "https://image.tmdb.org/t/p/w500"


const Main = () => {

    const [color1, setColor1] = useState("#032541")
    const [color2, setColor2] = useState("rgba(0, 0, 0, 0)")

    const [popular, setPopular] = useState([])
    const [popular2, setPopular2] = useState(false)
    

    const [popular3, setPopular3] = useState([])
    const [popular4, setPopular4] = useState(false)

    const[search, setSearch] = useState([])
    useEffect(() => {
        getData()
    async function getData() {
        let result = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US&page=1')
    .then(ress => {
        return ress.json()
    })
    .catch(err =>{
        return err.json()
    })
    setPopular(result.results)
    }
    }, []);
    
    useEffect(() => {
        getData2()
    async function getData2() {
        let result = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US&page=2')
    .then(ress => {
        return ress.json()
    })
    .catch(err =>{
        return err.json()
    })
    setPopular2(result.results)
    }
    }, []);

    useEffect(() => {
        getData3()
    async function getData3() {
        let result = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US&page=1')
        
    .then(ress => {
        return ress.json()
    })
    .catch(err =>{
        return err.json()
    })
    setPopular3(result.results)
    }
    }, []);

    useEffect(() => {
        getData4()
    async function getData4() {
        let result = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=51cc7f5f459038d8f6fd27150449d6a1&language&language=en-US&page=1')
    .then(ress => {
        return ress.json()
    })
    .catch(err =>{
        return err.json()
    })
    setPopular4(result.results)
    }
    }, []);


    function turn1(){
        document.querySelector(".two").classList.add("d-none")
        document.querySelector(".one").classList.remove("d-none")
        color1 === "#032541" ? setColor1("#032541"): setColor1("#032541")
        color2 === "rgba(0, 0, 0, 0)" ? setColor2("rgba(0, 0, 0, 0)"): setColor2("rgba(0, 0, 0, 0)") 
    }
    function turn2(){
        document.querySelector(".two").classList.remove("d-none")
        document.querySelector(".one").classList.add("d-none")
        color1 === "#032541" ? setColor1("rgba(0, 0, 0, 0)"): setColor1("rgba(0, 0, 0, 0)")
        color2 === "rgba(0, 0, 0, 0)" ? setColor2("#032541") : setColor2("#032541")
    }

    function turn3(){
        document.querySelector(".two1").classList.add("d-none")
        document.querySelector(".one1").classList.remove("d-none")
        color1 === "#032541" ? setColor1("#032541"): setColor1("#032541")
        color2 === "rgba(0, 0, 0, 0)" ? setColor2("rgba(0, 0, 0, 0)"): setColor2("rgba(0, 0, 0, 0)") 
    }
    function turn4(){
        document.querySelector(".two1").classList.remove("d-none")
        document.querySelector(".one1").classList.add("d-none")
        color1 === "#032541" ? setColor1("rgba(0, 0, 0, 0)"): setColor1("rgba(0, 0, 0, 0)")
        color2 === "rgba(0, 0, 0, 0)" ? setColor2("#032541") : setColor2("#032541")
    }

    
    return (
        <div className='mb-5 container'>
            <div className="main_back">
              <div className=" img_card card text-bg-light m-0 p-0 ">
                  <img src="1.jpg" className="card-img img-fluid rasm" alt="..."/>
                  <div className="orqa card-img-overlay back">
                      <div className="row">
                        <div className="col-8">
                            <div className="text mt-3 ms-4">
                                <h1 className='text-light ps-1'>Welcome</h1>
                                <h4 className='text-light ps-1'>Millions of movies, TV shows and people to discover. Explore now.</h4>
                            </div>
                        <input onChange={(e) => setSearch(e.target.value)} className='search_item' placeholder='Search for movie, tv show,person...' type="search" 
                        />
                        <Link to={`/search/:${search}`} state={{soz: search}} className='search_tugma btn btn-info px-4'>Search</Link>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <p className='span_p my-4 fw-bold'>
                <span onClick={() => turn1()} style = {{backgroundColor : color1}} className='span_but'>On TV</span>
                <span onClick={() => turn2() } className=' fw-bold span_but span_1' style={ {backgroundColor: color2} }>In Theaters</span>
            </p>
              <p><span onClick={() => turn2() } className=' fw-bold span_but span_1' style={ {backgroundColor: color2} }>
                In Theaters
              </span></p>
            <div className="d-flex main_cardlar two d-none">
              {
                  (popular2.length > 0) ? popular2.map((item,index ) => {
                      return (
                          <>
                            <div key={index}>
                                <Link to={`/detail/${item.id}`} className="page border-light card my-3 p-2">
                                    
                                    <img className='back-photo'  src={halfimg + item.poster_path} alt="" />
                                    <p className='mb-0 sircle'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                                    <h5 className='pt-4'>{item.title}</h5>
                                    <p className='p-1 fw-bold'>{item.release_date}</p>
                                </Link>
                            </div>
                          </>
                      )
                  }) : (
                      <h3>Loading..</h3>
                  )
              }
            </div>
            <div className="d-flex main_cardlar one mb-5">
                {
                  (popular.length > 0) ? popular.map((item,index ) => {
                      return (
                          <>
                          <div key={index}>
                              <Link state={{id:item.id}} to={`/result/${item.id}`} className="page border-light card my-3 p-2">
                                  <img className='back-photo'  src={halfimg + item.poster_path} alt="" />
                                  <p className='mb-0 sircle'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                                  <h5 className='pt-4'>{item.title}</h5>
                                  <p className='p-1 fw-bold'>{item.release_date}</p>
                              </Link>
                          </div>
                          </>
                      )
                  }) : (
                      <h3>Loading..</h3>
                  )
                }
            </div>


            <p className='span_p my-4 fw-bold mt-5'>
                <span onClick={() => turn3()} style = {{backgroundColor : color1}} className='span_but'>Today</span>
                <span onClick={() => turn4() } className='fw-bold span_but span_1' style={ {backgroundColor: color2} }>This Week</span>
            </p>
              <p><span onClick={() => turn4() } className='fw-bold span_but span_1' style={ {backgroundColor: color2} }>
              This Week
              </span></p>
            <div className="d-flex main_cardlar two1 d-none">
              {
                  (popular3.length > 0) ? popular3.map((item,index ) => {
                      return (
                          <>
                            <div key={index}>
                                <Link state={{id:item.id}} to={`/tvresult/${item.id}`} className="page border-light card my-3 p-2">
                                    <img className='back-photo'  src={halfimg + item.poster_path} alt="" />
                                    <p className='mb-0 sircle'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                                    <h5 className='pt-4'>{item.name}</h5>
                                    <p className='p-1 fw-bold'>{item.first_air_date}</p>
                                </Link>
                            </div>
                          </>
                      )
                  }) : (
                      <h3>Loading..</h3>
                  )
              }
            </div>
            <div className="d-flex main_cardlar one1">
                {
                  (popular4.length > 0) ? popular4.map((item,index ) => {
                      return (
                          <>
                          <div key={index}>
                              <Link state={{id:item.id}} to={`/tvresult/${item.id}`} className="page border-light card my-3 p-2">
                                  <img className='back-photo'  src={halfimg + item.poster_path} alt="" />
                                  <p className='mb-0 sircle'><p className='calso'>{item.vote_average * 10}<sup className='sup'>%</sup></p></p>
                                  <h5 className='pt-4'>{item.name}</h5>
                                  <p className='p-1 fw-bold'>{item.first_air_date}</p>
                              </Link>
                          </div>
                          </>
                      )
                  }) : (
                      <h3>Loading..</h3>
                  )
                }
            </div>
        </div>
    );
}

export default Main;    