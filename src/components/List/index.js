import React from "react";
import Button from "components/Button";
import ListItem from "./ListItem";
import { handleSaveToLocalStorage, handleClearLocalStorage } from "services/storageHandler";
import { useSelectLanguage } from "context/AppContext";

const List = React.memo(({
    list=[],
    setList=()=>{},
}) => {
    const { selectedLanguage } = useSelectLanguage()

    // save to local storage
    const handleSave = () => {
        const res = handleSaveToLocalStorage(selectedLanguage, list)
        setList(JSON.parse(res))
    }

    // clear local storage
    const handleClear = () => {
        handleClearLocalStorage(selectedLanguage)
        setList([])
    }

    return ( 
        <>
        <div className="list-container">
            <h1>Q&A List</h1>
            <div className="button-group-container">
                <Button buttonText="Save" handleClick={handleSave}/>
                <Button buttonText="Clear All" handleClick={handleClear}/>
            </div>
            { list && 
                list.map((item, i) => (
                    <ListItem item={item} key={item.id} index={i}/>
                ))
            }
        </div>
        </>
    );
})

export default List
  