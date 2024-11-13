const today = new Date();
const monthName = today.toLocaleString('default', { month: 'long' });
const dayNumber = today.getDate();
const humanReadableDate = `${monthName} ${dayNumber}`;

import { movies } from "./movies.js"

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function main() {
  console.log("Today is " + humanReadableDate);

  list = movies[humanReadableDate];

  index = getRandomInt(list.length);

  title = list[index];

  console.log("Chosen movie is: " + title);

  // Put the name of the selected movie into the text box on the webiste
}

main();
