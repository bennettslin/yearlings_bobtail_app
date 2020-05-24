const SAFE_WINDOW = {
    datalayer: [],
    history: {
        replaceState() {}
    },
    innerWidth: 0,
    innerHeight: 0,
    localStorage: {},
    location: {
        pathname: '',
        search: ''
    },
    navigator: {
        maxTouchPoints: '',
        msMaxTouchPoints: '',
        userAgent: ''
    },
    onresize() {}
}

export const getWindow = () => (
    typeof window === 'undefined' ?
        SAFE_WINDOW :
        window
)

export const removeLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('DramaMasks__load')
    if (loadingIndicator) {
        loadingIndicator.parentNode.removeChild(loadingIndicator)
    }
}
