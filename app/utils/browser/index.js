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

export const getFinalSideKey = () => (
    getIsServerSide() ? 'isServerSide' : 'isClientSide'
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

export const setIsAlbumSession = () => {
    /**
     * Called by album container to register that the session started from the
     * album, not a marketing page. Obviously, it persists only for the length
     * of the session.
     */
    if (!getIsServerSide()) {
        getWindow().isAlbumSession = true
    }
}

export const getIsAlbumSession = () => (
    /**
     * This gets called to determine whether navigation to the marketing path
     * started from the album or a marketing page.
     */
    !getIsServerSide() &&
    Boolean(getWindow().isAlbumSession)
)
