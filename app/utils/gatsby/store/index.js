import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getIsPromoPage } from '../promo'
import { getParsedLocation } from '../path'
import { getIsServerSide, getWindow } from '../../browser'
import {
    getAlbumReducers,
    getPromoReducers,
} from '../../../redux'
import { getIsAlbumPage } from '../album'
import { getIsAdminPageWithStore } from '../admin'
import { getIsNotFoundPage } from '../session'

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
    } else if (
        getIsPromoPage(pathname) ||
        getIsNotFoundPage(pathname)
    ) {
        return getPromoReducers({
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
