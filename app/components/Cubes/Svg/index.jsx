import React, { memo } from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
    viewBoxWidth: 100,
    viewBoxHeight: 100
}

const propTypes = {
    className: PropTypes.string,
    zIndex: PropTypes.number,
    viewBoxWidth: PropTypes.number,
    viewBoxHeight: PropTypes.number,
    children: PropTypes.node
}

const CubeSvg = ({
    className,
    zIndex,
    viewBoxWidth,
    viewBoxHeight,
    children

}) => {

    const
        safeViewBoxWidth =
            viewBoxWidth > 0 ?
                viewBoxWidth :
                0,
        safeViewBoxHeight =
            viewBoxHeight > 0 ?
                viewBoxHeight :
                0

    return (
        <svg
            {...{
                className,
                ...safeViewBoxWidth && safeViewBoxHeight && {
                    viewBox: `0 0 ${safeViewBoxWidth} ${safeViewBoxHeight}`
                },
                xmlns: 'http://www.w3.org/2000/svg',
                preserveAspectRatio: 'none',
                style: { zIndex }
            }}
        >
            {children}
        </svg>
    )
}

CubeSvg.defaultProps = defaultProps
CubeSvg.propTypes = propTypes

export default memo(CubeSvg)
