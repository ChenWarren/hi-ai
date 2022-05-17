import Button from "components/Button";
import ListItem from "./ListItem";
import { handleSaveToLocalStorage, handleClearLocalStorage } from "services/storageHandler";

export default function List({
    list=[],
    setList=()=>{},
}) {

    console.log("List")

    // save to local storage
    const handleSave = () => {
        const res = handleSaveToLocalStorage("list", list)
        setList(JSON.parse(res))
    }

    // clear local storage
    const handleClear = () => {
        handleClearLocalStorage("list")
        setList([])
    }

    return ( 
        <>
        <div className="list-container">
            <div className="button-group-container">
                <Button buttonText="Save" handleClick={handleSave}/>
                <Button buttonText="Clear" handleClick={handleClear}/>
            </div>
            { list && 
                list.map((item, i) => (
                    <ListItem item={item} key={item.id} index={i}/>
                ))
            }
        </div>
        </>
    );
}
  