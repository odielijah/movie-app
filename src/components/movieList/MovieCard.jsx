import "./movieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="movie-card"
      target="_blank"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie poster"
        className="movie-poster"
      />

      <div className="movie-details">
        <h3 className="movie-details-heading">{movie.original_title}</h3>
        <div className="align-center movie-date-rate">
          <p>{movie.release_date}</p>
          <p className="movie-rating">
            {Math.round(movie.vote_average * 10) / 10}{" "}
            <img src={Star} alt="rating icon" className="card-emoji" />
          </p>
        </div>
        <p className="movie-description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
