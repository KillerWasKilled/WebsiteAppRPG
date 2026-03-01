import "./header-button.css"

export default function HeaderButton({ id, buttonType, buttonText, onClickFunction } : { id: string, buttonType: string, buttonText: string, onClickFunction: () => void }) {
    return (
        <button id={id} className={"btn-" + buttonType} onClick={onClickFunction}>{buttonText}</button>
    );
}