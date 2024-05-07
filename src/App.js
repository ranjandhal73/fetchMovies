import React, {useState, useEffect, useContext} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import Form from './components/Form';
import FilmContext from './store/film-context';
import axios from 'axios';

function App() {
  const {url,film} = useContext(FilmContext);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const fetchMoviesHandler = async () =>{
    setLoading(true);
    try {
      const res = await axios.get(`${url}`)
      setFilms(res.data)
      setLoading(false)
    } 
    catch (error) {
      
    }
     
  }

  useEffect(()=>{
    setFilms(film)
  },[film])

  return (
    <>
      <section>
        <Form />
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {loading && <p className='loader'> </p>}
        {!loading && <MoviesList film={films}  />} 
      </section>
    </>
  );
}

export default App;
