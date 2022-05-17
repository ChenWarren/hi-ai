import React, { useState, useCallback } from "react";
import Button from "components/Button";

const InputBox = React.memo(({
    handleSumit,
    headerText,
    placeHolderText,
}) => {
    const [inputText, setInputText] = useState('')

    const handleEnter = useCallback((e) => {
        if(e.keyCode===13){
            handleSumit(inputText)
            setInputText('')
        }
        console.log('func')
    }, [setInputText])

    console.log("Input")

    return (
        <div className="intput-box">
            <p>{headerText}</p>
            <div className="button-group-container">
                <Button buttonText="Reset" handleClick={()=>setInputText('')}/>
            </div>
            <textarea
                className="input-container"
                placeholder={placeHolderText} 
                value={inputText} 
                onChange={e => setInputText(e.target.value)} 
                onFocus={() => setInputText('')} 
                onKeyDown={handleEnter} 
            />
        </div>
    );
})

export default InputBox
  