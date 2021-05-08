import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getIsMarketingPage } from '../marketing'
import { getParsedLocation } from '../path'
import { getIsServerSide, getWindow } from '../../browser'
import {
    getAlbumReducers,
    getMarketingReducers,
} from '../../../redux'
import { getIsAlbumPage } from '../album'
import { getIsAdminPageWithStore } from '../admin'

const _getReducersIfNeeded = ({
    windowHeight,
    windowWidth,
    pathname,
    search,

}) => {
    if (
        // For some reason, server side needs store for all pages.
        getIsServerSide() ||
        getIsAlbumPage(pathname) ||
        getIsAdminPageWithStore(pathname)
    ) {
        return getAlbumReducers({
            windowHeight,
            windowWidth,
            pathname,
            search,
        })
    } else if (getIsMarketingPage(pathname)) {
        return getMarketingReducers({
            windowHeight,
            windowWidth,
            pathname,
        })
    } else {
        return null
    }
}

export const getStoreIfNeeded = element => {
    const {
            pathname,
            search,
        } = getParsedLocation(element),
        {
            innerHeight: windowHeight = 0,
            innerWidth: windowWidth = 0,
        } = getWindow(),
        reducers = _getReducersIfNeeded({
            windowHeight,
            windowWidth,
            pathname,
            search,
        })

    return reducers ? createStore(
        reducers,
        getIsServerSide() ?
            undefined :
            devToolsEnhancer(),
    ) : null
}
