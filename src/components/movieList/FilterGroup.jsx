const FilterGroup = ({ minRating, onRatingClick, ratings }) => (
  <ul className="align-center movie-filter">
    {ratings.map((rate) => (
      <li
      key={rate}
        className={
          minRating === rate ? "movie-filter-item active" : "movie-filter-item"
        }
        onClick={() => onRatingClick(rate)}
      >
        {rate}+ star
      </li>
    ))}
  </ul>
);

export default FilterGroup;
