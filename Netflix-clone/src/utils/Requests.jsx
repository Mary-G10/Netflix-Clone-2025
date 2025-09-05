//  const API_KEY = import.meta.env.VITE_API_KEY;

// Generate random page number between 1 and 20
// const getRandomPage = () => Math.floor(Math.random() * 20) + 1;

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
//   fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=${getRandomPage()}`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=${getRandomPage()}`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=${getRandomPage()}`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=${getRandomPage()}`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=${getRandomPage()}`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&page=${getRandomPage()}`,
//   fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=${getRandomPage()}`,
// };

//  export default requests;

//  const API_KEY = import.meta.env.VITE_API_KEY;
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };
//  export default requests;
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;



// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };
// export default requests;

