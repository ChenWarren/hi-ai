import React, { useState } from "react";
import ItemEditMode from "../ItemEditMode";
import ItemDisplayMode from "../ItemDisplayMode";

const ListItem = React.memo(({
    item,
    index,
}) => {
    const [editMode, setEditMode] = useState(false)

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
})

export default ListItem


