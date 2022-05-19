import React, { useState } from "react"
import DotsMenuEditMode from "../DotsMenuEditMode"
import { useUpdateData } from "context/AppContext"

const ItemEditMode = React.memo(({
    setEditMode,
    item,
    index,
}) => {
    const { setUpdateData } = useUpdateData()
    const [updatePrompt, setUpdatePrompt] = useState(item.prompt)
    const [updateResponse, setUpdateResponse] = useState(item.response[0].text)

    const saveUpdate = () => {
        const updatedItem = {
            id: item.id,
            prompt: updatePrompt,
            response: [{text: updateResponse}],
            create_date: new Date()
        }
        setUpdateData({index: index, data: updatedItem})
    }

    return (
        <div className="list-item-box">
            <DotsMenuEditMode setMode={setEditMode} saveChanges={saveUpdate}/>
            <div className="section-row">
                <h3 className="left-col">Prompt: </h3>
                <textarea 
                    className="input-col" 
                    value={updatePrompt} 
                    onChange={(e)=>setUpdatePrompt(e.target.value)}
                />
            </div>
            <div className="section-row">   
                <h3 className="left-col">Response: </h3>
                <textarea 
                    className="input-col" 
                    value={updateResponse} 
                    onChange={(e)=>setUpdateResponse(e.target.value)}
                />
            </div>
        </div>
    );
})

export default ItemEditMode
  