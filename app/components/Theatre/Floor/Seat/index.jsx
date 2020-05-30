import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SeatShade from './SeatShade'
import './style'

const propTypes = {
    /**
     * How close the seat is to the centre. Centre seat index is 0. Left seats
     * have negative indices, right seats have positive indices.
     */
    chairIndex: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const SEAT_THICKNESS = 2.5

const FloorSeat = ({
    chairIndex,
    rowIndex,
    top,
    left,
    width,
    height

}) => {

    const
        topFinal = top
            /**
             * Push down a little further so that there is some wiggle room for
             * seats nearer to the ends to come up.
             */
            + height / 2.5
            /**
             * Seats nearer to the ends come up further exponentially.
             */
            - Math.pow(1.35, Math.abs(chairIndex)),

        chairIndexString = chairIndex < 0 ?
            // Prefix with "n" for negative.
            `seat__n${chairIndex * -1}` :
            `seat__${chairIndex}`

    return (
        <div
            {...{
                className: cx(
                    'FloorSeat',
                    chairIndexString
                )
            }}
        >
            <SeatShade
                {...{
                    className: 'floorSeat__lit',
                    top: topFinal,
                    left,
                    width,
                    height
                }}
            />
            <SeatShade
                {...{
                    className: 'floorSeat__shaded',
                    top: topFinal
                        + height
                        * SEAT_THICKNESS
                        * Math.pow(1.25, Math.abs(rowIndex)) * 0.0075,
                    left: left + width * chairIndex * 0.01,
                    width,
                    height
                }}
            />
        </div>
    )
}

FloorSeat.propTypes = propTypes

export default memo(FloorSeat)
