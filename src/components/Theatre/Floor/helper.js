import { getArrayOfCoordinatesForFactoredLengths } from '../helper'

const SEAT_HEIGHT_TO_WIDTH_RATIO = 1.5 // How tall is the seat.

const _zipTwoArrays = (leftArray, rightArray) => {

    const
        zippedArray = [],
        minLength = Math.min(leftArray.length, rightArray.length)

    // Alternate between left and right arrays.
    for (let i = 0; i < minLength; i++) {
        zippedArray.push(
            rightArray[i],
            leftArray[i],
        )
    }

    // Push the remainder of whichever was the lengthier array.
    zippedArray.push(
        ...rightArray.slice(minLength),
        ...leftArray.slice(minLength),
    )

    return zippedArray
}

export const getSeatingRowCoordinates = ({
    windowWidth,
    prosceniumLeft,
    prosceniumWidth,
    floorHeight,

}) => {
    const
        stageCentreFromLeft = prosceniumLeft + (prosceniumWidth / 2),
        firstRowSeatWidth = prosceniumWidth / 7, // Arbitrary value.
        firstRowSeatHeight = firstRowSeatWidth * SEAT_HEIGHT_TO_WIDTH_RATIO,

        rowCoordinatesArray = getArrayOfCoordinatesForFactoredLengths({
            maxCount: 8,

            minLength: floorHeight,
            firstLength: firstRowSeatHeight,

            // Gets wider faster with larger value.
            multiplyFactor: 1.5,

            // Beginning values are closer together with larger value.
            bunchFactor: 2.2,

            // Values are closer together in general when closer to 1.
            overlapRatio: 0.99,
        })

    return rowCoordinatesArray.map((rowCoordinates, rowIndex) => {
        const {
                length: rowHeight,
                position: rowTop,
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
                    reversePosition: true,
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
                        - seatWidthOffset,
                }),

            seatsArray = _zipTwoArrays(
                leftSeatsArray,
                rightSeatsArray,

            // Reverse so that seats in centre are rendered last.
            ).reverse()

        return seatsArray.map(seat => {
            const {
                    length: seatWidth,
                    position: seatLeft,
                    index,
                } = seat,

                chairIndex =
                    isEven ?
                        index :
                        index + 0.5

            return {
                chairIndex,
                rowIndex,
                top: rowTop,
                left: seatLeft,
                width: seatWidth,
                height: rowHeight,
            }
        })
    })
}
