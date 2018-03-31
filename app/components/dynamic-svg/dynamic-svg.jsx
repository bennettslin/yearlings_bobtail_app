// Component to safely render an svg by ensuring that all values are valid.

import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    className: PropTypes.any,
    viewBoxWidth: PropTypes.number.isRequired,
    viewBoxHeight: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
}

const DynamicSvg = ({

    className,
    viewBoxWidth,
    viewBoxHeight,
    children

}) => {

    const safeViewBoxWidth = viewBoxWidth > 0 ? viewBoxWidth : 0,
        safeViewBoxHeight = viewBoxHeight > 0 ? viewBoxHeight : 0

    return (
        <svg
            className={className}
            viewBox={`0 0 ${safeViewBoxWidth} ${safeViewBoxHeight}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    )
}

DynamicSvg.propTypes = propTypes

export default DynamicSvg
