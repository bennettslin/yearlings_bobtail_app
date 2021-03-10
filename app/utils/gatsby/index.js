/* eslint-disable react/prop-types */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import AlbumContainer from '../../containers/Album'
import LoadingContainer from '../../containers/Loading'
import PitchContainer from '../../containers/Pitch'
import {
    getReducers,
    getIsPitchPage,
    getNeedsAlbumContext,
    getNeedsStoreProvider,
} from './helper'
import { getIsServerSide, getWindow } from '../browser'
import { getParsedLocation } from '../routing/path'

export const wrapRootElement = ({ element }) => {
    const
        window = getWindow(),
        {
            innerHeight = 0,
            innerWidth = 0,
        } = window,
        {
            pathname,
            search,
        } = getParsedLocation({
            element,
            window,
        })

    if (getNeedsStoreProvider(pathname)) {
        const store = createStore(
            getReducers({
                innerHeight,
                innerWidth,
                pathname,
                search,
            }),
            getIsServerSide() ?
                undefined :
                devToolsEnhancer(),
        )

        return (
            <Provider {...{ store }}>
                {element}
                <LoadingContainer />
            </Provider>
        )

    } else {
        return element
    }
}

export const wrapPageElement = ({ element }) => {
    const
        window = getWindow(),
        { pathname } = getParsedLocation({
            element,
            window,
        })

    if (getNeedsAlbumContext(pathname)) {
        return (
            <AlbumContainer>
                {element}
            </AlbumContainer>
        )
    } else if (getIsPitchPage(pathname)) {
        return (
            <PitchContainer>
                {element}
            </PitchContainer>
        )
    }

    return element
}
