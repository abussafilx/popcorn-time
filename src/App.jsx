import { useState } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./pages/MovieList"
import movies from "./data/movies.json"
import About from "./pages/About";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newListOfMovies = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newListOfMovies);
  }

  return (
    <>
    <Header numberOfMovies={moviesToDisplay.length} />
      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie}/>} />
        <Route path="/about" element={<About></About>} />
      </Routes>      
      <Footer />
    </>
  )
}

export default App
