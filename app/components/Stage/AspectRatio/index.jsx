import { cloneElement, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { mapStageDimensionCoordinates } from '../../../redux/stage/selectors'

const AspectRatio = ({ children }) => {
    const
        stageDimensionCoordinates = useSelector(mapStageDimensionCoordinates),
        {
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight
        } = JSON.parse(stageDimensionCoordinates)

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
