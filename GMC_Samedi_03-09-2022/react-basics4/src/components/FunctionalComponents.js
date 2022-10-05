


//using hooks

import {useState, useEffect} from "react"

/*export default function FunctionalComponents() {

    const [clickNbr, setclickNbr] = useState(0)
    console.log("component re rendered")
    useEffect(() => console.log("useEffect Run"))
    return (
        <div>
            <h1>challenge 01</h1>
            <p> You have clicked <span>{clickNbr}</span> times </p>
            <button onClick= {() => setclickNbr(clickNbr + 1) } >Click here</button>
        </div>
    )
}*/


//chall02
/*export default function FunctionalComponents() {
    
    const [clickNbr, setclickNbr] = useState(0)
    console.log("component re rendered")
    useEffect(() => { console.log(`useEffect Run you clicked ${clickNbr} times`) 
    document.title = `you clicked ${clickNbr} times`;}
    )
    return (
        <div>
            <h1>challenge 01</h1>
            <p> You have clicked <span>{clickNbr}</span> times </p>
            <button onClick= {() => setclickNbr(clickNbr + 1) } >Click here</button>
        </div>
    )
}*/


//chall03

/*export default function FunctionalComponents() {
    
    const [clickNbr, setclickNbr] = useState(0)
    const [clicked, setClicked] = useState("")
    console.log("component re rendered")
    useEffect(() => {}
    )
    return (
        <div>
            <h1>challenge 01</h1>
            <p> You have clicked <span>{clickNbr}</span> times </p>
            <button onClick= {() => { setclickNbr(clickNbr - 1); setClicked("Minus 1") } } >Minus 1</button>
            <button onClick= {() => { setclickNbr(clickNbr + 1) ; setClicked("Plus 1") } }>Plus 1 1</button>
            <p>last btn clicked: <span> {clicked} </span></p>


        </div>
    )
}*/

//chall04

/*export default function FunctionalComponents() {
    const [isLoading, setisLoading] = useState(true)
    //Const [loading, setInterval()]
    useEffect(() => {
        setTimeout(()=> {
            setisLoading(false)
        }, 3000)
    })
    return (
        <div>
            <h1>Lets fetch some datas</h1>

            {isLoading    ?
                <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            :
            <div>
                <h2>Hello, my name is Chemsou</h2>
                <small className="text-danger">I have 23 years old</small>
                <p>im a second year student at the university of Annaba</p>
            </div>
            }
            

            
        </div>
        
    )
}*/


//chall05
/*import '.././App.css'

export default function FunctionalComponents() {

    const [Change, setChange] = useState(0)
    useEffect(() => {
        console.log(`i have been updated to the following ${Change}`)
    }, [Change])

    const [Change2, setChange2] = useState(0)
    useEffect(()=> {
        alert(`i have been updated ${Change2}`)
    }, [Change2])

    const [Change3, setChange3] = useState(0)
    useEffect(() => {
        localStorage.setItem("Change3", Change3)
    }, [Change3] )

    return (
        <div>

            <h1>choose your data</h1>
            <div className="flexy-div">
                <div>
                    <h2>im a console state: {Change} </h2>
                    <p>click here to see me change in the console</p>
                    <button onClick={() => {setChange(Change + 1)}}>Click here</button>
                </div>

                <div>
                    <h2>im an alert state: {Change2} </h2>
                    <p>click here to see me change right away</p>
                    <button onClick={() => {setChange2(Change2 + 1)}}>Click here</button>
                </div>

                <div>
                    <h2>im a local storage state: {Change3} </h2>
                    <p>click here to see me change in the local storage</p>
                    <button onClick={() => {setChange3(Change3 + 1)}}>Click here</button>
                </div>
            </div>

        </div>
    )


}*/



//chall06

export default function FunctionalComponents() {
    let tabCom = ["compliment0","compliment1","compliment2","compliment3","compliment4"]
    const [updateComp, setupdateComp] = useState(tabCom)
    useEffect(() => {tabCom.Math.floor(Math.random())}, [updateComp] )

    return (
        <div>
            <h1> Click <button onClick={() => setupdateComp(tabCom.Math.floor(Math.random()))} >here</button> to get a random compliment</h1>
            <p>{updateComp}</p>
        </div>


    )
}