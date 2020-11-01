/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'react-redux'
import PageElementContext from '../../contexts/PageElement'
import AppContainer from '../../containers/App'
import LoadingContainer from '../../containers/Loading'
import { getIsNonAppRoute } from './helper'

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

    return getIsNonAppRoute(pathname) ? (
        element
    ) : (
        <PageElementContext.Provider {...{ value: element }}>
            <AppContainer />
        </PageElementContext.Provider>
    )
}
