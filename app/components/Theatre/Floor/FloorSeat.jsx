import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {

    /**
     * How close the seat is to the centre. Centre seat index is 0. Left seats
     * have negative indices, right seats have positive indices.
     */
    chairIndex: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,

    /**
     * TODO: Keeping these values, even though we are rendering ellipses
     * instead of rects as placeholders for now. We may very well need them
     * again.
     */
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const FloorSeat = ({

    chairIndex,
    rowIndex,
    top,
    left,
    width,
    height

}) => {

    const
        ellipseCx = left + width / 2,
        ellipseCy = top + height / 2,
        ellipseRx = width / 2,
        ellipseRy = height / 2,

        chairIndexString = chairIndex < 0 ?
            `n${chairIndex * -1}` : chairIndex

    return (
        <g className={cx(
            'FloorSeat',
            chairIndexString
        )}>
            <ellipse
                className="FloorSeat__lit"
                cx={ellipseCx}
                cy={ellipseCy}
                rx={ellipseRx}
                ry={ellipseRy}
            />
            <ellipse
                className="FloorSeat__base"
                cx={ellipseCx + chairIndex * 0.3}
                cy={ellipseCy + rowIndex * 0.2}
                rx={ellipseRx}
                ry={ellipseRy}
            />
            <ellipse
                className="FloorSeat__shaded"
                cx={ellipseCx + chairIndex}
                cy={ellipseCy + rowIndex}
                rx={ellipseRx}
                ry={ellipseRy}
            />
        </g>
    )
}

FloorSeat.propTypes = propTypes

export default FloorSeat
