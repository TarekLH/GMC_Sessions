

/*export default function Users(props) {

    return (
        <div>
            <h1>this is comp {props.nbr}</h1>
            <p>this is paragraphe {props.nbr}</p>
        </div>
    )
}*/

    export default function Users(props) {
        return (
            <div>
                <h1>{props.id} - {props.title}</h1>
                <p>{props.desc}</p>
                <button>{props.desc2}</button>
            </div>
        )

}

