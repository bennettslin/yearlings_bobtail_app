import { getArrayOfCoordinatesForFactoredLengths } from '../helper'
import { SEAT_HEIGHT_TO_WIDTH_RATIO } from '../constants'

export const getSeatingRowCoordinates = ({
    windowWidth,
    stageLeft,
    stageWidth,
    floorHeight

}) => {
    const
        stageCentreFromLeft = stageLeft + (stageWidth / 2),
        firstRowSeatWidth = stageWidth / 9, // Arbitrary value.
        firstRowSeatHeight = firstRowSeatWidth * SEAT_HEIGHT_TO_WIDTH_RATIO,

        rowCoordinatesArray = getArrayOfCoordinatesForFactoredLengths({
            maxCount: 5,

            minLength: floorHeight,
            firstLength: firstRowSeatHeight,

            // Gets wider faster with larger value.
            multiplyFactor: 1.6,

            // Beginning values are closer together with larger value.
            bunchFactor: 1.8,

            // Values are closer together in general when closer to 1.
            overlapRatio: 0.99
        })

    return rowCoordinatesArray.map((rowCoordinates, rowIndex) => {
        const {
                length: rowHeight,
                position: rowTop
            } = rowCoordinates,

            seatWidth = rowHeight / SEAT_HEIGHT_TO_WIDTH_RATIO,

            /**
             * If row is even, have centre seat by offsetting
             * right side with one more half seat, and left
             * side with one less.
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

        return seatsArray.map((seat, seatIndex) => {
            const {
                    length: seatWidth,
                    position: seatLeft
                } = seat,

                chairIndex = seatIndex - centreSeatIndex

            return {
                chairIndex,
                rowIndex,
                top: rowTop,
                left: seatLeft,
                width: seatWidth,
                height: rowHeight
            }
        })
    })
}
