import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

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
    children

}) => {
    return (
        <div
            {...{
                className: cx(
                    'AspectRatio',
                    'abF'
                ),
                style: {
                    top: `${stageTop}px`,
                    left: `${stageLeft}px`,
                    width: `${stageWidth}px`,
                    height: `${stageHeight}px`
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
    children: PropTypes.any.isRequired
}

export default connect(mapStateToProps)(memo(AspectRatio))
