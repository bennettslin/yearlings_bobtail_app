import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { getIsPromoSession } from '../promo'
import { getParsedLocation } from '../path'
import { getIsServerSide, getWindow } from '../../browser'
import {
    getAlbumReducers,
    getPromoReducers,
} from '../../../redux'
import { getIsAlbumSession } from '../album'
import { getIsReduxAdminPage } from '../admin'
import { getIsNotFoundPage } from '../session'

const getReducersIfNeeded = ({
    windowHeight,
    windowWidth,
    pathname,
    search,

}) => {
    const isReduxAdminPage = getIsReduxAdminPage(pathname)

    if (
        // For some reason, server side needs store for all pages.
        getIsServerSide() ||
        getIsAlbumSession(pathname) ||
        isReduxAdminPage
    ) {
        return getAlbumReducers({
            windowHeight,
            windowWidth,
            pathname,
            search,
            isReduxAdminPage,
        })
    } else if (
        getIsPromoSession(pathname) ||
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
        reducers = getReducersIfNeeded({
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
