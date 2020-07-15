/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'react-redux'
import PageElementContext from '../../contexts/PageElement'
import AppContainer from '../../containers/App'
import { getIsValidAdminRoute } from '../../utils/server'

export const getWrapRootElement = store => ({ element }) => (
    <Provider {...{ store }}>
        {element}
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

    return getIsValidAdminRoute(pathname) ? (
        element
    ) : (
        <PageElementContext.Provider {...{ value: element }}>
            <AppContainer />
        </PageElementContext.Provider>
    )
}
