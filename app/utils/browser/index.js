const SAFE_DOCUMENT = {
    activeElement: {},
    getElementById() {},
    getElementsByClassName: () => [],
    querySelector() {},
}

const SAFE_WINDOW = {
    history: {
        replaceState() {},
    },
    innerWidth: 0,
    innerHeight: 0,
    localStorage: {},
    location: {
        pathname: '',
        search: '',
    },
    navigator: {
        maxTouchPoints: '',
        msMaxTouchPoints: '',
        userAgent: '',
    },
    onresize() {},
}

export const getIsServerSide = () => (
    typeof window === 'undefined'
)

export const getDocument = () => (
    typeof document === 'undefined' ?
        SAFE_DOCUMENT :
        document
)

export const getWindow = () => (
    getIsServerSide() ?
        SAFE_WINDOW :
        window
)
