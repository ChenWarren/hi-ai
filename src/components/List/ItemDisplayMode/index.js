import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DotsMenu from "../DotsMenu";
import { useDeleteItem } from "context/AppContext";
import { useEffect, useState } from "react";

const ItemDisplayMode = React.memo(({
    setEditMode,
    item,
    index,
}) => {
    const { setDeleteItemID } = useDeleteItem()
    const [expanded, setExpanded] = useState(false)
    const [deleteItem, setDeleteItem] = useState(false)

    useEffect(() => {
        if(index<2){
            setExpanded(true)
        }
    }, [])

    useEffect(()=>{
        if(deleteItem){
            const ID = item.id
            setDeleteItemID(ID)
        }
        setDeleteItem(false)
    }, [deleteItem])

    return (
        <div className="list-item-box">
            <DotsMenu setMode={setEditMode} setDelete={setDeleteItem}/>
            <div className="section-row">
                <div className="left-col">
                    <h3>Prompt:</h3>
                    <div className="icon-clickable" onClick={()=>setExpanded(pre=>!pre)}>
                        { 
                            expanded ?
                                <div className="tooltip-container">
                                    <FaChevronUp/> 
                                    <span className="tooltip">Expand</span>
                                </div> 
                                : 
                                <div className="tooltip-container">
                                    <FaChevronDown/>
                                    <span className="tooltip">Shrink</span>
                                </div> 
                        }
                    </div>
                </div>
                <p className="right-col">{item.prompt}</p>
            </div>
            { expanded && 
                <div className="section-row">   
                    <h3 className="left-col">Response: </h3>
                    {item.response.map((res, i) => <p key={i} className="right-col">{res.text}</p>)}
                </div>
            }
        </div>
    );
})

export default ItemDisplayMode
  