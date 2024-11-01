// DOM-variabler
let userScore = 0;
let computerScore = 0;
const userScoreText = document.getElementById("spelare-poäng");
const computerScoreText = document.getElementById("dator-poäng");
const scoreBoard = document.getElementById("poäng");
const result = document.querySelector(".resultat");
const stenBtn = document.getElementById("sten");
const saxBtn = document.getElementById("sax");
const påseBtn = document.getElementById("påse");

// Funktion för datorns val
function getComputerChoice() {
  const choices = ["sten", "sax", "påse"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Funktion för varje utfall av spelet
function win(user, computer) {
  userScore++;
  userScoreText.innerHTML = userScore;
  computerScoreText.innerHTML = computerScore;
  result.innerHTML = user + " slår " + computer + ". du vinner!";
}
function lose(user, computer) {
  computerScore++;
  userScoreText.innerHTML = userScore;
  computerScoreText.innerHTML = computerScore;
  result.innerHTML = computer + " slår " + user + ". du förlorar!";
}
function draw(user) {
  console.log("draw");
  result.innerHTML = "båda valde " + user + ". det blev lika!";
}

// Själva spelet, jämför spelarens val och datorns val
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "stensax":
    case "påsesten":
    case "saxpåse":
      win(userChoice, computerChoice);
      break;
    case "saxsten":
    case "stenpåse":
    case "påsesax":
      lose(userChoice, computerChoice);
      break;
    case "saxsax":
    case "stensten":
    case "påsepåse":
      draw(userChoice, computerChoice);
      break;
  }
}

// Hämtar spelarens val
function main() {
  stenBtn.addEventListener("click", function () {
    game("sten");
  });

  saxBtn.addEventListener("click", function () {
    game("sax");
  });

  påseBtn.addEventListener("click", function () {
    game("påse");
  });
}

main();
