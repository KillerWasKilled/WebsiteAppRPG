import "../form-stuff/form.css"

export default function FormButton({ buttonText, btnFunction } : { buttonText: string, btnFunction: () => Promise<void> }) {
    return (
        <tr>
            <td>
                <button className="const-style" type="button" onClick={btnFunction}>{buttonText}</button>
            </td>
        </tr>
    );
}