const today = new Date();
const monthName = today.toLocaleString('default', { month: 'long' });
const dayNumber = today.getDate();
const humanReadableDate = `${monthName} ${dayNumber}`;
const omdbImdbIdTemplate = 'https://www.omdbapi.com/?apikey=7b748201&i=';

import { movies } from "./movies.mjs"

function onPageIsLoaded(onPageLoadedListener) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onPageLoadedListener);
  } else {
    onPageLoadedListener();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getMoviePosterUrl(imdbId) {
  let response = await fetch(omdbImdbIdTemplate + imdbId)
  console.log("response = " + JSON.stringify(response));
  let responseJson = await response.json();
  return responseJson["Poster"];
}

async function getRandomMovieForToday() {
  console.log("Today is " + humanReadableDate);

  let list = movies[humanReadableDate];

  let index = getRandomInt(list.length);

  let movie = list[index];
  console.log("Chosen movie is: " + JSON.stringify(movie));
  if (typeof movie == 'string') {
    movie = {title: movie};
  } else if (typeof movie == 'object') {
    let posterUrl = await getMoviePosterUrl(movie.imdb_id)
    movie.posterUrl = posterUrl;
  }
  return movie;
}

const onButtonClicked = async (event) => {
  // Get random movie from array for today's date
  let movie = await getRandomMovieForToday();

  // Update title
  const title = document.getElementById('title');
  title.textContent = movie.title;

  // Update text
  const text = document.getElementById('text');
  text.textContent = movie.text;

  // Update poster
  const poster = document.getElementById('poster');
  if (movie.posterUrl) {
    poster.src = movie.posterUrl;
  } else {
    poster.src = "";
  }
}

onPageIsLoaded(() => {
  const button = document.querySelector("button");
  button.addEventListener("click", onButtonClicked);
});
