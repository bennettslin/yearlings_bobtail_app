import { useEffect, useRef, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsWindowResizeDone } from '../../redux/entrance/action'
import {
    updateViewportStore,
    updateViewportPitchPageStore,
} from '../../redux/viewport/action'
import { getWindowDimensions } from '../../helpers/resize/device'
import { getWindow } from '../../utils/browser'
import {
    mapWindowWidth,
    mapWindowHeight,
} from '../../redux/viewport/selector'

const ResizeManager = ({
    isInPitch,
    getResizeContainerElement,
}) => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        windowWidth = useSelector(mapWindowWidth),
        windowHeight = useSelector(mapWindowHeight),
        [windowResizeTimeoutId, setWindowResizeTimeoutId] = useState(-1)

    timeoutRef.current = {
        windowWidth,
        windowHeight,
        windowResizeTimeoutId,
    }

    const beginEnterTransition = () => {
        const {
            windowHeight,
            windowWidth,
        } = getWindowDimensions(getResizeContainerElement())

        if (isInPitch) {
            dispatch(updateViewportPitchPageStore({
                windowWidth,
                windowHeight,
            }))
        } else {
            dispatch(updateViewportStore({
                windowWidth,
                windowHeight,
            }))
        }

        dispatch(updateIsWindowResizeDone(true))
    }

    const beginExitTransition = () => {
        /**
         * This check is needed because iOS will arbitrarily set window height
         * based on whether browser header and footer are shown. So we'll use
         * the height of the root element to be the official window height.
         * Doing this in all cases for now, not just iOS, for simplicity.
         */
        const
            {
                windowHeight: nextHeight,
                windowWidth: nextWidth,
            } = getWindowDimensions(getResizeContainerElement())

        if (
            nextHeight !== timeoutRef.current.windowHeight ||
            nextWidth !== timeoutRef.current.windowWidth
        ) {
            dispatch(updateIsWindowResizeDone())

            // Clear previous timeout.
            clearTimeout(timeoutRef.current.windowResizeTimeoutId)

            // Wait for window resize to finish.
            setWindowResizeTimeoutId(setTimeout(
                beginEnterTransition, 250,
            ))
        }
    }

    useEffect(() => {
        getWindow().onresize = beginExitTransition
        return () => {
            getWindow().onresize = null
        }
    }, [])

    return null
}

ResizeManager.propTypes = {
    isInPitch: PropTypes.bool,
    getResizeContainerElement: PropTypes.func.isRequired,
}

export default memo(ResizeManager)
