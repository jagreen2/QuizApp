var score = 0;
function add1ToScore() {
    score = score + 1;
    return score;
}
var answer1 = prompt("Which is the largest US state by area?\n  a) Texas\n  b) Montana\n  c) Alaska");
if (answer1 == "c") {
    alert("Correct!");
    add1ToScore();
}
else {
    alert("Wrong");
}
var answer2 = prompt("What country is home to the tallest mountain in the world, Mount Everest?\n  a) Nepal\n  b) India\n  c) Pakistan");
if (answer2 == "a") {
    alert("Correct!");
    add1ToScore();
}
else {
    alert("Wrong");
}
var answer3 = prompt("By area, what is the smallest country on the planet?\n  a) Vatican City\n  b) Monaco\n  c) Nauru");
if (answer3 == "a") {
    alert("Correct!");
    add1ToScore();
}
else {
    alert("Wrong");
}
var answer4 = prompt("What is the name of the tallest uninterrupted waterfall in the world?\n  a) Niagara Falls\n  b) Angel Falls\n  c) Victoria Falls");
if (answer4 == "b") {
    alert("Correct!");
    add1ToScore();
}
else {
    alert("Wrong");
}
var answer5 = prompt("Which is the most populous country in the world?\n  a) India\n  b) Indonesia\n  c) China");
if (answer5 == "c") {
    alert("Correct!");
    add1ToScore();
}
else {
    alert("Wrong");
}
alert("Your score is: " + score);
//# sourceMappingURL=QuizApp.js.map