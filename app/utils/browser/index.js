import { getIsServerSide } from '../server'

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
        getIsServerSide() ?
            SAFE_WINDOW :
            window
    )
    safeWindow.dataLayer = safeWindow.dataLayer || []
    return safeWindow
}

export const setIsAlbumSession = () => {
    /**
     * Called by album container to register that the session started from the
     * album, not the pitch page. Obviously, it persists only for the length of
     * the session.
     */
    getWindow().isAlbumSession = true
}

export const getIsAlbumSession = () => (
    /**
     * This gets called to determine whether navigation to the pitch path
     * started from the album or the pitch page.
     */
    Boolean(getWindow().isAlbumSession)
)
