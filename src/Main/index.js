import { useState } from 'react';
// import { Trends } from '../Trends';
// import { RankedSection } from '../RankedSection';
// import { SeriesSection } from '../SeriesSection';
import { Details } from '../Details';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Main.css"
import { Home } from '../Home';


function Main({ movieDetail, setMovieDetail, }) {
    const [value, setValue] = useState({
        loading: true,
    })
    const [imageDetail, setImageDetail] = useState("");

    // useEffect(() => {
    //     if (movieDetail.image) {
    //         window.location.hash = "#details"
    //     }
    //     else {
    //         window.location.hash = ""
    //     }

    // }, [movieDetail])

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