import Movie from "./Movie";
import "./MovieList.css"



function MovieList(props) {

        return (
        <section className="MovieList">
            {props.moviesArr.map((movieObj) => {
                return (
                    <Movie
                        key={movieObj.id}
                        movieDetails={movieObj}
                        callbackToDelete={props.deleteMovie}
                    />)
            })}
        </section>
    );
}

export default MovieList;