import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../../modules/InlineSvg'
import ceilingRafter from '../../../../assets/svgs/theatre/ceilingRafter'
import './style'

const propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

const CeilingRafter = ({
    top,
    left,
    width,
    height,

}) => (
    <InlineSvg
        {...{
            className: cx(
                'CeilingRafter',
            ),
            style: {
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`,
            },
            svgClassName: cx(
                'ceilingRafter',
                'fillTransition__dimTheatre',
            ),
        }}
    >
        {ceilingRafter}
    </InlineSvg>
)

CeilingRafter.propTypes = propTypes

export default memo(CeilingRafter)
