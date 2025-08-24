let heading2 = document.querySelector("h2");
let started = false;
let level = 0;
let color = ["pink", "orange", "green", "blue"];
let randSeq = [];
let userSeq = [];

document.addEventListener("keypress", Game);
function Game() {
  userSeq = [];
  level++;
  started = true;
  setTimeout(() => {
    heading2.innerText = `Level ${level}`;
  }, 1500);
  randBlink();
}

function randBlink() {
  let randflash = Math.floor(Math.random() * 4);
  let blink = color[randflash];
  randSeq.push(blink);
  console.log(randSeq);
  randblink(blink);
}

function randblink(blink) {
  let btn = document.querySelector(`.${blink}`);
  btn.classList.add("randcol");
  setTimeout(() => {
    btn.classList.remove("randcol");
  }, 1000);
}

function userflash() {
  this.classList.add("usercol");
  userSeq.push(this.id);
  console.log(userSeq);
  setTimeout(() => {
    this.classList.remove("usercol");
  }, 1000);
  Compare();
}

let btn = document.querySelectorAll(".button");
for (const btnpress of btn) {
  btnpress.addEventListener("click", userflash);
}

function Compare() {
  if (randSeq.length === userSeq.length) {
    for (let i = 0; i < level; i++) {
      if (randSeq[i] !== userSeq[i]) {
        started = false;
        console.log("Game Over");
        heading2.innerText = `Game Over! Your Score is ${level-1}`;
        heading2.style.color = "red";
        level = 0;
        return;
      }
    }
    setTimeout(() => {
      Game();
    }, 2000);
  }
}
