function getTopRatedMovies() {
  const apiKey = process.env.TMDB_API_KEY; // Get the API key from environment variables
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMovies(data.results.slice(0, 10)))
    .catch((error) => console.error("Error:", error));
}

function displayMovies(movies) {
  const movieList = document.getElementById("movies");
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
    `;
    movieList.appendChild(li);
  });
}

getTopRatedMovies();
