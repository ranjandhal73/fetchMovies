import React, {useContext, useState} from 'react'
import filmContext from '../store/film-context'

function Form() {
    const { addFilm} = useContext(filmContext);
    const [title,setTitle] = useState('')
    const [openingText,setOpeningText] = useState('')
    const [releaseDate,setReleaseDate] = useState('')

    const addMovieHandler = () =>{
        const movies = {
            title,
            openingText,
            releaseDate
        }
        addFilm(movies);
        setTitle('');
        setOpeningText('');
        setReleaseDate('');
    }


  return (
    <div>
        <label>
            Title:
            <input 
                type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
        </label>
        <label>
            Opening Text:
            <input 
                type="text" 
                value={openingText}
                onChange={(e)=>setOpeningText(e.target.value)}
            />
        </label>
        <label>
            Release Date:
            <input 
                type="text" 
                value={releaseDate}
                onChange={(e)=>setReleaseDate(e.target.value)}
            />
        </label>
        <button onClick={addMovieHandler}>Add Movies</button>
    </div>
  )
}

export default Form