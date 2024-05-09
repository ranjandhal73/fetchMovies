import React,{useEffect, useState} from 'react'
import FilmContext from './film-context';
import axios from 'axios';


function FilmsProvider({children}) {
    const URL = 'https://crudcrud.com/api/8fdbdb07fb1c44938fd557498bf0c138/films'
    const [film,setFilm] = useState([])

    const addFilms = (film) =>{
        axios.post(`${URL}`,film)
        .then((res)=>{
            setFilm((prev)=>[res.data,...prev])
        })
        
    }
    const  removeFilms =  (id) =>{
        setFilm((prev)=>prev.filter(film => film._id !== id));
         axios.delete(`${URL}/${id}`);
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