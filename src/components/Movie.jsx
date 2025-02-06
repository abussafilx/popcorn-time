function Movie(props) {
    return (
        <div className="card">

            <img src={props.movieDetails.imgURL} alt={props.movieDetails.title} />
            <div className="card-info">
                <h3>{props.movieDetails.title}</h3>
                <p>Rating: {props.movieDetails.rating}</p>
                <p>Genres: {props.movieDetails.genres.map((e) => (<span>{e} </span>))}</p>

                <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>
                    Delete this movie
                </button>
            </div>
        </div>

    );
}

export default Movie;