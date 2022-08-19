import { useLocation } from "react-router-dom"

function SearchSection() {

    const location = useLocation()

    console.log(location);

    return (
        <div>hola</div>
    )
}

export { SearchSection }