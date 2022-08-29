import {useState} from "react"


//chall11 Using State

    /*export default function FunctionalConponent() {

        /*let tab = [
            1, 2, 3, 4
        ]
        function detect() {
            return tab.push(tab.length + 1)
        }

        const [tab, setComp] = useState([1, 2, 3, 4])

        console.log(tab)

        return (
            <div>
                <h1>this is a comp with children</h1>
                {tab.map(x => {
                return (
                    <div>
                        <h1>this is comp {x}</h1>
                        <p>this is paragraphe {x}</p>
                    </div>
                )})}
                <button onClick={() => setComp([...tab, tab[tab.length - 1] + 1 ])}> click to add comp</button>
            </div>
        )
    }*/


//chall12

    /*export default function FunctionalComponent() {

        let [hiddenDiv, setHiddenDiv] = useState(false)

        return (
            <div>
                <h1>this is a comp with data to show or hide</h1>
                {hiddenDiv ?
                    <div>
                        <h2>hi, i am a secret component</h2>
                        <p>i have some secrets that only persons must see</p>
                        <p>tou need to click on the button to find me !</p>
                    </div>
                :
                    <></>

                }
                <button onClick={() => setHiddenDiv(!hiddenDiv)}> click to add or hide secret comp</button>
            </div>
        )
    }*/


//chall13

/*export default function FunctionalComponent() {

    const [textValue, settextValue] = useState("")
    return (
        <div>
            <input 
                type="text"
                placeholder="Type text"
                value={textValue} 
                onChange={e => settextValue(e.target.value)} 
            />
            <h3>You are typing: {textValue} </h3>
        </div>
    )
}*/


//chall14

/*export default function FunctionalComponents() {
    const [num1 ,setNum1] = useState("");
    const [num2 ,setNum2] = useState("");
    const [somme ,setSomme]= useState("");

    return (
        <section>
            <h1>Challenge 14</h1>
            <input 
                type="number" 
                placeholder="Enter number" 
                value={num1} 
                onChange={(e) => setNum1(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Enter number" 
                value={num2} 
                onChange={(e) => setNum2(e.target.value)} 
            />

            <button onClick={() => setSomme(parseInt(num1) + parseInt(num2))}>Add two numbers</button>

            <p>total : {somme}</p>
        </section>
    )
    
}*/


//chall15

/*export default function FunctionalComponent() {

    const [nbr, setNbr] = useState(0)

    return (
        <div>
            <p>
                Counter : {nbr}
            </p>
            <button onClick={() => setNbr(nbr - 1)}> Decrement</button>
            <button onClick={() => setNbr(nbr + 1)}> Increment</button>
        </div>
        
    )
}*/


//chall16

/*export default function FunctionalComponent() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [nbr, setNbr] = useState("")
    const [tab, setTab] = useState([])

    return (
        <form>
            <h2>Contact Form</h2>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <br/>
            <br/>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <br/>
            <br/>
            <input 
                type="number" 
                placeholder="Phone number" 
                value={nbr} 
                onChange={(e) => setNbr(e.target.value)} 
            />
            <br/>
            <br/>
            <button 
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                    setTab([...tab,{
                    name: name,
                    email: email,
                    phone: nbr,
                }])}}
            >Submit Contact</button>

            {tab.map(x => {
                let {name, email, phone } = x
                return (
                    <div>
                        <p>Name : {name}</p>
                        <p>Email : {email}</p>
                        <p>Phone Number : {phone}</p>
                    </div>
            )})}

        </form>
    )
        
    
}*/


//Using props


export default function FunctionalComponent(x) {
    return (
        <div>
            <p>i'm {x.name}</p>
        </div>
    )

}

