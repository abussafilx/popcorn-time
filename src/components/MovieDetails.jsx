import { Link, useParams } from "react-router-dom"


function MovieDetails(props) {

    const { movieId } = useParams();

    const movie = props.moviesArr.find((movieObj) => {
        if (movieObj.id === parseInt(movieId)) {
            return true} else {
                return false
            }
        });


    return (
        <div className="MovieDetails card" key={movie.id}>
            <img src={movie.imgURL} alt={movie.title} />
            <div className="card-info">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
                <p>Genres: {movie.genres.map((e) => (<span>{e} </span>))}</p>

                <Link to="/" className="btn">
                    Back
                </Link>
            </div>
        </div>
    )

}

export default MovieDetails