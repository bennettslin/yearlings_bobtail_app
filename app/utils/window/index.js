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

// TODO: Only used by Previewer.
export const getFromStorage = (key) => {
    return getWindowStorage()[key]
}

export const setBoolInStorage = (key, value) => {
    getWindowStorage()[key] = value ? 'true' : 'false'
}

export const setInStorage = (key, value) => {
    getWindowStorage()[key] = value
}
