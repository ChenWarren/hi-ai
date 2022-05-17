
//Retrieve dat from local storage
export const handleGetLocalStorage = (key) => {
    const result = localStorage.getItem(key)
    return result
}

// Save data to local storage
export const handleSaveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    const result = localStorage.getItem(key)
    return result
}

// Clear local storage
export const handleClearLocalStorage = (key) => {
    localStorage.removeItem(key)
    return []
}