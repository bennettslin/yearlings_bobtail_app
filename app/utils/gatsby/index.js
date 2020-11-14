/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'react-redux'
import AlbumPageElementContext from '../../contexts/AlbumPageElement'
import AlbumContainer from '../../containers/Album'
import LoadingContainer from '../../containers/Loading'
import { getNeedsAlbumPageWrapper } from './helper'

export const getWrapRootElement = store => ({ element }) => (
    <Provider {...{ store }}>
        {element}
        <LoadingContainer />
    </Provider>
)

export const getWrapPageElement = () => ({ element }) => {
    const {
        props: {
            location: {
                pathname
            }
        }
    } = element

    return getNeedsAlbumPageWrapper(pathname) ? (
        <AlbumPageElementContext.Provider {...{ value: element }}>
            <AlbumContainer />
        </AlbumPageElementContext.Provider>
    ) : element
}
