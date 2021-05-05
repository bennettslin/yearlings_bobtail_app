/* eslint-disable react/prop-types */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import AlbumContainer from '../../containers/Album'
import LoadingContainer from '../../containers/Loading'
import PitchContainer from '../../containers/Pitch'
import {
    getIsMarketingPage,
    getNeedsAlbumContext,
    getNeedsStoreProvider,
    getReducers,
} from './helper'
import { getIsServerSide, getWindow } from '../browser'
import { getParsedLocation } from '../routing/path'
import { getIsUserAgentDeprecated } from '../device'
import DeprecatedContainer from '../../containers/Deprecated'

export const wrapRootElement = ({ element }) => {
    if (getIsUserAgentDeprecated()) {
        return (
            <DeprecatedContainer />
        )
    }

    const
        window = getWindow(),
        {
            innerHeight: windowHeight = 0,
            innerWidth: windowWidth = 0,
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
                windowHeight,
                windowWidth,
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
    } else if (getIsMarketingPage(pathname)) {
        return (
            <PitchContainer>
                {element}
            </PitchContainer>
        )
    }

    return element
}
