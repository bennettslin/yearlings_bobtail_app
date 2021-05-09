/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'react-redux'
import AlbumContainer from '../../containers/Album'
import LoadingContainer from '../../containers/Loading'
import MarketingContainer from '../../containers/Marketing'
import { getIsAlbumPage } from './album'
import { getIsMarketingPage } from './marketing'
import { getParsedLocation } from './path'
import { getShowLoadingContainer } from './session'
import { getStoreIfNeeded } from './store'
import { getIsUserAgentDeprecated } from '../device'
import DeprecatedContainer from '../../containers/Deprecated'

export const wrapRootElement = ({ element }) => {
    const
        store = getStoreIfNeeded(element),
        { pathname } = getParsedLocation(element)

    return store ? (
        <Provider {...{ store }}>
            {element}
            {getShowLoadingContainer(pathname) && (
                <LoadingContainer />
            )}
        </Provider>
    ) : element
}

export const wrapPageElement = ({ element }) => {
    if (getIsUserAgentDeprecated()) {
        return (
            <DeprecatedContainer />
        )
    }

    const { pathname } = getParsedLocation(element)

    if (getIsAlbumPage(pathname)) {
        return (
            <AlbumContainer>
                {element}
            </AlbumContainer>
        )
    } else if (getIsMarketingPage(pathname)) {
        return (
            <MarketingContainer>
                {element}
            </MarketingContainer>
        )
    }

    return element
}
