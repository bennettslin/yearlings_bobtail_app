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
    mapProsceniumLeft,
    mapProsceniumWidth,
    mapProsceniumHeight
} from '../../../redux/proscenium/selectors'
import { mapCeilingHeight } from '../../../redux/theatre/selectors'
import {
    mapWindowWidth,
    mapWindowHeight
} from '../../../redux/viewport/selectors'
import './style'

const Wall = ({ isRight }) => {
    const
        prosceniumLeft = useSelector(mapProsceniumLeft),
        prosceniumWidth = useSelector(mapProsceniumWidth),
        prosceniumHeight = useSelector(mapProsceniumHeight),
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
