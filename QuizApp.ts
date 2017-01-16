let score = 0;

function add1ToScore() {
  score = score + 1;
  return score;
}


let answer1 = prompt(`Which is the largest US state by area?
  a) Texas
  b) Montana
  c) Alaska`);

if (answer1 == "c") {
  alert("Correct!");
  add1ToScore();
} else {
  alert("Wrong");
}

let answer2 = prompt(`What country is home to the tallest mountain in the world, Mount Everest?
  a) Nepal
  b) India
  c) Pakistan`);

if (answer2 == "a") {
  alert("Correct!");
  add1ToScore();
} else {
  alert("Wrong");
}

let answer3 = prompt(`By area, what is the smallest country on the planet?
  a) Vatican City
  b) Monaco
  c) Nauru`);

if (answer3 == "a") {
  alert("Correct!");
  add1ToScore();
} else {
  alert("Wrong");
}

let answer4 = prompt(`What is the name of the tallest uninterrupted waterfall in the world?
  a) Niagara Falls
  b) Angel Falls
  c) Victoria Falls`);

if (answer4 == "b") {
  alert("Correct!");
  add1ToScore();
} else {
  alert("Wrong");
}

let answer5 = prompt(`Which is the most populous country in the world?
  a) India
  b) Indonesia
  c) China`);

if (answer5 == "c") {
  alert("Correct!");
  add1ToScore();
} else {
  alert("Wrong");
}

alert("Your score is: " + score);
