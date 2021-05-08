import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getIsMarketingPage } from '../marketing'
import { getParsedLocation } from '../path'
import { getIsServerSide, getWindow } from '../../browser'
import {
    getAlbumReducers,
    getMarketingReducers,
} from '../../../redux'
import { VALID_ADMIN_PATHS } from '../../../constants/routing'

const getNeedsStoreProvider = pathname => (
    /**
     * If we're on the server side, then we don't have access to the pathname,
     * so just always wrap it in the store provider.
     */
    getIsServerSide() || (
        // It's a store path if it's not an admin page...
        !VALID_ADMIN_PATHS[pathname] ||

        // Or if it's the admin annotations page and not in production build.
        (
            !IS_PRODUCTION &&
            pathname === 'annotations'
        )
    )
)

const getReducers = ({
    windowHeight,
    windowWidth,
    pathname,
    search,
}) => (
    getIsMarketingPage(pathname) ?
        getMarketingReducers({
            windowHeight,
            windowWidth,
            pathname,
        }) :
        getAlbumReducers({
            windowHeight,
            windowWidth,
            pathname,
            search,
        })
)

export const getStoreIfNeeded = element => {
    const {
        pathname,
        search,
    } = getParsedLocation(element)

    if (!getNeedsStoreProvider(pathname)) {
        return null
    }

    const {
        innerHeight: windowHeight = 0,
        innerWidth: windowWidth = 0,
    } = getWindow()

    return createStore(
        getReducers({
            windowHeight,
            windowWidth,
            pathname,
            search,
        }),
        getIsServerSide() ?
            undefined :
            devToolsEnhancer(),
    )
}
