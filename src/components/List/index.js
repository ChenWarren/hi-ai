import React from "react"
import Button from "components/Button"
import ListItem from "./ListItem"
import { handleSaveToLocalStorage, handleClearLocalStorage } from "services/storageHandler"
import { useSelectLanguage, useMessage } from "context/AppContext"

const List = React.memo(({
    list=[],
    setList=()=>{},
}) => {
    const { selectedLanguage } = useSelectLanguage()
    const { setMessage } = useMessage()

    // save to local storage
    const handleSave = () => {
        try {
            const res = handleSaveToLocalStorage(selectedLanguage, list)
            setList(JSON.parse(res))
            setMessage('Data saved!')
        } catch (err) {
            setMessage('Sorry, there is a error: ' + err.message)
        }
    }

    // clear local storage
    const handleClear = () => {
        try {
            handleClearLocalStorage(selectedLanguage)
            setList([])
            setMessage('Data cleared')
        } catch (err) {
            setMessage('Sorry, there is a error: ' + err.message)
        }
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
  