import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY } from "../secret"
import "./Genres.css"
import { GenreMovies } from "../GenreMovies"
import { useParams } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"

function Genres() {
    const { genre_name } = useParams()
    const [genresList, setGenresList] = useState([]);
    const [genreListSelect, setGenreListSelect] = useState("");
    const [loadingGenreMovies, setLoadingGenreMovies] = useState(false);
    const [pageGenre, setPageGenre] = useState(1);
    const [maxPageGenre, setMaxPageGenre] = useState(true);
    const [genreSelect, setGenreSelect] = useState(() => {
        if (genre_name == undefined) {
            return "";
        }
        else {
            setLoadingGenreMovies(true)
            return genre_name
        }
    });
    const [genreId, setGenreId] = useState(null)
    const [moviesByGenre, setMoviesByGenre] = useState([])
    console.log(genre_name)
    const idsKeyGenres = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];

    useEffect(() => {
        async function getGenresList() {
            const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            setGenresList(() => {
                if (genreSelect !== "") {
                    const idForA = res.data.genres.filter(name => genreSelect === name.name)
                    setLoadingGenreMovies(false)
                    setGenreId(idForA[0].id)
                    return res.data.genres
                }
                return res.data.genres

            })
        }

        getGenresList();
    }, [])


    useEffect(() => {
        if (genreId !== null) {
            async function getMovieByGenre() {
                const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&&with_genres=${genreId}&&page=${pageGenre}`)
                setMoviesByGenre((prevMovies) => (
                    prevMovies.concat(res.data.results)
                ))
                setMaxPageGenre(res.data.page < res.data.total_pages);
                setLoadingGenreMovies(false)
            }

            getMovieByGenre();
        }


    }, [genreId, pageGenre])


    return [
        <section key={idsKeyGenres[0].id} className="genres-section">
            <div
                onClick={() => {
                    if (genreListSelect === "") {
                        return setGenreListSelect("active")
                    }
                    else {
                        return setGenreListSelect("")
                    }
                }}
                className="genres-title__container">
                <h2 className="genres-title">GEN<b>RES</b></h2>
                <svg className="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z" /></svg>
            </div>
            <h3 className="genre-title_selected">{genreSelect}</h3>
            <ul className={`genres-option__container ${genreListSelect && `genres-option__active`}`}>
                {genresList.map((genre) => (
                    <li key={genre.id} onClick={() => {
                        setLoadingGenreMovies(true)
                        setMoviesByGenre([])
                        setGenreSelect(genre.name)
                        setGenreListSelect("")
                        setGenreId(genre.id)
                    }} className="genre-option">
                        <p>{genre.name}</p>
                    </li>
                ))}
            </ul>

            <InfiniteScroll dataLength={moviesByGenre.length} hasMore={maxPageGenre} next={() => setPageGenre((prevPage) => prevPage + 1)}>
                <GenreMovies
                    movies={moviesByGenre}
                    loadingGenreMovies={loadingGenreMovies}
                />
            </InfiniteScroll>

        </section>
    ]
}

export { Genres }