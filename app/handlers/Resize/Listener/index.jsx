// eslint-disable-next-line object-curly-newline
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ResizeDispatcher from '../Dispatcher'
import { resetTheatreEntrance } from '../../../redux/entrance/action'
import { getWindowDimensions } from '../../../helpers/resize/device'
import { getWindow } from '../../../utils/browser'
import {
    mapWindowWidth,
    mapWindowHeight
} from '../../../redux/viewport/selectors'

const ResizeListener = ({ getRootContainerElement }) => {
    const
        dispatch = useDispatch(),
        beginEnterTransition = useRef(),
        windowWidth = useSelector(mapWindowWidth),
        windowHeight = useSelector(mapWindowHeight),
        [windowResizeTimeoutId, setWindowResizeTimeoutId] = useState('')

    const _beginExitTransition = () => {
        dispatch(resetTheatreEntrance())

        // Clear previous timeout.
        clearTimeout(windowResizeTimeoutId)

        // Wait for window resize to finish.
        setWindowResizeTimeoutId(
            setTimeout(beginEnterTransition.current, 250)
        )
    }

    const _beginExitTransitionIfGenuineResize = () => {
        /**
         * This check is needed because iOS will arbitrarily set window height
         * based on whether browser header and footer are shown. So we'll use
         * the height of the root element to be the official window height.
         * Doing this in all cases for now, not just iOS, for simplicity.
         */
        const
            {
                windowHeight: nextHeight,
                windowWidth: nextWidth
            } = getWindowDimensions(getRootContainerElement())

        if (
            nextHeight !== windowHeight ||
            nextWidth !== windowWidth
        ) {
            _beginExitTransition()
        }
    }

    useEffect(() => {
        getWindow().onresize = _beginExitTransitionIfGenuineResize

        return () => {
            getWindow().onresize = null
        }
    }, [windowResizeTimeoutId])

    return (
        <ResizeDispatcher
            {...{
                ref: beginEnterTransition,
                getRootContainerElement
            }}
        />
    )
}

ResizeListener.propTypes = {
    getRootContainerElement: PropTypes.func.isRequired
}

export default ResizeListener
