// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPitchServerClientHoc from '../../../PitchHoc'
import { getPitchTextForIndex } from '../../../../api/pitch/segments'
import './style'

const PitchText = ({ serverClientPitchIndex }) => (
    <div
        {...{
            className: cx(
                'PitchText',
                'fontSize__mediumTitle'
            )
        }}
    >
        {getPitchTextForIndex(serverClientPitchIndex).map((segment, index) => (
            <p
                {...{
                    key: index
                }}
            >
                {segment}
            </p>
        ))}
    </div>
)

PitchText.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(PitchText)
