// Section to show pitch to labels and press.
import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
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
            Pitch component: {getPitchSegmentForIndex(pitchSegmentIndex).test}
        </div>
    )
}

export default Pitch
