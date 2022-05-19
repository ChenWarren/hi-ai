import { createContext, useContext, useState } from "react";
import Languages from "config/Languages";

const AppContext = createContext()

// Main context provider
const AppContextProvider = ({children}) => {
    const [text, setText]= useState([])
    const [updateData, setUpdateData] = useState(null)
    const [deleteItemID, setDeleteItemID] = useState(null)
    const [selectedLanguage, setSelectedLanguage] = useState(Languages[0].language)
    const [message, setMessage] = useState('')

    return(
        <AppContext.Provider value={{
            text, setText,
            updateData, setUpdateData,
            deleteItemID, setDeleteItemID,
            selectedLanguage, setSelectedLanguage,
            message, setMessage
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

// custom select computer language hook
export const useSelectLanguage = () => {
    const { selectedLanguage, setSelectedLanguage } = useContext(AppContext)
    return { selectedLanguage, setSelectedLanguage }
}

// custom message hook
export const useMessage = () => {
    const {message, setMessage} = useContext(AppContext)
    return {message, setMessage}
}
