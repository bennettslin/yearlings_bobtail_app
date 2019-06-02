import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg'

// Illustrator artboards are 1623 by 1082.
const
    ARTBOARD_WIDTH = 1623,
    ARTBOARD_HEIGHT = 1082

const defaultProps = {
    scaleFactor: 1
}

const propTypes = {
    className: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    scaleFactor: PropTypes.number,
    viewBoxWidth: PropTypes.number.isRequired,
    viewBoxHeight: PropTypes.number.isRequired,
    children: PropTypes.node
}

const PresenceSvg = ({
    className,
    x,
    y,
    scaleFactor,
    viewBoxWidth,
    viewBoxHeight,
    children

}) => {
    const
        adjustedWidth = viewBoxWidth * scaleFactor / ARTBOARD_WIDTH * 100,
        adjustedHeight = viewBoxHeight * scaleFactor / ARTBOARD_HEIGHT * 100

    return (
        <Svg
            {...{
                className: cx(
                    className,
                    'PresenceSvg'
                ),
                style: {
                    left: `${x.toFixed(2)}%`,
                    top: `${y.toFixed(2)}%`,
                    width: `${adjustedWidth.toFixed(2)}%`,
                    height: `${adjustedHeight.toFixed(2)}%`
                },
                viewBoxWidth,
                viewBoxHeight
            }}
        >
            {children}
        </Svg>
    )
}

PresenceSvg.defaultProps = defaultProps
PresenceSvg.propTypes = propTypes

export default memo(PresenceSvg)
