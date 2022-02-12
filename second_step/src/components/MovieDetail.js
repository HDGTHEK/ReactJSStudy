import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({
  coverImg,
  title,
  summary,
  genres,
  year,
  runtime,
  discription_intro,
  download_count,
  like_count,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <li>{year}</li>
      <li>{runtime}</li>
      <p>{discription_intro}</p>
      <li>{download_count}</li>
      <li>{like_count}</li>
      <h2>
        <Link to={`/`}>Main</Link>
      </h2>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  discription_intro: PropTypes.string.isRequired,
  download_count: PropTypes.number.isRequired,
  like_count: PropTypes.number.isRequired,
};

export default MovieDetail;
