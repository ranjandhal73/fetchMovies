import React, {useState, useEffect} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryTimer, setRetryTimer] = useState(null);

  const fetchMoviesHandler = async () =>{
    setIsLoading(true);
    setError(null);
   try {
    const response = await fetch ('https://swapi.dev/api/films0');

    if(!response.ok){
      throw new Error(`Something went wrong! ...Retrying `);
    }
  
    const data = await response.json();
    const transferedMovie = data.results.map((movie)=>{
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date
      }
    })
    setMovie(transferedMovie);
  } catch (error) {
    setError(error.message)
    setRetryTimer(setTimeout(()=>fetchMoviesHandler,500));
  }
  setIsLoading(false)
  }

  const cancelHandler = () =>{
      clearTimeout(retryTimer)
      setError(null);
      setIsLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movie} />}
        {isLoading && <span className="loader"></span>}
        {!isLoading && error && (
          <div>
            <p>{error}</p>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        )}
        
      </section>
    </React.Fragment>
  );
}

export default App;
