import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "../secret";
import axios from "axios";
import { SearchResults } from "../SearchResults";
import "./SearchSection.css"

function SearchSection() {

    const [resultsSearch, setResultsSearch] = useState([])
    const { input } = useParams();

    useEffect(() => {
        async function getSearchMovies() {
            const rest = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${input}`);
            console.log(rest.data.page)
            setResultsSearch(rest.data.results)
        }

        getSearchMovies();
    }, [])

    console.log(resultsSearch)

    return (
        <section className="search-section">
            <h2 className="title-search">SEA<b>RCH </b>RESU<b>LTS</b> F<b>OR</b> {input}</h2>
            <ul className="trends-list">
                {resultsSearch.map((query) => (
                    <SearchResults
                        key={query.id}
                        movieId={query.id}
                        title={query.title}
                        image={query.poster_path}
                        titleSerie={query.name}
                    />
                ))}
                <div>hola</div>
            </ul>
        </section>
    )
}

export { SearchSection }