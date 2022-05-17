
export default function Button({
  handleClick,
  buttonText,
}) {
    console.log(buttonText)
    return (
        <button
            className="button-container" 
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
}
  