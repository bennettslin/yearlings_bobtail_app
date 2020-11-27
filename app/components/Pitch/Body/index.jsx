// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPitchServerClientHoc from '../../PitchHoc'
import { getPitchSegmentForIndex } from '../../../api/pitch/segments'

const PitchBody = ({ serverClientPitchIndex }) => (
    <div
        {...{
            className: cx(
                'PitchBody'
            )
        }}
    >
        {getPitchSegmentForIndex(serverClientPitchIndex)}
    </div>
)

PitchBody.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(PitchBody)
