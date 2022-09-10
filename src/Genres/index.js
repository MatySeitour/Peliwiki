import { useParams } from "react-router-dom"

function Genres() {

    const { nameGenre } = useParams();

    return [
        <p>{nameGenre}</p>
    ]
}

export { Genres }