export const useLocalStorage = () => {
    const setLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    const getLocalStorage = (key) => {
        try{
            return JSON.parse(localStorage.getItem(key))
        } catch (e) {
            throw new Error(e)
        }
    }
    const removeLocalStorage = (key) => {
        localStorage.removeItem(key)
    }

    return {
        setLocalStorage,
        getLocalStorage,
        removeLocalStorage
    }
}