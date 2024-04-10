import { vizszintes_ell } from "./fuggvenyek.js";
teszfuggveny();
function  teszfuggveny() {
    {
        const LISTA=[]
        let vart=""
        console.assert(

            vart===vizszintes_ell(3,LISTA),
        "%o",
        `lista=${LISTA},meret=${3},lnko=${vart}`,
        "a várt eredmény nem stimmel"
        )
    }
    {
        const LISTA=["O","X","X","X","O"]
        let vart="OXX@XO"
        console.assert(

            vart===vizszintes_ell(3,LISTA),
        "%o",
        `lista=${LISTA},meret=${3},lnko=${vart}`,
        "a várt eredmény nem stimmel"
        )

    }
    {
        const LISTA=["O","X","X"]
        let vart="OXX@"
        console.assert(

            vart===vizszintes_ell(3,LISTA),
        "%o",
        `lista=${LISTA},meret=${3},lnko=${vart}`,
        "a várt eredmény nem stimmel"
        )

    }
}