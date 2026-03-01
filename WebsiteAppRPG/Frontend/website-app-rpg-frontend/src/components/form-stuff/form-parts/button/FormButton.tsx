import "../button/form-button.css"

export default function FormButton({ buttonText, btnFunction } : { buttonText: string, btnFunction: () => Promise<void> }) {
    return (
        <tr>
            <td className="button-part">
                <button className="const-style" type="button" onClick={btnFunction}>{buttonText}</button>
            </td>
        </tr>
    );
}