const today = new Date();
const monthName = today.toLocaleString('default', { month: 'long' });
const dayNumber = today.getDate();
const humanReadableDate = `${monthName} ${dayNumber}`;

function main() {
  console.log(humanReadableDate);

  // Pick one of the movies for today's date from the list at random

  // Put the name of the selected movie into the text box on the webiste
}

main();
