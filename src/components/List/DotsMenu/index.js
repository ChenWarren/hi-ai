import React, { useState } from "react";
import { 
    BsThreeDotsVertical, 
    BsPencilFill, 
    BsTrashFill, 
} from "react-icons/bs";

// Three dots menu
const DotsMenu = React.memo(({
    setMode,
    setDelete
}) => {
    const [expanded, setExpanded] = useState(false);

    const handleEdit = () => {
        console.log('edit');
        setMode(true);
    };

    const handleDeleteItem = () => {
        setDelete(true)
    };

    console.log('dots menu');
    return (
        <div className="dots-menu">
            {expanded ? 
                <div className="icon-group">
                    <div className="tooltip-container">
                        <BsPencilFill onClick={handleEdit} size="21" />
                        <span className="tooltip">Edit</span>
                    </div>
                    <div className="tooltip-container">
                        <BsTrashFill onClick={handleDeleteItem} size="21" />
                        <span className="tooltip">Delete</span>
                    </div>
                    <div className="tooltip-container">
                        <BsThreeDotsVertical onClick={() => setExpanded(false)} size="21" />
                        <span className="tooltip">Close</span>
                    </div>
                </div> 
                : 
                <div className="tooltip-container">
                    <BsThreeDotsVertical onClick={() => setExpanded(true)} size="21" />
                    <span className="tooltip">Open</span>
                </div>
            }
        </div>
    );
});

export default DotsMenu
  