import React from "react"

const Button = React.memo(({
  handleClick,
  buttonText,
}) => {
    return (
        <button
            className="button-container" 
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
})
  
export default Button