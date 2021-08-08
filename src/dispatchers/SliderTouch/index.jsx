import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VerseDispatcher from '../Verse'
import { updateSliderStore } from '../../redux/slider/action'
import { getClientX, getElementRatioForClientX } from '../../helpers/dom'
import { getVerseIndexforRatio } from '../../helpers/verse'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue,
} from '../../redux/selected/selector'
import {
    mapSliderLeft,
    mapSliderWidth,
    mapIsSliderMoving,
    mapIsSliderTouched,
    mapSliderVerseIndex,
} from '../../redux/slider/selector'
import { mapCanSliderMount } from '../../redux/viewport/selector'

const SliderTouchDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        dispatchVerse = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        sliderLeft = useSelector(mapSliderLeft),
        sliderWidth = useSelector(mapSliderWidth),
        sliderVerseIndex = useSelector(mapSliderVerseIndex),
        isSliderMoving = useSelector(mapIsSliderMoving),
        isSliderTouched = useSelector(mapIsSliderTouched)

    timeoutRef.current = isSliderTouched && !isSliderMoving
    const _handleTouchedNotMoving = () => {
        if (timeoutRef.current) {
            dispatch(updateSliderStore({ isSliderMoving: true }))
        }
    }

    const _touchSliderBegin = (
        {
            left: sliderLeft,
            width: sliderWidth,
        },
        clientX,
    ) => {
        const sliderRatio = getElementRatioForClientX({
            clientX,
            elementLeft: sliderLeft,
            elementWidth: sliderWidth,
        })

        dispatch(updateSliderStore({
            isSliderTouched: true,
            sliderLeft,
            sliderWidth,
            sliderVerseIndex: getVerseIndexforRatio(
                selectedSongIndex,
                sliderRatio,
            ),
        }))

        /**
         * If the move doesn't happen for a while, we recognise that it is
         * moving anyway for styling purposes.
         */
        setTimeout(_handleTouchedNotMoving, 125)
    }

    // TODO: These can easily just be a single method.
    const dispatchTouchBegin = (e, sliderElement) => {
        // Can't be handled in logue.
        if (isSelectedLogue) {
            return
        }

        const clientX = getClientX(e),
            clientRect = sliderElement.getBoundingClientRect()

        if (Number.isFinite(clientX)) {
            _touchSliderBegin(
                clientRect,
                clientX,
            )
        }
    }

    const _touchBodyMove = (clientX) => {
        const
            sliderRatio = getElementRatioForClientX({
                clientX,
                elementLeft: sliderLeft,
                elementWidth: sliderWidth,
            }),

            nextVerseIndex = getVerseIndexforRatio(
                selectedSongIndex,
                sliderRatio,
            )

        // For better performance, only set in Redux upon actual change.
        if (!isSliderMoving) {
            dispatch(updateSliderStore({ isSliderMoving: true }))
        }
        if (nextVerseIndex !== sliderVerseIndex) {
            dispatch(updateSliderStore({
                sliderVerseIndex: nextVerseIndex,
            }))
        }
    }

    // TODO: These can easily just be a single method.
    const dispatchTouchMove = e => {
        if (isSliderTouched) {
            const clientX = getClientX(e)

            if (Number.isFinite(clientX)) {
                _touchBodyMove(clientX)
            }
        }
    }

    const dispatchTouchEnd = () => {
        if (isSliderTouched) {
            dispatchVerse.current({
                scrollLog: 'Slider selected',
                verseIndex: sliderVerseIndex,
            })

            // Reset slider state.
            dispatch(updateSliderStore())
            return true
        }

        return false
    }

    useImperativeHandle(ref, () => ({
        begin: dispatchTouchBegin,
        move: dispatchTouchMove,
        end: dispatchTouchEnd,
    }))
    return (
        <VerseDispatcher {...{ ref: dispatchVerse }} />
    )
})

const SliderTouchDispatcherContainer = forwardRef((props, ref) => {
    const canSliderMount = useSelector(mapCanSliderMount)

    return canSliderMount && (
        <SliderTouchDispatcher {...{ ref }} />
    )
})

export default SliderTouchDispatcherContainer
