import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPitchServerClientHoc from '../../../PitchHoc'
import InlineSvg from '../../../../modules/InlineSvg'
import getPitchImageForIndex from '../../../../api/svg/pitch'
import { getPitchImageKeyForIndex } from '../../../../api/pitch/segments'
import './style'

const PitchImage = ({ serverClientPitchIndex }) => (
    <InlineSvg
        {...{
            className: cx(
                'PitchImage'
            ),
            svgClassName: cx(
                'dramaMasks'
            )
        }}
    >
        {getPitchImageForIndex(
            getPitchImageKeyForIndex(serverClientPitchIndex)
        )}
    </InlineSvg>
)

PitchImage.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(PitchImage)
