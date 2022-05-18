import React, { useState, useRef } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Languages from "config/Languages";
import Button from "components/Button";
import { useSelectLanguage } from "context/AppContext";

const InputBox = React.memo(({
    handleSumit,
    headerText,
    placeHolderText,
}) => {
    const [inputText, setInputText] = useState('')
    const { selectedLanguage, setSelectedLanguage } = useSelectLanguage()
    // const [option, setOption] = useState(Languages[0].language)
    const inpuPrompt = useRef()

    const handleEnter = (e) => {
        handleSumit(inputText, selectedLanguage)
        setInputText('')
        inpuPrompt.current.focus()
        console.log('func')
    }

    console.log("Input", selectedLanguage)

    return (
        <div className="intput-box">
            <p>{headerText}</p>
            <div className="input-header-row">
                <div className="options-container">
                    <OptionBox options={Languages} option={selectedLanguage} setOption={setSelectedLanguage}/>
                    <div className="text-row-grey">
                        <FaLongArrowAltLeft/>
                        <p style={{paddingLeft: 5}}>Select a language</p>
                    </div>
                </div>
                <div className="button-group-container">
                    <Button buttonText="Reset" handleClick={()=>setInputText('')}/>
                    <Button buttonText="Sumit" handleClick={handleEnter}/>
                </div>
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

// Option tag component for Languages
const OptionBox = ({
    options=[],
    option,
    setOption=()=>{}
}) => {

    return(
        <div className="select-container">
            <select value={option} onChange={(e)=>setOption(e.target.value)}>
                { options.map((op)=>(
                    <option 
                        key={op.id} 
                        value={op.language}
                    >
                        {op.language}
                    </option>
                ))}
            </select>
        </div>
    )
}
  