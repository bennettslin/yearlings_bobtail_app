import { cloneElement, memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    mapStageTop,
    mapStageLeft,
    mapStageWidth,
    mapStageHeight
} from '../../../redux/stage/selectors'

const mapStateToProps = state => {
    const
        stageTop = mapStageTop(state),
        stageLeft = mapStageLeft(state),
        stageWidth = mapStageWidth(state),
        stageHeight = mapStageHeight(state)

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
