import { useState } from 'react';
import { Details } from '../Details';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { SearchSection } from '../SearchSection';
import { SeriesDetails } from '../SeriesDetails';
import { NotFound } from '../NotFound';
import "./Main.css"
import { Home } from '../Home';


function Main({ movieDetail, setMovieDetail, }) {
    const [value, setValue] = useState({
        loading: true,
    })
    const [imageDetail, setImageDetail] = useState("");

    return (
        <main className='main'>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home
                        movieDetail={movieDetail}
                        setMovieDetail={setMovieDetail}
                        setLoading={setValue}
                        loading={value.loading}
                        imageDetail={imageDetail}
                        setImageDetail={setImageDetail}
                    />} />
                    <Route exact path='/movie/:id' element={<Details
                        imageDetail={imageDetail}
                        setImageDetail={setImageDetail}
                        movieDetail={movieDetail}
                        setMovieDetail={setMovieDetail}
                    />} />

                    <Route exact path='?search/:input' element={<SearchSection />} />

                    <Route exact path='*' element={<NotFound />} />

                    <Route exact path='/series/:id' element={<SeriesDetails />} />

                </Routes>
            </BrowserRouter>
        </main>

    )

    // if (!movieDetail.image) {
    //     return (
    //         <main className='main'>
    // <Trends
    //     movieDetail={movieDetail}
    //     setMovieDetail={setMovieDetail}
    //     setLoading={setValue}
    //     loading={value.loading}
    //     imageDetail={imageDetail}
    //     setImageDetail={setImageDetail}
    // />


    //         </main>
    //     );
    // }
    // else {
    //     return (
    //         <main>
    //             <Details
    //                 imageDetail={imageDetail}
    //                 setImageDetail={setImageDetail}
    //                 movieDetail={movieDetail}
    //                 setMovieDetail={setMovieDetail}
    //             />
    //         </main>
    //     )

    // }

}

export { Main };