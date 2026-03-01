import "../header/form-header.css"

export default function FormHeader({ text } : { text: string }) {
    return (
        <tr>
            <th>
                <h1 className="form-text">{text}</h1>
            </th>
        </tr>
    );
}