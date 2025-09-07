import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/Requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("🎬 Fetching Netflix Originals...");
        // console.log("API URL:", requests.fetchNetflixOriginals);

        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log("✅ API Response:", request.data);

        const results = request.data.results;

        if (results && results.length > 0) {
          const randomMovie =
            results[Math.floor(Math.random() * results.length)];
          console.log("🎯 Selected movie:", randomMovie);
          setMovie(randomMovie);
        } else {
          console.log("⚠️ No results found");
        }

        setLoading(false);
      } catch (error) {
        console.error("❌ API Error:", error);
        console.error("Error details:", error.response?.data);
        setLoading(false);

        // Set fallback movie data
        setMovie({
          title: "Sample Netflix Original",
          overview:
            "Unable to fetch live data. This is a sample description for the Netflix banner component. Enjoy streaming your favorite shows and movies.",
          backdrop_path: null,
        });
      }
    };

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    // string length of the description >200, just write and place ...
  };

  // Click event handlers with extra debugging
  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("🎬 PLAY BUTTON CLICKED!");

    const movieTitle =
      movie?.title || movie?.name || movie?.original_name || "Featured Content";
    console.log("Movie:", movieTitle);

    // Force alert to show
    window.alert(`▶️ PLAYING: ${movieTitle}`);

    // Additional debug
    console.log("Play function executed successfully");
  };

  const handleMoreInfo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("ℹ️ MORE INFO BUTTON CLICKED!");

    const movieTitle =
      movie?.title || movie?.name || movie?.original_name || "Featured Content";
    console.log("Movie:", movieTitle);

    // Force alert to show
    window.alert(
      `ℹ️ MORE INFO: ${movieTitle}\n\nOverview: ${
        movie?.overview || "No description available"
      }`
    );

    // Additional debug
    console.log("More Info function executed successfully");
  };

  if (loading) {
    return (
      <div className="banner__loading">
        <div className="banner__loading-text">Loading amazing content...</div>
      </div>
    );
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: movie?.backdrop_path
          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
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
      </div>

      <div className="banner__fade-bottom" />
    </div>
  );
};

export default Banner;

// import React, { useState, useEffect } from "react";
// import axios from "../../utils/axios";
// import requests from "../../utils/Requests";
// import "./Banner.css";

// const Banner = () => {
//   const [movie, setMovie] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // console.log("🎬 Fetching Netflix Originals...");
//         // console.log("API URL:", requests.fetchNetflixOriginals);

//         const request = await axios.get(requests.fetchNetflixOriginals);
//         console.log("✅ API Response:", request.data);

//         const results = request.data.results;

//         if (results && results.length > 0) {
//           const randomMovie =
//             results[Math.floor(Math.random() * results.length)];
//           console.log("🎯 Selected movie:", randomMovie);
//           setMovie(randomMovie);
//         } else {
//           console.log("⚠️ No results found");
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("❌ API Error:", error);
//         console.error("Error details:", error.response?.data);
//         setLoading(false);

//         // Set fallback movie data
//         setMovie({
//           title: "Sample Netflix Original",
//           overview:
//             "Unable to fetch live data. This is a sample description for the Netflix banner component. Enjoy streaming your favorite shows and movies.",
//           backdrop_path: null,
//         });
//       }
//     };

//     fetchData();
//   }, []);

//   const truncate = (string, n) => {
//     return string?.length > n ? string.substr(0, n - 1) + "..." : string;
//     // string length of the description >200, just write and place ...
//   };

//   if (loading) {
//     return (
//       <div className="banner__loading">
//         <div className="banner__loading-text">Loading amazing content...</div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundImage: movie?.backdrop_path
//           ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
//           : undefined,
//       }}
//     >
//       <div className="banner__contents">
//         <h1 className="banner__title">
//           {movie?.title ||
//             movie?.name ||
//             movie?.original_name ||
//             "Featured Content"}
//             {/* choose from 3 of name, pick one name */}
//         </h1>

//         <div className="banner__buttons">
//           <button className="banner__button banner__button--play">
//             <span className="banner__button-icon">▶</span>
//             Play
//           </button>

//           <button className="banner__button banner__button--info">
//             <span className="banner__button-icon">ⓘ</span>
//             More Info
//           </button>
//         </div>

//         <p className="banner__description">
//           {truncate(
//             movie?.overview || "Discover amazing content on Netflix.",
//             200
//           )}
//         </p>
//       </div>

//       <div className="banner__fade-bottom" />
//     </div>
//   );
// };

// export default Banner;
