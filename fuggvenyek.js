import { KEPEK } from "./kepek.js";
let kiJon = 0;

function letrehoz(meret, formObj) {
  const JATEKTER = document.querySelector("article > div");
  JATEKTER.classList.remove("valaszto");
  JATEKTER.classList.add(`jatekter${meret}`);
  JATEKTER.innerHTML = "";
  for (let index = 0; index < meret * meret; index++) {
    JATEKTER.innerHTML += "<div class='kocka'><p></p></div>";
  }
  const JATEKLISTA = jatekListaFeltolt(meret);
  jatekMenet(meret, JATEKLISTA, formObj);
  //   console.log(JATEKLISTA.length);
}

function jatekListaFeltolt(meret) {
  const LISTA = [];
  for (let index = 0; index < meret * meret; index++) {
    LISTA[index] = " ";
  }
  return LISTA;
}

function jatekMenet(meret, lista, formObj) {
  const KOCKA_ELEM = document.querySelectorAll(".kocka");
  const KOCKA_P_ELEM = document.querySelectorAll(".kocka > p");
  let vege = false;
  lepesekAllapot(formObj);
  for (let index = 0; index < KOCKA_ELEM.length; index++) {
    KOCKA_ELEM[index].addEventListener("click", function () {
      if (lista[index] === " ") {
        if (kiJon % 2 === 0) {
          //   KOCKA_P_ELEM[index].innerHTML += `<img src='${KEPEK.O}' id="O">`;
          KOCKA_P_ELEM[index].innerHTML += `<span class="jatek_elem">O</span>`;
          kiJon++;
          lista[index] = "O";
        } else {
          //   KOCKA_P_ELEM[index].innerHTML += `<img src='${KEPEK.X}' id="X">`;
          KOCKA_P_ELEM[index].innerHTML += `<span class="jatek_elem">X</span>`;
          kiJon++;
          lista[index] = "X";
        }
        if (ellenoriz(meret, lista)) {
          vege = true;
          console.log(KOCKA_ELEM[0]);
          nyertAllapot(KOCKA_ELEM, formObj.palya);
        }
        lepesekAllapot(formObj, vege, KOCKA_ELEM.length);
      }
    });
  }
}

function nyertAllapot(jelenlegi, palya) {
  const JATEKTER = document.querySelector(`.jatekter${palya}`);
  let txt = "";
  for (let index = 0; index < jelenlegi.length; index++) {
    txt += `<div class="kocka">${jelenlegi[index].innerHTML}</div>`;
  }
  JATEKTER.innerHTML = txt;
}

function lepesekAllapot(obj, vege, dontetlen) {
  const LEPESEK_ELEM = document.querySelector("aside");
  if (kiJon !== dontetlen) {
    if (kiJon % 2 === 0) {
      if (vege) {
        LEPESEK_ELEM.innerHTML += `<p class="nyero">${obj.j2} nyert!</p>`;
      } else {
        LEPESEK_ELEM.innerHTML += `<p>${kiJon + 1}. lépés: ${
          obj.j1
        } következik.</p>`;
      }
    } else {
      if (vege) {
        LEPESEK_ELEM.innerHTML += `<p class="nyero">${obj.j1} nyert!</p>`;
      } else {
        LEPESEK_ELEM.innerHTML += `<p>${kiJon + 1}. lépés: ${
          obj.j2
        } következik.</p>`;
      }
    }
  } else {
    LEPESEK_ELEM.innerHTML += `<p class="nyero">Döntetlen!</p>`;
  }
}

export function jatekKezdese() {
  const FORM_ELEM = document.querySelector("form");
  const GOMB = document.querySelector("form > button");

  FORM_ELEM.addEventListener("submit", function (e) {
    e.preventDefault();
    const FORM_DATA = new FormData(FORM_ELEM);
    const OBJ = Object.fromEntries(FORM_DATA);
    if (OBJ.j1 === "" || OBJ.j2 === "") {
      alert("Válassz nevet!");
    } else {
      if (GOMB.id === "letrehoz") {
        letrehoz(OBJ.palya, OBJ);
        gombKicserel();
      } else {
        location.reload();
      }
    }
  });
}

function gombKicserel() {
  const GOMB = document.querySelector("form > button");
  GOMB.id = "uj";
  GOMB.innerHTML = "Új játék!";
}

export function palya_valasztas() {
  const JATEKTER = document.querySelector("article > div");
  JATEKTER.innerHTML = `<select name="palya" id="palya" form="jatek">
      <option value="3">3x3</option>
      <option value="5">5x5</option>
      </select>`;
}

function ellenoriz(meret, lista) {
  let allapot = vizszintes_ell(meret, lista);
  allapot += fuggoleges_ell(meret, lista);
  allapot += atlo_ell(meret, lista);
  const ALLAPOT_TOMB = allapot.split("@");
  //   console.log(allapot);
  console.log(ALLAPOT_TOMB);
  if (meret == 3) {
    if (ALLAPOT_TOMB.indexOf("OOO") >= 0) {
      return true;
    }
    if (ALLAPOT_TOMB.indexOf("XXX") >= 0) {
      return true;
    }
  } else {
    if (ALLAPOT_TOMB.indexOf("OOOOO") >= 0) {
      return true;
    }
    if (ALLAPOT_TOMB.indexOf("XXXXX") >= 0) {
      return true;
    }
  }
}

export function vizszintes_ell(meret, lista) {
  let szoveg = "";
  for (let index = 1; index <= lista.length; index++) {
    szoveg += lista[index - 1];
    if (index % meret === 0) {
      szoveg += "@";
    }
  }
  return szoveg;
}

function fuggoleges_ell(meret, lista) {
  let szoveg = "";
  for (let index = 0; index < meret; index++) {
    for (let j = 0; j < meret * meret; j += parseInt(meret)) {
      szoveg += lista[index + j];
    }
    szoveg += "@";
  }
  return szoveg;
}

function atlo_ell(meret, lista) {
  let szoveg = "";
  //   console.log(meret);
  // bal felső -> jobb alsó átló
  for (let index = 0; index < lista.length; index += parseInt(meret) + 1) {
    szoveg += lista[index];
  }
  //jobb felső -> bal alsó átló
  szoveg += "@";
  for (
    let index = meret - 1;
    index <= lista.length - parseInt(meret);
    index += parseInt(meret) - 1
  ) {
    szoveg += lista[index];
  }

  return szoveg;
}
