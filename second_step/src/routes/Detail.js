import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetails] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            key={detail.id}
            coverImg={detail.medium_cover_image}
            title={detail.title}
            genres={detail.genres}
            year={detail.year}
            runtime={detail.runtime}
            description_intro={detail.description_intro}
            download_count={detail.download_count}
            like_count={detail.like_count}
          />
          )
        </div>
      )}
    </div>
  );
}

export default Detail;
