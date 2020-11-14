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
    const safeWindow = (
        typeof window === 'undefined' ?
            SAFE_WINDOW :
            window
    )
    safeWindow.dataLayer = safeWindow.dataLayer || []
    return safeWindow
}

export const setIsAppSession = () => {
    /**
     * Called by app container to register that the session started from the
     * app, not the pitch page. Obviously, it persists only for the length of
     * the session.
     */
    getWindow().isAppSession = true
}

export const getIsAppSession = () => (
    /**
     * This gets called to determine whether navigation to the pitch path
     * started from the app or the pitch page.
     */
    Boolean(getWindow().isAppSession)
)
