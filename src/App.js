import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movie, setMovie] = useState([]);
  const fetchMoviesHandler = async () =>{
   try {
    const response = await fetch ('https://swapi.dev/api/films');
    if(!response.ok){
      throw new Error('Something went wrong!');
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
    console.log(error);
   }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
