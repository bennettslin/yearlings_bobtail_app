// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPitchServerClientHoc from '../../PitchHoc'
import { getPitchSegmentForIndex } from '../../../api/pitch/segments'
import './style'

const PitchScroll = ({ serverClientPitchIndex }) => (
    <div
        {...{
            className: cx(
                'PitchScroll'
            )
        }}
    >
        {getPitchSegmentForIndex(serverClientPitchIndex)}
    </div>
)

PitchScroll.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(PitchScroll)
