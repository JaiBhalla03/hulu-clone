const API_KEY = process.env.API_KEY;

export default{
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language-en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language-en-US`
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchWar: {
        title: "War",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`
    },
    fetchDocumentry: {
        title: "Documentary",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchMusic: {
        title: "Music",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`
    },

}