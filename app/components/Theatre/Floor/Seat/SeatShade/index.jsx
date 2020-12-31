import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../../../modules/InlineSvg'
import floorSeat from '../../../../../../assets/svgs/theatre/floorSeat'

const SeatShade = ({
    className,
    top,
    left,
    width,
    height,

}) => (
    <InlineSvg
        {...{
            style: {
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`,
            },
            svgClassName: cx(
                'fillTransition__dimTheatre',
                className
            ),
        }}
    >
        {floorSeat}
    </InlineSvg>
)

SeatShade.propTypes = {
    className: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default memo(SeatShade)
