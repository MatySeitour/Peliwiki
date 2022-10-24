import { Trends } from "../Trends";
import { RankedSection } from "../RankedSection";
import { SeriesSection } from "../SeriesSection";

function Home({ movieDetail, setImageDetail, setMovieDetail, setLoading, loading, imageDetail }) {

    const idsHome = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
    ]

    return [
        <Trends
            key={idsHome[0].id}
            movieDetail={movieDetail}
            setMovieDetail={setMovieDetail}
            setLoading={setLoading}
            loading={loading}
            imageDetail={imageDetail}
            setImageDetail={setImageDetail}
        />,

        <RankedSection
            key={idsHome[1].id}
            setLoading={setLoading}
            loading={loading}
        />,

        <SeriesSection
            key={idsHome[2].id}
            setLoading={setLoading}
            loading={loading}
        />
    ];
}

export { Home }