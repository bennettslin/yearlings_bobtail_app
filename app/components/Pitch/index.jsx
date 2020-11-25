// Section to show pitch to labels and press.
import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PitchNav from './Nav'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getPitchSegmentForIndex } from '../../api/pitch/segments'

const Pitch = () => {
    const pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

    return (
        <div
            {...{
                className: cx(
                    'Pitch'
                )
            }}
        >
            {getPitchSegmentForIndex(pitchSegmentIndex)}
            <PitchNav />
        </div>
    )
}

export default Pitch
