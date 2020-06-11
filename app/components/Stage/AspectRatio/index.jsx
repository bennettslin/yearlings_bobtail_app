import { cloneElement, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { mapStageDimensionCoordinates } from '../../../redux/viewport/selectors'

const AspectRatio = ({ children }) => {
    const {
        stageTop,
        stageLeft,
        stageWidth,
        stageHeight
    } = JSON.parse(useSelector(mapStageDimensionCoordinates))

    return cloneElement(
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
}

AspectRatio.propTypes = {
    children: PropTypes.any.isRequired
}

export default memo(AspectRatio)
