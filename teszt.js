import { vizszintes_ell } from "./fuggvenyek.js";
tesztfuggveny();
export function  tesztfuggveny() {
    {
        const LISTA=[         ]
        let vart=""
        console.assert(

            vart===vizszintes_ell(3,LISTA),
        "%o",
        `lista=${LISTA},meret=${3},lnko=${vart}`,
        "a várt eredmény nem stimmel"
        )
    }
    {
        const LISTA=["O","X","X","X","O","O","O","O","O"]
        let vart="OXX@XOO@OOO@"
        console.log(vart)
        console.assert(

            vart===vizszintes_ell(3,LISTA),
        "%o",
        `lista=${LISTA},meret=${3},lnko=${vart}`,
        "a várt eredmény nem stimmel"
        )

    }
    {
        const LISTA=["A","B","C","D","E","F","G","H","I"]
        let vart="ABC@DEF@GHI@"
        console.assert(

            vart===vizszintes_ell(3,LISTA),
        "%o",
        `lista=${LISTA},meret=${3},lnko=${vart}`,
        "a várt eredmény nem stimmel"
        )

    }
    {
        const LISTA=[1,2,3,4,5,6,7,8,9]
        let vart="123@456@789@"
        console.assert(

            vart===vizszintes_ell(3,LISTA),
        "%o",
        `lista=${LISTA},meret=${3},lnko=${vart}`,
        "a várt eredmény nem stimmel"
        )

    }
    
    
}