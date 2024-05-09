import React,{useContext} from 'react';
import FilmContext from '../store/film-context';
import classes from './Movie.module.css';

const Movie = (props) => {
 const {removeFilm} = useContext(FilmContext)
 const deleteHandler = (id) => {
  removeFilm(id)
 }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={()=>deleteHandler(props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
