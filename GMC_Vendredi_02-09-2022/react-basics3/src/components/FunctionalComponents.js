//import {useState} from "react"
//import Users from "./Users"

/*export default function FunctionalComponents(props) {
    return (
        <div>
            <h1>i am {props.name}</h1>
            <p>he is {props.name} </p>
        </div>
    )
}*/

//chall18

/*export default function FunctionalConponent() {
    const [tab, setComp] = useState([1, 2, 3, 4])
    return (
        <div>
            <h1>this is a comp with children</h1>
            {tab.map(x => {
            return (
                <Users nbr={x}/>
            )})}
            <button onClick={() => setComp([...tab, tab[tab.length - 1] + 1 ])}> click to add comp</button>
        </div>
    )
}*/


//chall19
/*export default function FunctionalComponents(props) {

    return (
        <div>
            <h1>challenge 19</h1>
            <div>
                <p>im a little boy, but i can have an big influence on my mother</p>
                <button onClick={() => props.setbackStyle(!props.backStyle)}>click to switch</button>
            </div>
        </div>
    )
}*/

//chall20
/*import '.././App.css';

export default function FunctionalComponents(props) {
    return (
        
        <div className="card">
            <h1>lets discover the power of having children !</h1>
            <div>
                <h2>hi, im a card !</h2>
                <p>
                    im versatil Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </p>
                <div >
                    {props.children}
                </div>
            </div>
        </div>
        
    )
}*/

//chal21
/*import Users from "./users"
export default function  FunctionalComponents() {
    let userInfo = [
        {
            id: 0,
            name: "",
            lastname: "LH",
            twt: "tarekLH",
        },
        {
            id: 1,
            name: "racim",
            lastname: "ajkfhd",
            twt: "",
        },
        {
            id: 2,
            name: "rafik",
            lastname: "sdf",
            twt: "rafiktwt",
        },
        {
            id: 3,
            name: "djalil",
            lastname: "",
            twt: "djtwt",
        },
    ]
    return (
        <div>
            <h1>users informations</h1>
            <table>
            <tr>
                <th>
                    #
                </th>
                <th>
                    first
                </th>
                <th>
                    last
                </th>
                <th>
                    twitter
                </th>
                <th>
                    hundle
                </th>
            </tr>

        

            {userInfo.map(x => {
                let{id, name, lastname, twt} = x
                return (
    
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{lastname}</td>
                        <td>{twt}</td>
                        <td><button onClick={() => {}}>hundle</button></td>
                    </tr>
    
                )
            })}
            </table>
            



        </div>
    )

}*/

import Users from "./Users"
import img1 from ".././img1.webp"
import DisplayCard from "./DisplayCard" 
import DisplayTable from "./DisplayTable"
export default function FunctionalComponents() {
    let data = [
        {
            id : 0,
            title : "Here i am",
            desc : "Once again",
            desc2: "feeling lost but now and then",
            img: img1
        },
        {
            id : 1,
            title : "And you dont know where you are now",
            desc : "Or what it would come to, if only somebody could hear",
            desc2: "When you figure out how",
            img: img1
        },
        {
            id : 2,
            title : "You're never gonna fade, you'll be the main attention",
            desc : "Next a fantasy, just remember me",
            desc2: "When it turns out right",
            img: img1
        },
    ]
    return (
        <div>
            <h1>Ultimate Challenge</h1>
            <h2>Choose your layout</h2>
            <button>Row layout</button>
            <button>Card layout</button>
            <button>Table layout</button>
            <button>Hide layout</button>

            {data.map( x => {
                let {id, title, desc, desc2, img} = x
                return (
                    <>
                        <Users id={id} title={title} desc={desc} desc2={desc2}/>
                        <DisplayCard id={id} title={title} desc={desc} desc2={desc2} img={img}/>
                        <DisplayTable id={id} title={title} desc={desc} desc2={desc2} />

                    </>
                )
            })}

        </div>
    )
}
