
//chall03
/*export default function FunctionalConponent() {
    return (
        <div>
            <h1>This is a container component</h1>
            <div>
                <h2>im a headr component</h2>
                <p>im a paragraphe component with some lorem ipsum</p>
            </div>
        </div>
    )
}*/


//chall04

/*export default function FunctionalConponent() {
    let styling = {
        backgroundColor : "green",
        color : "white",
        borderRadius : 30,
        padding : 10,
    }
    return (
        <div>
            <h1 className="text-danger">This is a container component</h1>
            <div style={{padding: 10}}>
                <h2>im a headr component</h2>
                <p style={styling}>im a paragraphe component with some lorem ipsum</p>
            </div>
            <a href="#"><p className="App-link">this is a learn anchor</p></a>
        </div>
    )
}*/

//chall05

/*import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
export default function FunctionalConponent() {
    let styles = {
        borderRadius: 20,
    }
    return (
        <div style={{padding:20, display: "flex", gap: 10, justifyContent: "center"}}>
            <img style={styles} width="300" height="300" src={img1} alt="img1"/>
            <img style={styles} width="300" height="300" src={img2} alt="img2"/>
        </div>
    )
    
}*/


    //chall06

    /*export default function FunctionalConponent() {
        let userNbr = [1, 2, 3, 4, 5, 6
        ]
        return (
            <ul>{userNbr.map(x => (<li>User Number {x}</li>) )}</ul>
        )
    }*/


    //chall07

    /*export default function FunctionalConponent() {
        let userNbr = [
            {
                name : "walid",
                code : "Maverick",
                age : 19
            },
            {
                name: "Abdeljalil",
                code : "Rooster",
                age : 20
            },
            {
                name: "Racim",
                code : "Delta",
                age : 20
            }
        ]
        
        return (
            
            <div>
                {userNbr.map(x => {
                let {name, code, age} = x
                return (
                    <div>
                        <h1>{name}</h1>
                        <small>{code}</small>
                        <p>{age}</p>
                    </div>
                    
                )})}
            </div>

        )
    }*/


    //chall08

    import img1 from "./img1.jpg"
    import img2 from "./img1.jpg"
    import img3 from "./img2.jpg"
    import img4 from "./img3.jpg"
    import imgD from "./default.jfif"
    export default function FunctionalConponent() {
        let userDatas = [
            {
                name : "walid",
                code : "Maverick",
                age : 19,
            },
            {
                name: "Abdeljalil",
                code : "Rooster",
                age : 20,
                img : img1
            },
            {
                name: "Rafik",
                code : "Omega",
                age : 20
            },
            {
                name: "Tarek",
                code : "Sigma",
                age : 20,
                img : img2
            },
            {
                name: "Racim",
                code : "Delta",
                age : 20,
                img : img3
            },
            {
                name: "Unknown",
                code : "Delta",
                age : 20
            },
            {
                name: "Chemsou",
                code : "Alpha",
                age : 20,
                img : img4
            }
        ]
        let styl = {
            display : "flex",
            flexWrap : "wrap",
            gap : "20px 10px",
            justifyContent : "center",
            padding: 20,
        }
        let sty = {
            padding : 20,
            border : "solid gray 1px",
            borderRadius : 20,

        }
        return (
            <div style={styl}>
                {userDatas.map(x => {
                let {name, code, age, img} = x
                return (
                        <div style={sty} >
                            { img ? <img width="250" height="250" src={img} alt="img"/> 
                                : 
                                <img width="250" height="250" src={imgD} alt="img"/> 
                            }
                            <h1>{name}</h1>
                            <small className="text-danger">{code}</small>
                            <p>{age}</p>
                        </div>
                    
                )})}
            </div>

        )
    }
    


    //chall10 Using State

    /*export default function FunctionalConponent() {

        let tab = [
            1, 2, 3, 4
        ]
        function detect() {
            return tab.push(tab.length + 1)
        }
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
                <button onClick={detect()}> click to add comp</button>
            </div>
        )
    }*/


