// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PitchNav from './Nav'
import getPitchServerClientHoc from '../PitchHoc'
import { getPitchSegmentForIndex } from '../../api/pitch/segments'

const Pitch = ({ serverClientPitchIndex }) => (
    <div
        {...{
            className: cx(
                'Pitch'
            )
        }}
    >
        {getPitchSegmentForIndex(serverClientPitchIndex).test}
        <PitchNav />
    </div>
)

Pitch.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(Pitch)
