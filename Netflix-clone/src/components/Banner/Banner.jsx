import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/Requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  // Creates state variable movie (initially empty object) to store selected movie data
  // Creates state variable loading (initially true) to track data fetching status
  // Declares async function to fetch movie data from API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        // when we say axios, it's base url and request means find from the rquest and concatenate
        // Makes GET request to fetch Netflix Originals using the configured axios instance
        // Extracts the results array from API response
        // Checks if results exist and contain at least one movie
        // Selects a random movie from the results array using Math.random()
        const results = request.data.results;

        if (results && results.length > 0) {
          const randomMovie =
            results[Math.floor(Math.random() * results.length)];
          setMovie(randomMovie);
        } else {
          console.log("⚠️ No results found");
        }
        // Sets loading to false after successful data processing
        // Logs error details and sets loading to false
        setLoading(false);
      } catch (error) {
        console.error("❌ API Error:", error);
      }
    };

    fetchData();
  }, []);
  // Calls fetchData function and empty dependency array means useEffect runs only once on mount
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    // string length of the description >200, just write and place ...
  };

  // Prevents default behavior and stops event bubbling
  // Logs click event and gets movie title with fallback option
  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("🎬 PLAY BUTTON CLICKED!");

    const movieTitle =
      movie?.title || movie?.name || movie?.original_name || "Featured Content";
    // console.log("Movie:", movieTitle);

    // Force alert to show
    window.alert(`▶️ PLAYING: ${movieTitle}`);
  };

  const handleMoreInfo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("ℹ️ MORE INFO BUTTON CLICKED!");

    const movieTitle =
      movie?.title || movie?.name || movie?.original_name || "Featured Content";
    // console.log("Movie:", movieTitle);

    //  event handler that displays movie information in an alert
    window.alert(
      `ℹ️ MORE INFO: ${movieTitle}\n\nOverview: ${
        movie?.overview || "No description available"
      }`
    );
  };

  // if (loading) {
  //   return (
  //     <div className="banner__loading">
  //       <div className="banner__loading-text">Loading amazing content...</div>
  //     </div>
  //   );
  // }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: movie?.backdrop_path
          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
          : undefined,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            "Featured Content"}
          {/* choose from 3 of name, pick one name */}
        </h1>

        <div className="banner__buttons">
          <button
            className="banner__button banner__button--play"
            onClick={handlePlay}
            aria-label={`Play ${movie?.title || "featured content"}`}
          >
            <span className="banner__button-icon">▶</span>
            Play
          </button>
          {/* Play button with accessibility label and click handler */}
          <button
            className="banner__button banner__button--info"
            onClick={handleMoreInfo}
            aria-label={`More info about ${movie?.title || "featured content"}`}
          >
            <span className="banner__button-icon">ⓘ</span>
            More Info
          </button>
        </div>

        <p className="banner__description">
          {truncate(
            movie?.overview || "Discover amazing content on Netflix.",
            200
          )}
        </p>
        {/* Movie description truncated to 200 characters with fallback text   */}
      </div>
      {/* Empty div likely used for CSS fade effect at bottom of banner */}
      <div className="banner__fade-bottom" />
    </div>
  );
};

export default Banner;

// Imports React and two hooks: useState for state management and useEffect for side effects
// Imports a configured axios instance from a utility file for making HTTP requests
// Imports an object containing API endpoint configurations
// const [movie, setMovie] = useState({});
// Creates state variable movie (initially empty object) to store the selected movie data
// setMovie is the function to update this state
// const [loading, setLoading] = useState(true);
// Creates state variable loading (initially true) to track whether data is being fetched
// setLoading is the function to update this state
// useEffect(() => {
// Hook that runs side effects when the component mounts
// const fetchData = async () => {
// Declares an async function to fetch movie data from the API
// const request = await axios.get(requests.fetchNetflixOriginals);
// Makes a GET request to fetch Netflix Originals using the configured axios instance
// requests.fetchNetflixOriginals contains the API endpoint URL
// const results = request.data.results;
// Extracts the results array from the API response
// if (results && results.length > 0) {
// Checks if results exist and contain at least one movie
// const randomMovie = results[Math.floor(Math.random() * results.length)];
// Selects a random movie from the results array using Math.random()
// Math.floor() rounds down to get a valid array index
// setMovie(randomMovie);
// Updates the movie state with the randomly selected movie
// } else {
//   console.log("⚠️ No results found");
// }
// Logs a warning if no results are found in the API response
// setLoading(false);
// Sets loading to false after successful data processing
// } catch (error) {
// Catches any errors that occur during the API reque
// etMovie({
//   title: "Sample Netflix Original",
//   overview: "Unable to fetch live data...",
//   backdrop_path: null,
// });
// Sets fallback movie data when the API fails, ensuring the component still displays content
// fetchData();
// }, []);
// Calls the fetchData function
// Empty dependency array [] means useEffect runs only once when component mounts
// const truncate = (string, n) => {
//   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
// };

// Function that truncates text if it's longer than n characters
// Uses optional chaining (?.) to safely check string length
// Adds "..." at the end of truncated text
// const handlePlay = (e) => {
//   e.preventDefault();
//   e.stopPropagation();
// Prevents default button behavior and stops event bubbling
// if (loading) {
//   return (
//     <div className="banner__loading">
//       <div className="banner__loading-text">Loading amazing content...</div>
//     </div>
//   );
// }
// Returns a loading indicator if data is still being fetched
{
  /* <h1 className="banner__title">
  {movie?.title || movie?.name || movie?.original_name || "Featured Content"}
</h1>

Displays movie title with multiple fallback options */
}
// <div className="banner__fade-bottom" />
// <div className="banner__fade-bottom" />
// Empty div used for CSS fade effect at the bottom of the banner
