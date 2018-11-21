import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from '../../Svg'
import FloorSeat from './Seat'

import { getArrayOfCoordinatesForFactoredLengths } from 'helpers/generalHelper'

import { SEAT_HEIGHT_TO_WIDTH_RATIO } from '../constants'

const mapStateToProps = ({
    renderStore: { canTheatreRender },
    deviceStore: {
        windowWidth,
        stageLeft,
        stageWidth,
        floorHeight
    }
}) => ({
    canTheatreRender,
    windowWidth,
    stageLeft,
    stageWidth,
    floorHeight
})

class Floor extends Component {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,
        windowWidth: PropTypes.number.isRequired,
        stageLeft: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        floorHeight: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    render() {
        const {
                windowWidth,
                stageLeft,
                stageWidth,
                floorHeight
            } = this.props,

            stageCentreFromLeft = stageLeft + (stageWidth / 2),

            firstRowSeatWidth = stageWidth / 9, // Arbitrary value.
            firstRowSeatHeight = firstRowSeatWidth * SEAT_HEIGHT_TO_WIDTH_RATIO,

            seatingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
                minLength: floorHeight,
                firstLength: firstRowSeatHeight,

                // Gets wider faster with larger value.
                multiplyFactor: 1.275,

                // Beginning values are closer together with larger value.
                bunchFactor: 1.55,

                // Values are closer together in general when closer to 1.
                overlapRatio: 0.9925
            })

        return (
            <div
                {...{
                    className: cx(
                        'Floor',
                        'Theatre__field'
                    ),
                    style: {
                        height: `${floorHeight}px`
                    }
                }}
            >
                <Svg
                    className={cx(
                        'Theatre__subfield'
                    )}
                    viewBoxWidth={windowWidth}
                    viewBoxHeight={floorHeight}
                >
                    {seatingRowCoordinates.map((currentRowCoordinates, rowIndex) => {
                        const {
                                length: rowHeight,
                                position: rowTop
                            } = currentRowCoordinates,

                            seatWidth = rowHeight / SEAT_HEIGHT_TO_WIDTH_RATIO,

                            /**
                             * If row is even, have centre seat by offsetting right
                             * side with one more half seat, and left side with one
                             * less.
                             */
                            isEven = rowIndex % 2 === 0,
                            seatWidthOffset = isEven ? seatWidth / 2 : 0,
                            maxSeats = 10, // Arbitrary for now.

                            leftSeatsArray =
                                getArrayOfCoordinatesForFactoredLengths({
                                    minLength:
                                        stageCentreFromLeft
                                        - seatWidthOffset,
                                    firstLength: seatWidth,
                                    maxCount: maxSeats,

                                    // Start from centre, and go towards left.
                                    reversePosition: true
                                }),

                            rightSeatsArray =
                                getArrayOfCoordinatesForFactoredLengths({
                                    minLength:
                                        windowWidth
                                        - stageCentreFromLeft
                                        + seatWidthOffset,
                                    firstLength: seatWidth,
                                    maxCount: maxSeats + (isEven ? 1 : 0),
                                    positionOffset:
                                        stageCentreFromLeft
                                        - seatWidthOffset
                                }),

                            // Combine left and right side seating.
                            seatsArray = leftSeatsArray.concat(rightSeatsArray),

                            centreSeatIndex =
                                leftSeatsArray.length - (isEven ? 0 : 0.5)

                        return (
                            <g
                                key={rowIndex}
                                className={`FloorSeats__${rowIndex}`}
                            >
                                {seatsArray.map((seat, seatIndex) => {

                                    const {
                                            length: seatWidth,
                                            position: seatLeft
                                        } = seat,

                                        chairIndex =
                                            seatIndex - centreSeatIndex

                                    return (
                                        <FloorSeat
                                            key={chairIndex}
                                            {...{
                                                chairIndex,
                                                rowIndex,
                                                top: rowTop,
                                                left: seatLeft,
                                                width: seatWidth,
                                                height: rowHeight
                                            }}
                                        />
                                    )
                                })}
                            </g>
                        )
                    })}
                </Svg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Floor)
