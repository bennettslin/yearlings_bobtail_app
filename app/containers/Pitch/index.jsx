import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import { navigate } from 'gatsby'
import { useSelector } from 'react-redux'
import Pitch from '../../components/Pitch'
import { getKeyName } from '../../managers/Key/helper'
import PitchNavigation from '../../managers/Key/Navigation/Pitch'
import { getPathForPitchPage } from '../../managers/Url/helper'
import { mapIsAccessOn } from '../../redux/access/selector'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getWindow } from '../../utils/browser'
import { PITCH_TOGGLE_KEY } from '../../constants/access'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'

const getPitchContainer = (pagePitchIndex = 0) => {

    const PitchContainer = () => {
        const
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
        }

        useEffect(() => {
            navigate(
                getPathForPitchPage(pitchSegmentIndex),
                { replace: true }
            )

            pitchContainerElement.current.focus()
        }, [pitchSegmentIndex])

        return (
            <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
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
                        onKeyUp
                    }}
                >
                    <Pitch {...{ pagePitchIndex }} />
                    <PitchNavigation {...{ ref: navigatePitch }} />
                </div>
            </PagePitchIndexContext.Provider>
        )
    }

    return PitchContainer
}

export default getPitchContainer
