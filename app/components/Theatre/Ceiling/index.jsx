// Section to show the stage illustrations.
import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CeilingRafter from './Rafter'
import { getRaftersRowCoordinates } from './helper'
import {
    mapWindowWidth,
    mapProsceniumDimensionCoordinates,
    mapCeilingHeight
} from '../../../redux/viewport/selector'
import './style'

const Ceiling = () => {
    const {
            prosceniumLeft,
            prosceniumWidth
        } = JSON.parse(useSelector(mapProsceniumDimensionCoordinates)),

        ceilingHeight = useSelector(mapCeilingHeight),
        windowWidth = useSelector(mapWindowWidth),

        raftersRowCoordinates = getRaftersRowCoordinates({
            prosceniumLeft,
            prosceniumWidth,
            ceilingHeight
        })

    return (
        <div
            {...{
                className: cx(
                    'Ceiling',
                    'Theatre__field'
                ),
                style: {
                    width: `${windowWidth}px`,
                    height: `${ceilingHeight}px`
                }
            }}
        >
            {raftersRowCoordinates.map(({
                top,
                left,
                width,
                height
            }, index) => (
                <CeilingRafter
                    {...{
                        key: index,
                        top,
                        left,
                        width,
                        height
                    }}
                />
            ))}
        </div>
    )
}

export default Ceiling
