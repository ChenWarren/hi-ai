
//Retrieve dat from local storage
export const handleGetLocalStorage = (key) => {
    const result = window.localStorage.getItem(key)
    return result
}

// Save data to local storage
export const handleSaveToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
    const result = localStorage.getItem(key)
    return result
}

// Clear local storage
export const handleClearLocalStorage = (key) => {
    window.localStorage.removeItem(key)
    return []
}