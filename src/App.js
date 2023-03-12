import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  async function fetchData() {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b6999b8becbbe1d6537527e1e1fb785f"
    );
    let data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  }

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=b6999b8becbbe1d6537527e1e1fb785f&query=${query}`;
      let response = await fetch(url);
      let data = await response.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    searchMovie();
  }, [query]);

  return (
    <div className="App">
      <Navbar
        query={query}
        setQuery={setQuery}
        movies={movies}
        setMovies={setMovies}
        searchMovie={searchMovie}
      />
      {movies.length > 0 ? (
        <Movies movies={movies} />
      ) : (
        <h2>Sorry! No Movies Found</h2>
      )}
    </div>
  );
}

export default App;
