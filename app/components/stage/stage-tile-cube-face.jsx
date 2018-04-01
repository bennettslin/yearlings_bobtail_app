import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
    className: PropTypes.string,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

const StageTileCubeFace = ({

    className,
    top,
    left,
    width,
    height

}) => {

    return (
        <rect
            className={classnames(
                'cube-face',
                className
            )}
            x={left}
            y={top}
            width={width}
            height={height}
        />
    )
}

StageTileCubeFace.propTypes = propTypes

export default StageTileCubeFace
