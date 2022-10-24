import "./Genre.css"

function GenreMovies({ movies }) {
    console.log(movies)
    const idsKeyGenreMovies = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];
    return [
        <p key={idsKeyGenreMovies[0].id}>ola</p>
    ]
}

export { GenreMovies };