import { Trends } from "../Trends";
import { RankedSection } from "../RankedSection";
import { SeriesSection } from "../SeriesSection";

function Home({ movieDetail, setImageDetail, setMovieDetail, setLoading, loading, imageDetail }) {
    return [
        <Trends
            movieDetail={movieDetail}
            setMovieDetail={setMovieDetail}
            setLoading={setLoading}
            loading={loading}
            imageDetail={imageDetail}
            setImageDetail={setImageDetail}
        />,

        <RankedSection
            setLoading={setLoading}
            loading={loading}
        />,

        <SeriesSection
            setLoading={setLoading}
            loading={loading}
        />
    ];
}

export { Home }