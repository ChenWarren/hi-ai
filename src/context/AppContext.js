import { createContext, useContext, useState } from "react";

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [text, setText]= useState([])
    const [updateData, setUpdateData] = useState(null)
    const [deleteItemID, setDeleteItemID] = useState(null)


    return(
        <AppContext.Provider value={{
            text, setText,
            updateData, setUpdateData,
            deleteItemID, setDeleteItemID
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider

export const useText = () => {
    const { text, setText } = useContext(AppContext)
    return { text, setText }
}

export const useUpdateData = () => {
    const { updateData, setUpdateData } = useContext(AppContext)
    return { updateData, setUpdateData }
}

export const useDeleteItem = () => {
    const { deleteItemID, setDeleteItemID } = useContext(AppContext)
    return { deleteItemID, setDeleteItemID }
}

