import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";
import {tesztfuggveny} from "./teszt.js";

window.addEventListener("load", init);

function init() {
  tesztfuggveny();
  palya_valasztas();
  jatekKezdese();
}
