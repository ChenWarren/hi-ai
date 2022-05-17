import DotsMenu from "../DotsMenu"
import { useDeleteItem } from "context/AppContext";
import { useEffect, useState } from "react";

export default function ItemDisplayMode({
    setEditMode,
    item,
}) {
    const { setDeleteItemID } = useDeleteItem()
    const [deleteItem, setDeleteItem] = useState(false)

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
                <h3 className="left-col">Prompt: </h3>
                <p className="right-col">{item.prompt}</p>
            </div>
            <div className="section-row">   
                <h3 className="left-col">Response: </h3>
                {item.response.map((res, i) => <p key={i} className="right-col">{res.text}</p>)}
            </div>
        </div>
    );
}
  