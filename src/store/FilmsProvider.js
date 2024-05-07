import React,{useEffect, useState} from 'react'
import FilmContext from './film-context';
import axios from 'axios';


function FilmsProvider({children}) {
    const URL = 'https://crudcrud.com/api/b6ea39807aac4060978fdc1e95579f46/films'
    const [film,setFilm] = useState([])

    const addFilms = (film) =>{
        axios.post(`${URL}`,film)
        .then((res)=>{
            setFilm((prev)=>[res.data,...prev])
        })
        
    }

    const removeFilms = (id) =>{
        setFilm((prev)=>prev.filter(film => film.id !== id));
    }

    useEffect(()=>{
        axios.get(`${URL}`)
        .then((res)=> setFilm(res.data))
        .catch((err)=>console.log(err));
    },[])

    const filmContext = {
        film: film,
        addFilm: addFilms,
        removeFilm: removeFilms,
        url: URL,
    }

  return <FilmContext.Provider value={filmContext}>
    {children}
  </FilmContext.Provider>
}

export default FilmsProvider;