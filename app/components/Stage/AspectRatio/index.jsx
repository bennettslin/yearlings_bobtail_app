import { cloneElement, memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    const {
        stageStore: {
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight
        }
    } = state

    return {
        stageTop,
        stageLeft,
        stageWidth,
        stageHeight
    }
}

const AspectRatio = ({
    stageTop,
    stageLeft,
    stageWidth,
    stageHeight,
    children

}) => cloneElement(
    children,
    {
        style: {
            top: `${stageTop}px`,
            left: `${stageLeft}px`,
            width: `${stageWidth}px`,
            height: `${stageHeight}px`
        }
    }
)

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
