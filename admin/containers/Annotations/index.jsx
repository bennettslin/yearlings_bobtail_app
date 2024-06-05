import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import scrollIntoView from 'scroll-into-view'
import TodoHeaders from './Headers'
import TodoColumns from './Columns'
import TodoCounter from './Counter'
import TextJustifiedDispatcher from '../../../src/dispatchers/TextJustified'
import {
    mapSelectedAnnotationIndex,
    mapSelectedSongIndex,
} from '../../../src/redux/selected/selector'
import { mapIsTextJustified } from '../../../src/redux/toggle/selector'
import { getKeyName } from '../../../src/managers/Key/helper'
import { getBoolFromStorage, setBoolInStorage } from '../../../src/utils/storage'
import { CAROUSEL_TOGGLE_KEY, TEXT_JUSTIFIED_KEY } from '../../../src/constants/access'
import './style'

const SHOW_ALL_ANNOTATIONS_KEY = 'showAllAnnotations'

const TodoAnnotations = () => {
    const
        focusElement = useRef(),
        dispatchTextJustified = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [showAll, setShowAll] = useState(getBoolFromStorage(SHOW_ALL_ANNOTATIONS_KEY)),
        isTextJustified = useSelector(mapIsTextJustified)

    const toggleShowTodos = () => {
        setShowAll(!showAll)
        setBoolInStorage(SHOW_ALL_ANNOTATIONS_KEY, !showAll)
    }

    const onKeyDown = e => {
        const keyName = getKeyName(e)

        switch (keyName) {
            case CAROUSEL_TOGGLE_KEY:
                toggleShowTodos()
                break
            case TEXT_JUSTIFIED_KEY:
                dispatchTextJustified.current()
                break
        }
    }

    useEffect(() => {
        logMount('Annotations')

        if (selectedSongIndex && selectedAnnotationIndex) {
            const element = document.querySelector(
                `.TodoAnnotation-${selectedSongIndex}-${selectedAnnotationIndex}`,
            )

            setTimeout(() => {
                scrollIntoView(element, { time: 100 })
            }, 1000)
        }

        focusElement?.current.focus()
    }, [])

    return (
        <div
            {...{
                ref: focusElement,
                className: cx(
                    'TodoAnnotations',
                    isTextJustified && 'textJustified',
                    'font__text',
                ),
                tabIndex: -1,
                onKeyDown,
            }}
        >
            <TodoColumns {...{ showAll }} />
            <TodoHeaders {...{ showAll }} />
            <TodoCounter {...{ toggleShowTodos }} />
            <TextJustifiedDispatcher {...{ ref: dispatchTextJustified }} />
        </div>
    )
}

export default TodoAnnotations
