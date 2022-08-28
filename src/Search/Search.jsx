import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
    const params = useLocation()
    const [search, setSearch] = useState([]);
    const soz = params.state.soz
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=acfaeb6837638498f011e5e16a9e305d&language=en-US&page=1&include_adult=false`, {
            params: {
                query: soz
            }
        })
        .then(ress => {
            setSearch(ress.data.results);
            console.log(ress.data.results);
        })
        .catch(err => {
            console.log(err);
        })  


        console.log(soz);
    }, []);
    return (
        <>
        <div className='container-fluid row'> 
            <h4>Search Results</h4>
            {
                (search.length>0)&& search.map((item , index)=>{
                    return(
                        <div>
                              <div className="w-100 cardd text-center border rounded-4 my-3" key={index}>
                                <div className="d-flex  shadow mt-5">
                                    <div className="">
                                    <img className='search_photos ms-4 mb-4' width="250" src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} alt={item.title} />
                                    </div>
                                  <div className="col-6">
                                      <h4 className='text-start ms-5 mt-1'>{item.title}</h4>
                                      <p className='text-start ms-5'>{item.release_date}</p>
                                      <p className='text-start ms-5'>{item.overview}</p>
                                  </div>
                                </div>
                              </div>
                      </div>
                    )
                })
            }
        </div>
        </>
    );
}

export default Search;