/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'react-redux'
import AlbumContainer from '../../containers/Album'
import LoadingContainer from '../../containers/Loading'
import PromoContainer from '../../containers/Promo'
import { getIsAlbumPage } from './album'
import { getParsedLocation } from './path'
import { getIsPromoPage } from './promo'
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
    } else if (getIsPromoPage(pathname)) {
        return (
            <PromoContainer>
                {element}
            </PromoContainer>
        )
    }

    return element
}
