import "../header/form-subheader.css"

export default function FormSubheader({ text } : { text: string }) {
    return (
        <tr>
            <th>
                <h3 className="form-text">{text}</h3>
            </th>
        </tr>
    );
}