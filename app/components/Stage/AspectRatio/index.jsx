import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

// TODO: This is dumb. Just make this a better HOC.
const PROSCENIUM_MULTIPLIER = 0.05

const mapStateToProps = ({
    viewportStore: {
        stageTop,
        stageLeft,
        stageWidth,
        stageHeight
    }
}) => ({
    stageTop,
    stageLeft,
    stageWidth,
    stageHeight
})

const AspectRatio = ({
    stageTop,
    stageLeft,
    stageWidth,
    stageHeight,
    isProscenium,
    children

}) => {

    let top = stageTop,
        left = stageLeft,
        width = stageWidth,
        height = stageHeight

    if (isProscenium) {
        const
            widthOffset = PROSCENIUM_MULTIPLIER * stageWidth,
            heightOffset = PROSCENIUM_MULTIPLIER * stageHeight

        top = stageTop - heightOffset
        left = stageLeft - widthOffset
        width = stageWidth + widthOffset * 2
        height = stageHeight + heightOffset * 2
    }

    return (
        <div
            {...{
                className: cx(
                    'AspectRatio',
                    isProscenium &&
                        'AspectRatio__proscenium',
                    'abF'
                ),
                style: {
                    top: `${top}px`,
                    left: `${left}px`,
                    width: `${width}px`,
                    height: `${height}px`
                }
            }}
        >
            {children}
        </div>
    )
}

AspectRatio.propTypes = {
    // Through Redux.
    stageTop: PropTypes.number.isRequired,
    stageLeft: PropTypes.number.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired,

    // From parent.
    isProscenium: PropTypes.bool,
    children: PropTypes.any.isRequired
}

export default connect(mapStateToProps)(memo(AspectRatio))
