

import Users from "./Users"

export default function DisplayCard(props) {
    return (
        <div>
            <div>
                <img width="250" height="250" src={props.img} alt="img"/>
                <Users id={props.id} title={props.title} desc={props.desc} desc2={props.desc2}/>
            </div>
        </div>
    )
}