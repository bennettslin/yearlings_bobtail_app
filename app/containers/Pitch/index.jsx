import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { navigate } from 'gatsby'
import AccessStylesheet from '../../components/Stylesheets/Access'
import Pitch from '../../components/Pitch'
import PitchNav from '../../components/PitchNav'
import PitchNavigation from '../../managers/Key/Navigation/Pitch'
import PitchHeader from './Header'
import { getKeyName } from '../../managers/Key/helper'
import { getPathForPitchPage } from '../../managers/Url/helper'
import { updateAccessStore } from '../../redux/access/action'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getWindow } from '../../utils/browser'
import { getIsServerSide } from '../../utils/server'
import { ESCAPE, PITCH_TOGGLE_KEY } from '../../constants/access'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import AccessWrapper from '../../wrappers/AccessWrapper'
import ResizeManager from '../../managers/Resize'
import './style'

const PitchContainer = ({ children }) => {
    const
        dispatch = useDispatch(),
        pitchContainerElement = useRef(),
        navigatePitch = useRef(),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const getRootContainerElement = () => pitchContainerElement.current

    const returnToAlbum = () => {
        /**
         * Navigation cannot be done through gatsby, since it does not
         * change store provider. Push, not replace, in history.
         */
        getWindow().location.href = '/'
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
        if (keyName === PITCH_TOGGLE_KEY) {
            returnToAlbum()
        }

        dispatch(updateAccessStore({
            // Turn off or on access.
            isAccessOn: keyName !== ESCAPE,

            // Stop showing key as registered in the UI.
            accessedKey: ''
        }))
    }

    const onClick = () => {
        dispatch(updateAccessStore({ isAccessOn: false }))
    }

    useEffect(() => {
        navigate(
            getPathForPitchPage(pitchSegmentIndex),
            { replace: true }
        )

        pitchContainerElement.current.focus()
    }, [pitchSegmentIndex])

    return (
        <div
            {...{
                ref: pitchContainerElement,
                className: cx(
                    'PitchContainer',
                    'abF',
                    'foN',
                    'PtSansNarrow'
                ),
                tabIndex: -1,
                onClick,
                onKeyDown,
                onKeyUp
            }}
        >
            <Helmet>
                <title>{`Pitch | Yearling's Bobtail`}</title>
            </Helmet>
            <ResizeManager
                isInPitch
                {...{ getRootContainerElement }}
            />
            <PitchHeader {...{ returnToAlbum }} />
            {getIsServerSide() ? (
                children
            ) : (
                <Pitch />
            )}
            <PitchNav />
            <PitchNavigation {...{ ref: navigatePitch }} />
        </div>
    )
}

PitchContainer.propTypes = {
    children: PropTypes.node.isRequired
}

const ParentPitchContainer = ({ children }) => (
    <DeviceWrapper>
        <AccessWrapper>
            <PitchContainer>
                {children}
            </PitchContainer>
            <AccessStylesheet />
        </AccessWrapper>
    </DeviceWrapper>
)

ParentPitchContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default ParentPitchContainer
