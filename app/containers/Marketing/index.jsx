import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { navigate } from 'gatsby'
import AccessStylesheet from '../../components/Stylesheets/Access'
import Marketing from '../../components/Marketing'
import PitchNavigation from '../../managers/Key/Navigation/Pitch'
import MarketingHeader from './Header'
import { getKeyName } from '../../managers/Key/helper'
import { getPathForPitchPage } from '../../helpers/url'
import { updateAccessStore } from '../../redux/access/action'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getIsServerSide, getWindow } from '../../utils/browser'
import { ESCAPE, MARKETING_HOME_KEY } from '../../constants/access'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import AccessWrapper from '../../wrappers/AccessWrapper'
import ResizeManager from '../../managers/Resize'
import { ALBUM_TITLE } from '../../constants/paths'

const MarketingContainer = ({ children }) => {
    const
        dispatch = useDispatch(),
        marketingContainerElement = useRef(),
        marketingScrollElement = useRef(),
        navigatePitch = useRef(),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const getResizeContainerElement = () => marketingContainerElement.current

    const returnToAlbum = () => {
        /**
         * Navigation cannot be done through gatsby, since it does not
         * change store provider. Push, not replace, in history.
         */
        getWindow().location.href = '/'
    }

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

        // Handle pitch navigation.
        navigatePitch.current(keyName)

        // Handle return home to album.
        if (keyName === MARKETING_HOME_KEY) {
            returnToAlbum()
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

    useEffect(() => {
        navigate(
            getPathForPitchPage(pitchSegmentIndex),
            { replace: true },
        )

        focusElement()
    }, [pitchSegmentIndex])

    return (
        <div
            {...{
                ref: marketingContainerElement,
                className: cx(
                    'MarketingContainer',
                    'hybridContainer',
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
                <title>{`Pitch | ${ALBUM_TITLE}`}</title>
                <meta
                    {...{
                        name: 'description',
                        content: 'Pitch for the Bobtail Yearlings album.',
                    }}
                />
            </Helmet>
            <ResizeManager
                isMarketingPage
                {...{ getResizeContainerElement }}
            />
            <MarketingHeader {...{ returnToAlbum }} />
            {getIsServerSide() ? (
                children
            ) : (
                <Marketing {...{ ref: marketingScrollElement }} />
            )}
            <PitchNavigation {...{ ref: navigatePitch }} />
        </div>
    )
}

MarketingContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

const ParentMarketingContainer = ({ children }) => (
    <DeviceWrapper>
        <AccessWrapper>
            <MarketingContainer>
                {children}
            </MarketingContainer>
            <AccessStylesheet />
        </AccessWrapper>
    </DeviceWrapper>
)

ParentMarketingContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ParentMarketingContainer

