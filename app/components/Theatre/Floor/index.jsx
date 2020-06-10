import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import FloorSeat from './Seat'
import { getSeatingRowCoordinates } from './helper'
import { mapProsceniumDimensionCoordinates } from '../../../redux/proscenium/selectors'
import { mapFloorHeight } from '../../../redux/theatre/selectors'
import { mapWindowWidth } from '../../../redux/viewport/selectors'
import './style'

const Floor = () => {
    const {
            prosceniumLeft,
            prosceniumWidth
        } = JSON.parse(useSelector(mapProsceniumDimensionCoordinates)),

        floorHeight = useSelector(mapFloorHeight),
        windowWidth = useSelector(mapWindowWidth),

        seatingRowCoordinates = getSeatingRowCoordinates({
            windowWidth,
            prosceniumLeft,
            prosceniumWidth,
            floorHeight
        })

    return (
        <div
            {...{
                className: cx(
                    'Floor',
                    'Theatre__field'
                ),
                style: {
                    width: `${windowWidth}px`,
                    height: `${floorHeight}px`
                }
            }}
        >
            {seatingRowCoordinates.map((seatsArray, rowIndex) => (
                <div
                    {...{
                        key: rowIndex,
                        className: `FloorSeats__${rowIndex}`
                    }}
                >
                    {seatsArray.map(({
                        chairIndex,
                        rowIndex,
                        top,
                        left,
                        width,
                        height
                    }) => (
                        <FloorSeat
                            {...{
                                key: chairIndex,
                                chairIndex,
                                rowIndex,
                                top,
                                left,
                                width,
                                height
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Floor
