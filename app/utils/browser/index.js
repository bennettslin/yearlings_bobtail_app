const SAFE_DOCUMENT = {
    activeElement: {},
    getElementById() {},
    getElementsByClassName: () => [],
    querySelector() {}
}

const SAFE_WINDOW = {
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

export const getDocument = () => (
    typeof document === 'undefined' ?
        SAFE_DOCUMENT :
        document
)

export const getWindow = () => {
    const window = (
        typeof window === 'undefined' ?
            SAFE_WINDOW :
            window
    )
    window.dataLayer = window.dataLayer || []
    return window
}

export const removeLoadingIndicator = () => {
    const loadingIndicator = getDocument().getElementById('DramaMasks__load')
    if (loadingIndicator) {
        loadingIndicator.parentNode.removeChild(loadingIndicator)
    }
}
