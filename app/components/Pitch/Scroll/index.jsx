// Section to show pitch to labels and press.
import React, { forwardRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import PitchTitle from './Title'
import PitchDescription from './Description'
import { mapPitchSegmentIndex } from '../../../redux/pitch/selector'
import './style'

const PitchScroll = forwardRef((props, ref) => {
    const pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    useEffect(() => {
        // Scroll back to top upon page change.
        ref.current.scrollTop = 0
        logState('pitchSegmentIndex', pitchSegmentIndex)
    }, [pitchSegmentIndex])

    return (
        <div
            {...{
                className: cx(
                    // Box shadow and gradient mask cannot be on same element.
                    'PitchScroll__container',
                    'abF'
                ),
            }}
        >
            <div
                {...{
                    ref,
                    className: cx(
                        'PitchScroll',
                        'foN',
                        'gradientMask__scrollBottom'
                    ),
                    tabIndex: -1,
                }}
            >
                <PitchTitle />
                <div
                    {...{
                        className: cx(
                            'PitchScroll__content'
                        ),
                    }}
                >
                    <PitchDescription />
                </div>
            </div>
        </div>
    )
})

export default PitchScroll
