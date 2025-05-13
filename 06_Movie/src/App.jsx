import React, { useState,useEffect } from 'react'
import { useDebounce } from 'react-use';
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { updateSearchCount } from './appwrite';

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

  const [MovieList, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('')
  useDebounce(()=>setDebounceSearchTerm(SearchTerm),500,[SearchTerm])
  // "Wait until the user stops typing for 500ms, and then update DebounceSearchTerm to match SearchTerm to prevent making too many API requests"



  const fetchMovies = async(query="")=>{

    setisLoading(true)
    setErrorMessage('')
    try{
      
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS)
      // alert(response)
      if(!response.ok)
      {
        throw new Error("Failed to fetch movies")
      }

      const data = await response.json()

      if(data.Response === 'False')
      {
        setErrorMessage(data.Error || "Failed to fetch movies")
        setMovieList([])
        return;
      }
      setMovieList(data.results || [])
      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    }
    catch(error){
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.")
    }
    finally{
      setisLoading(false)
    }
  }
  useEffect(()=>{
    fetchMovies(debounceSearchTerm);
  },[debounceSearchTerm]);
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
                  <h2 className='mt-[40px]'>All Movies</h2>
                  {isLoading?(
                    <Spinner/>
                  ):ErrorMessage?(
                    <p className='text-red-500'>{ErrorMessage}</p>
                  ):(
                    <ul>
                      {MovieList.map((movie)=>(
                        <MovieCard key={movie.id} movie={movie}/>
                      ))}
                    </ul>
                  )
                  }

                </section>
            </div>
        </div>
    </main>
  )
}

export default App
