import { KEPEK } from "./kepek.js";

let kiJon = 0;
const JATEK_LISTA = [];
letrehoz();

function letrehoz() {
  const JATEKTER = document.querySelector(".jatekter");
  for (let index = 0; index < 9; index++) {
    JATEKTER.innerHTML += "<div class='kocka'><p></p></div>";
  }
}

console.log(KEPEK.O);

const KOCKA_ELEM = document.querySelectorAll(".kocka");
const KOCKA_P_ELEM = document.querySelectorAll(".kocka > p");
for (let index = 0; index < KOCKA_ELEM.length; index++) {
  KOCKA_ELEM[index].addEventListener("click", function () {
    if (kiJon % 2 === 0) {
      KOCKA_P_ELEM[index].innerHTML += `<img src='${KEPEK.O}' id="O">`;
      kiJon++;
    } else {
      KOCKA_P_ELEM[index].innerHTML += `<img src='${KEPEK.X}' id="X">`;
      kiJon++;
    }
  });
}
