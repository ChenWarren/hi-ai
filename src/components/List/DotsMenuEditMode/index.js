import { FaUndo, FaRegSave } from "react-icons/fa";

// Three dots menu for edit mode
const DotsMenuEditMode = ({
  setMode,
  saveChanges=()=>{},
}) => {
  const handleSaveChanges = () => {
    saveChanges()
    setMode(false)
  };

  const handleCancel = () => {
    setMode(false);
  };

  return (
        <div className="dots-menu">
            <div className="icon-group-edit-mode">
                <div className="tooltip-container">
                    <FaRegSave onClick={handleSaveChanges} size="21" />
                    <span className="tooltip">Save changes</span>
                </div>
                <div className="tooltip-container">
                    <FaUndo onClick={handleCancel} size="18" />
                    <span className="tooltip">Cancel</span>
                </div>
            </div>
        </div>
    );
};

export default DotsMenuEditMode
  