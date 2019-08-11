import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from 'modules/InlineSvg'
import floorSeat from 'assets/svgs/theatre/floorSeat'

const propTypes = {
    className: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const SeatShade = ({
    className,
    top,
    left,
    width,
    height

}) => (
    <div
        {...{
            className: cx(
                'abF'
            ),
            style: {
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`
            }
        }}
    >
        <InlineSvg
            {...{
                className: cx(
                    'fillTransition__dimTheatre',
                    className
                ),
                title: 'floor seat'
            }}
        >
            {floorSeat}
        </InlineSvg>
    </div>
)

SeatShade.propTypes = propTypes

export default memo(SeatShade)
