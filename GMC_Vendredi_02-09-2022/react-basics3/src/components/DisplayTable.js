


export default function DisplayTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        {props.id}
                    </td>
                    <td>
                        {props.title}
                    </td>
                    <td>
                        {props.desc}
                    </td>
                    <td>
                        {props.desc2}
                    </td>
                </tr>
            </table>
        </div>
    )
}