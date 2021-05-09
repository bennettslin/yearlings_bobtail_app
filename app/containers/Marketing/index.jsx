import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import MarketingNavigation from '../../managers/Key/Navigation/Marketing'
import AccessStylesheet from '../../components/Stylesheets/Access'
import Marketing from '../../components/Marketing'
import MarketingHeader from './Header'
import { getKeyName } from '../../managers/Key/helper'
import { reloadFromRoot } from '../../helpers/navigate'
import { updateAccessStore } from '../../redux/access/action'
import { mapSelectedPromoPath } from '../../redux/marketing/selector'
import { getIsServerSide } from '../../utils/browser'
import { ESCAPE, ROOT_HOME_KEY } from '../../constants/access'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import AccessWrapper from '../../wrappers/AccessWrapper'
import ResizeManager from '../../managers/Resize'
import MarketingUrlManager from '../../managers/Url/Marketing'
import { getHelmetTitleForPromoPath } from './helper'
import './style'

const MarketingContainer = ({ children }) => {
    const
        dispatch = useDispatch(),
        marketingContainerElement = useRef(),
        marketingScrollElement = useRef(),
        navigateMarketing = useRef(),
        selectedPromoPath = useSelector(mapSelectedPromoPath)

    const getResizeContainerElement = () => marketingContainerElement.current

    const focusElement = () => {
        if (marketingScrollElement.current) {
            marketingScrollElement.current.focus()
        }
    }

    const onKeyDown = e => {
        const keyName = getKeyName(e)

        if (keyName) {
            // Show key as registered in the UI.
            dispatch(updateAccessStore({ accessedKey: keyName }))
        }
    }

    const onKeyUp = e => {
        const keyName = getKeyName(e)

        // Handle marketing navigation.
        navigateMarketing.current(keyName)

        // Handle return home to album.
        if (keyName === ROOT_HOME_KEY) {
            reloadFromRoot()
        }

        dispatch(updateAccessStore({
            // Turn off or on access.
            isAccessOn: keyName !== ESCAPE,

            // Stop showing key as registered in the UI.
            accessedKey: '',
        }))
    }

    const onClick = () => {
        dispatch(updateAccessStore({ isAccessOn: false }))
        focusElement()
    }

    useEffect(() => {
        logServe(
            'Marketing container loaded.',
            {
                action: 'container',
                label: 'marketing',
            },
        )
    }, [])

    return (
        <DeviceWrapper>
            <AccessWrapper>
                <div
                    {...{
                        ref: marketingContainerElement,
                        className: cx(
                            'MarketingContainer',
                            'rootContainer',
                            'PtSansNarrow',
                            'abF',
                            'fCC',
                        ),
                        onClick,
                        onKeyDown,
                        onKeyUp,
                    }}
                >
                    <Helmet>
                        <title>
                            {getHelmetTitleForPromoPath(selectedPromoPath)}
                        </title>
                        <meta
                            {...{
                                name: 'description',
                                content: `Promo material for Yearling's Bobtail, the Bobtail Yearlings album.`,
                            }}
                        />
                    </Helmet>
                    <ResizeManager
                        isMarketingPage
                        {...{ getResizeContainerElement }}
                    />
                    <MarketingHeader />
                    {getIsServerSide() ? (
                        children
                    ) : (
                        <Marketing
                            {...{
                                ref: marketingScrollElement,
                                handlePageChange: focusElement,
                            }}
                        />
                    )}
                    <MarketingNavigation {...{ ref: navigateMarketing }} />
                    <MarketingUrlManager />
                </div>
                <AccessStylesheet />
            </AccessWrapper>
        </DeviceWrapper>
    )
}

MarketingContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MarketingContainer

