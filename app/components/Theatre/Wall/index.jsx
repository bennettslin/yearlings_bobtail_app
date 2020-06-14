import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import WallBalcony from './Balcony'
import {
    getBalconyColumnCoordinates,
    getWallWidth
} from './helper'
import {
    mapWindowWidth,
    mapWindowHeight,
    mapProsceniumDimensionCoordinates,
    mapCeilingHeight
} from '../../../redux/viewport/selector'
import './style'

const Wall = ({ isRight }) => {
    const {
            prosceniumLeft,
            prosceniumWidth,
            prosceniumHeight
        } = JSON.parse(useSelector(mapProsceniumDimensionCoordinates)),

        ceilingHeight = useSelector(mapCeilingHeight),
        windowWidth = useSelector(mapWindowWidth),
        windowHeight = useSelector(mapWindowHeight),

        wallWidth = getWallWidth({
            isRight,
            prosceniumLeft,
            prosceniumWidth,
            windowWidth
        }),

        balconyColumnCoordinates = getBalconyColumnCoordinates({
            isRight,
            windowWidth,
            prosceniumLeft,
            prosceniumWidth,
            prosceniumHeight,
            ceilingHeight
        })

    return (
        <div
            {...{
                className: cx(
                    'Wall',
                    'Theatre__field'
                ),
                style: {
                    width: `${wallWidth}px`,
                    height: `${windowHeight}`,

                    ...isRight && {
                        left: 'auto',
                        right: 0
                    }
                }
            }}
        >
            {balconyColumnCoordinates.map(({
                top,
                left,
                width,
                height
            }, index) => (
                <WallBalcony
                    {...{
                        key: index,
                        top,
                        left,
                        width,
                        height,
                        isLeft: !isRight
                    }}
                />
            ))}
        </div>
    )
}

Wall.propTypes = {
    isRight: PropTypes.bool
}

export default memo(Wall)
