import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { navigate } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'
import Pitch from '../../components/Pitch'
import PitchNav from '../../components/PitchNav'
import PitchNavigation from '../../managers/Key/Navigation/Pitch'
import { getKeyName } from '../../managers/Key/helper'
import { getPathForPitchPage } from '../../managers/Url/helper'
import { updateAccessStore } from '../../redux/access/action'
import { mapIsAccessOn } from '../../redux/access/selector'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getWindow } from '../../utils/browser'
import { getIsServerSide } from '../../utils/server'
import { ESCAPE, PITCH_TOGGLE_KEY } from '../../constants/access'

const PitchContainer = ({ children }) => {
    const
        dispatch = useDispatch(),
        pitchContainerElement = useRef(),
        navigatePitch = useRef(),
        isAccessOn = useSelector(mapIsAccessOn),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    const onKeyUp = e => {
        const keyName = getKeyName(e)

        // Handle pitch navigation.
        navigatePitch.current(keyName)

        // Handle return home to album.
        if (keyName === PITCH_TOGGLE_KEY) {
            /**
             * Navigation cannot be done through gatsby, since it does not
             * change store provider. Push, not replace, in history.
             */
            getWindow().location.href = '/'
        }

        // Handle access.
        dispatch(updateAccessStore({ isAccessOn: keyName !== ESCAPE }))
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
                    'PitchPageComponent',

                    // Recreate wrapper behaviour.
                    isAccessOn && 'PlW__accessOn',

                    'abF',
                    'foN'
                ),
                tabIndex: -1,
                onClick,
                onKeyUp
            }}
        >
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

export default PitchContainer
