import { KEPEK } from "./kepek.js";

let kiJon = 0;
const JATEK_LISTA = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
letrehoz();

function letrehoz() {
  const JATEKTER = document.querySelector(".jatekter");
  for (let index = 0; index < 9; index++) {
    JATEKTER.innerHTML += "<div class='kocka'><p></p></div>";
  }
}

const KOCKA_ELEM = document.querySelectorAll(".kocka");
const KOCKA_P_ELEM = document.querySelectorAll(".kocka > p");
for (let index = 0; index < KOCKA_ELEM.length; index++) {
  KOCKA_ELEM[index].addEventListener("click", function () {
    if (JATEK_LISTA[index] === " ") {
      if (kiJon % 2 === 0) {
        KOCKA_P_ELEM[index].innerHTML += `<img src='${KEPEK.O}' id="O">`;
        kiJon++;
        JATEK_LISTA[index] = "O";
      } else {
        KOCKA_P_ELEM[index].innerHTML += `<img src='${KEPEK.X}' id="X">`;
        kiJon++;
        JATEK_LISTA[index] = "X";
      }
    }
    console.log(JATEK_LISTA);
    ellenoriz(JATEK_LISTA);
  });
}

function ellenoriz(lista) {
  let allapot = vizszintes_ell(lista);
  // allapot += fuggoleges_ell();
  // allapot += atlo_ell();
  console.log(allapot);
}

function vizszintes_ell(lista) {
  let szoveg = "";
  for (let index = 1; index <= lista.length; index++) {
    szoveg += lista[index - 1];
    if (index % 3 === 0) {
      szoveg += "@";
    }
  }
  return szoveg;
}

function fuggoleges_ell() {
  let szoveg = "";
  for (let index = 0; index < 3; index++) {
    for (let index = 0; index < 3; index++) {
      const element = array[index];
    }
  }
  return szoveg;
}
