import React, { useState,useEffect } from 'react'
import Search from './components/Search'
const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS ={
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`

  }
}

const App = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  const [ErrorMessage, setErrorMessage] = useState('')

  const fetchMovies = async()=>{
    try{
      const endpoint =  `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)
      // alert(response)
      if(!response.ok)
      {
        throw new Error("Failed to fetch movies")
      }

      const data = await response.json()
      console.log(data);
      
    }
    catch(error){
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.")
    }
  }
  useEffect(()=>{
    fetchMovies();
  },[])
  return (
    <main>
        <div className='pattern'>
            <div div className="wrapper">
                <header>
                    <img src="/images/hero.png" alt="" />
                    <h1>Find <span className='text-gradient'>Movie</span> You'll enjoy Without the Hassle</h1>
                    <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
                </header>
                <section className='all-movies'>
                  <h2>All Movies</h2>
                  {ErrorMessage && <p className='text-red-500'>{ErrorMessage}</p>}

                </section>
            </div>
        </div>
    </main>
  )
}

export default App
