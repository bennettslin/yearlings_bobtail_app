// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPitchServerClientHoc from '../../../PitchHoc'
import { getPitchTitleForIndex } from '../../../../api/pitch/segments'
import './style'

const PitchTitle = ({ serverClientPitchIndex }) => (
    <div
        {...{
            className: cx(
                'PitchTitle',
                'fontSize__largeTitle'
            )
        }}
    >
        {getPitchTitleForIndex(serverClientPitchIndex)}
    </div>
)

PitchTitle.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(PitchTitle)
