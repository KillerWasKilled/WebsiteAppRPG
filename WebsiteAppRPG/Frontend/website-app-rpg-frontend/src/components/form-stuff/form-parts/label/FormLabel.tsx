import "../label/form-label.css"

export default function FormLabel({ labelTitle, inputId, inputType, inputPlaceholder, maxLength } : 
    { labelTitle: string, inputId: string, inputType: string, inputPlaceholder: string | null, maxLength: number | undefined }) {
    return (
        <tr>
            <td>
                <label htmlFor="">
                    <div className="form-text">{labelTitle}</div>
                    <input id={inputId} type={inputType} placeholder={inputPlaceholder ?? ""} maxLength={maxLength != undefined ? maxLength : undefined} />
                </label>
            </td>
        </tr>
    );
}