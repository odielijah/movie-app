import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="">
        <MovieList type="popular" title="Popular" />
        <MovieList type="top_rated" title="Top Rated" />
        <MovieList type="upcoming" title="Upcoming" />
      </main>
    </div>
  );
};

export default App;
