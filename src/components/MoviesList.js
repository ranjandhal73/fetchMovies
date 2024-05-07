import React, {useContext} from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';
import FilmContext from '../store/film-context';

const MovieList = ({film}) => {
  //  const {film, url} = useContext(FilmContext)
  return (
    <ul className={classes['movies-list']}>
      {film.map((movie) => (
        <Movie
          key={movie._id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
