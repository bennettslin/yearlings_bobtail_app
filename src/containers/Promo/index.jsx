import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import PromoNavigation from '../../managers/Key/Navigation/Promo'
import AccessStylesheet from '../../components/Stylesheets/Access'
import Promo from '../../components/Promo'
import PromoHeader from './Header'
import { getKeyName } from '../../managers/Key/helper'
import { reloadRootPage } from '../../helpers/navigate'
import { updateAccessStore } from '../../redux/access/action'
import { getIsServerSide } from '../../utils/browser'
import { ESCAPE, ABOUT_ALBUM_TOGGLE_KEY } from '../../constants/access'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import AccessWrapper from '../../wrappers/AccessWrapper'
import BackButtonManager from '../../managers/BrowserNav/BackButton'
import ResizeManager from '../../managers/Resize'
import './style'

const PromoContainer = ({ children }) => {
    const
        dispatch = useDispatch(),
        promoContainerElement = useRef(),
        promoScrollElement = useRef(),
        navigatePromo = useRef()

    const getResizeContainerElement = () => promoContainerElement.current

    const focusElement = () => {
        if (promoScrollElement.current) {
            promoScrollElement.current.focus()
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

        // Handle promo navigation.
        navigatePromo.current(keyName)

        // Handle return home to album.
        if (keyName === ABOUT_ALBUM_TOGGLE_KEY) {
            reloadRootPage()
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
            'Promo container loaded.',
            {
                action: 'container',
                label: 'promo',
            },
        )
        focusElement()
    }, [])

    return (
        <DeviceWrapper>
            <AccessWrapper>
                <div
                    {...{
                        ref: promoContainerElement,
                        className: cx(
                            'PromoContainer',
                            'rootContainer',
                            'font__text',
                            'abF',
                            'fCC',
                        ),
                        onClick,
                        onKeyDown,
                        onKeyUp,
                    }}
                >
                    <ResizeManager
                        isPromoPage
                        {...{ getResizeContainerElement }}
                    />
                    <PromoHeader />
                    {getIsServerSide() ? (
                        children
                    ) : (
                        <Promo
                            isPromoPage
                            {...{
                                ref: promoScrollElement,
                                handlePageChange: focusElement,
                            }}
                        />
                    )}
                    <PromoNavigation {...{ ref: navigatePromo }} />
                    <BackButtonManager />
                </div>
                <AccessStylesheet />
            </AccessWrapper>
        </DeviceWrapper>
    )
}

PromoContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PromoContainer

