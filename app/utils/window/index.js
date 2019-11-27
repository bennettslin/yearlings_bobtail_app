export const getWindowStorage = () => {
    return window.localStorage
}

export const getBoolFromStorage = (key) => {
    const storedValue = getWindowStorage()[key]
    switch (storedValue) {
        case 'true':
            return true
        case 'false':
            return false
        default:
            return undefined
    }
}

export const setBoolInStorage = (key, value) => {
    getWindowStorage()[key] = value ? 'true' : 'false'
}

export const setInStorage = (key, value) => {
    getWindowStorage()[key] = value
}

export const removeLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('DramaMasks__load')
    if (loadingIndicator) {
        loadingIndicator.parentNode.removeChild(loadingIndicator)
    }
}
