import React, { useState, useRef } from "react";
import Button from "components/Button";

const InputBox = React.memo(({
    handleSumit,
    headerText,
    placeHolderText,
}) => {
    const [inputText, setInputText] = useState('')
    const inpuPrompt = useRef()

    const handleEnter = (e) => {
        handleSumit(inputText)
        setInputText('')
        inpuPrompt.current.focus()
        console.log('func')
    }

    console.log("Input")

    return (
        <div className="intput-box">
            <p>{headerText}</p>
            <div className="button-group-container">
                <Button buttonText="Reset" handleClick={()=>setInputText('')}/>
                <Button buttonText="Sumit" handleClick={handleEnter}/>
            </div>
            <textarea
                ref={inpuPrompt}
                className="input-container"
                placeholder={placeHolderText} 
                value={inputText} 
                onChange={e => setInputText(e.target.value)} 
                onFocus={() => setInputText('')} 
            />
        </div>
    );
})

export default InputBox
  