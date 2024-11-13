const today = new Date();
const monthName = today.toLocaleString('default', { month: 'long' });
const dayNumber = today.getDate();
const humanReadableDate = `${monthName} ${dayNumber}`;

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

function getRandomMovieTitleForToday() {
  console.log("Today is " + humanReadableDate);

  let list = movies[humanReadableDate];

  let index = getRandomInt(list.length);

  let title = list[index];

  console.log("Chosen movie is: " + title);

  return title;
}

const onButtonClicked = (event) => {
  const para = document.getElementById('result');
  para.textContent = getRandomMovieTitleForToday();
}

onPageIsLoaded(() => {
  const button = document.querySelector("button");
  button.addEventListener("click", onButtonClicked);
});
