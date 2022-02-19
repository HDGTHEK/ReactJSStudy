import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({
  coverImg,
  title,
  genres,
  year,
  runtime,
  description_intro,
  download_count,
  like_count,
}) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>{title}</h2>
      <ul className={styles.movie__genres}>
        <span>장르:</span>
        {genres && genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
      <ol className={styles.movie__year}>출시연도: {year}</ol>
      <ol className={styles.movie__list}>런타임: {runtime}분</ol>
      <ol className={styles.movie__list}>다운로드 수: {download_count}회</ol>
      <ol className={styles.movie__list}>좋아요 수: {like_count}</ol>
      <p className={styles.movie__description}>설명: {description_intro}</p>
      <h2 className={styles.go_to_main}></h2>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  description_intro: PropTypes.string.isRequired,
  download_count: PropTypes.number.isRequired,
  like_count: PropTypes.number.isRequired,
};

export default MovieDetail;
