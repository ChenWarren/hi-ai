import { createContext, useContext, useState } from "react";
import Languages from "config/Languages";

const AppContext = createContext()

// Main context provider
const AppContextProvider = ({children}) => {
    const [text, setText]= useState([])
    const [updateData, setUpdateData] = useState(null)
    const [deleteItemID, setDeleteItemID] = useState(null)
    const [selectedLanguage, setSelectedLanguage] = useState(Languages[0].language)

    return(
        <AppContext.Provider value={{
            text, setText,
            updateData, setUpdateData,
            deleteItemID, setDeleteItemID,
            selectedLanguage, setSelectedLanguage
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider

// custom useText hook
export const useText = () => {
    const { text, setText } = useContext(AppContext)
    return { text, setText }
}

// custom useUpdateData hook
export const useUpdateData = () => {
    const { updateData, setUpdateData } = useContext(AppContext)
    return { updateData, setUpdateData }
}

// custom useDeleteItem hook
export const useDeleteItem = () => {
    const { deleteItemID, setDeleteItemID } = useContext(AppContext)
    return { deleteItemID, setDeleteItemID }
}

export const useSelectLanguage = () => {
    const { selectedLanguage, setSelectedLanguage } = useContext(AppContext)
    return { selectedLanguage, setSelectedLanguage }
}
