import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios"
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
// we need to instal movietrailer and react youtube to play the trailer
// Destructures props: title (section title), fetchUrl (API endpoint), isLargeRow (boolean for styling)
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";
  // Creates state for storing YouTube video ID of selected movie trailer

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
// whenever the url change , it will re-render
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      // If the trailer is present, make it empty
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          // .then is a promise
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
           console.log(urlParams);
           console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
          // set triler by  using movie id
        })
        .catch((error) => {
          console.log("Trailer not found", error);
        });
    }
  };
// go to npm and search for react youtube and find the info about opts
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      // it'll play automatic
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
      {/* if there is a trailerurl, by using the movie id, play the trailer */}
    </div>
  );
};

export default Row;
