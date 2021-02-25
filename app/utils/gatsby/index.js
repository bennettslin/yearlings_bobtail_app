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
import { getIsServerSide } from '../server'

export const wrapRootElement = ({ element }) => {
    if (getNeedsStoreProvider()) {
        const store = createStore(
            getReducers(),
            getIsServerSide() ?
                undefined :
                devToolsEnhancer()
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
    if (getNeedsAlbumContext()) {
        return (
            <AlbumContainer>
                {element}
            </AlbumContainer>
        )
    } else if (getIsPitchPage()) {
        return (
            <PitchContainer>
                {element}
            </PitchContainer>
        )
    }

    return element
}
