import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./movieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title }) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filterMovies, setFilterMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=e94cfbeea5915606a9f5fd5768c6a24d`,
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie-list" id={type}>
      <header className="align-center movie-list-header">
        <h2 className="align-center movie-list-heading">{title}</h2>

        <div className="align-center movie-list-fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            className="movie-sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">Sortby</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie-sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie-cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
