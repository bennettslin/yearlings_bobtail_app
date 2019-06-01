import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg'

const propTypes = {
    className: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    viewBoxWidth: PropTypes.number.isRequired,
    viewBoxHeight: PropTypes.number.isRequired,
    children: PropTypes.node
}

const PresenceSvg = memo(({
    className,
    x,
    y,
    viewBoxWidth,
    viewBoxHeight,
    children

}) => {

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

                    // Illustrator artboards are 1623 by 1082.
                    width: `${(viewBoxWidth / 1623 * 100).toFixed(2)}%`,
                    height: `${(viewBoxHeight / 1082 * 100).toFixed(2)}%`
                },
                viewBoxWidth,
                viewBoxHeight
            }}
        >
            {children}
        </Svg>
    )
})

PresenceSvg.propTypes = propTypes

export default PresenceSvg
