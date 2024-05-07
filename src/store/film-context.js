import { createContext } from "react"

const FilmContext = createContext(
    {
        film: [],
        addFilm: (film) => { },
        removeFilm: (id) => {},
        url:'' ,
    }
)

export default FilmContext;