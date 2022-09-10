import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "../secret";
import axios from "axios";
import { SearchResults } from "../SearchResults";
import InfiniteScroll from "react-infinite-scroll-component";
import "./SearchSection.css"

function SearchSection() {

    const [resultsSearch, setResultsSearch] = useState([])
    const { input } = useParams();
    const [page, setPage] = useState(1)
    const [inputSearch, setInputSearch] = useState(input)
    const [maxPages, setMaxPages] = useState(true)


    useEffect(() => {
        async function getSearchMovies() {
            window.scrollTo(0, 0)
            try {
                if (inputSearch !== input) {
                    console.log("entro")
                    setResultsSearch([])
                    setInputSearch(input)
                    setPage(1);
                }
                const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${input}&page=${page}`);
                console.log(page)
                setResultsSearch((prev) => (
                    prev.concat(res.data.results)
                )
                )
                console.log(resultsSearch)

                setMaxPages(res.data.page < res.data.total_pages);
            }
            catch (e) {
                console.error(e)
            }
        }
        getSearchMovies();
    }, [input, page])

    console.log(resultsSearch)
    if (resultsSearch) {
        { console.log("asdffd") }
        return [
            <h2 className="title-search">SEA<b>RCH </b>RESU<b>LTS</b> F<b>OR</b> {input}</h2>
        ]
    }

    else {
        return [
            <section className="search-section">
                <h2 className="title-search">SEA<b>RCH </b>RESU<b>LTS</b> F<b>OR</b> {input}</h2>
                <InfiniteScroll dataLength={resultsSearch.length} hasMore={maxPages} next={() => setPage((prevPage) => prevPage + 1)}>
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
                    </ul>,
                </InfiniteScroll>

                {/* <button onClick={() => setPage(prevPage => prevPage + 1)}>+</button>
                <button onClick={() => setPage(prevPage => prevPage - 1)}>-</button> */}
            </section>
        ]
    }


}

export { SearchSection }