import { useState } from "react";
import ItemEditMode from "../ItemEditMode";
import ItemDisplayMode from "../ItemDisplayMode";

export default function ListItem({
    item,
    index,
}) {
    const [editMode, setEditMode] = useState(false)

    console.log('list item')

    return (
        <>
        { editMode ? 
            <ItemEditMode 
                setEditMode={setEditMode} 
                item={item}
                index={index}
            />
            :
            <ItemDisplayMode 
                setEditMode={setEditMode}
                item={item}
                index={index}
            />
        }
        </>
    );
}



