import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'
import { STAGE_Y_PERCENTAGE } from '../../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const Wood = ({

    isFloor,
    stageWidth,
    stageHeight

}) => {

    // Make wood stageHeight just slightly taller than tiles.
    const woodHeight = stageHeight * (STAGE_Y_PERCENTAGE + 2) * 0.01

    return (
        <DynamicSvg
            className={cx(
                'Wood',
                isFloor ? 'Wood__floor' : 'Wood__ceiling'
            )}
            viewBoxWidth={stageWidth}
            viewBoxHeight={woodHeight}
        >
            <rect
                x={0}
                y={0}
                width={stageWidth}
                height={woodHeight}
            />
        </DynamicSvg>
    )
}

Wood.propTypes = propTypes

export default Wood
