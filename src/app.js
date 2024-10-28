/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generateCard() {
  const suit = ["♥", "♦", "♣", "♠"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const aleatorySuit = suit[Math.floor(Math.random() * suit.length)];
  const aleatoryNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector(".suit.superior").textContent = aleatorySuit;
  document.querySelector(".number").textContent = aleatoryNumber;
  document.querySelector(".suit.inferior").textContent = aleatorySuit;

  if (aleatorySuit === "♥" || aleatorySuit === "♦") {
    document.querySelector(".suit.superior").style.color = "red";
    document.querySelector(".number").style.color = "red";
    document.querySelector(".suit.inferior").style.color = "red";
  } else {
    document.querySelector(".suit.superior").style.color = "black";
    document.querySelector(".number").style.color = "black";
    document.querySelector(".suit.inferior").style.color = "black";
  }
}

window.onload = generateCard;

document
  .getElementById("nuevaCartaBtn")
  .addEventListener("click", generateCard);
setInterval(generateCard, 3000);
