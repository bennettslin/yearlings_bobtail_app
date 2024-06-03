import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import scrollIntoView from 'scroll-into-view'
import GlobalCounter from './GlobalCounter'
import GlobalHeader from './GlobalHeader'
import GlobalColumns from './GlobalColumns'
import {
    mapSelectedAnnotationIndex,
    mapSelectedSongIndex,
} from '../../../src/redux/selected/selector'
import { mapIsTextJustified } from '../../../src/redux/toggle/selector'
import { getBoolFromStorage, setBoolInStorage } from '../../../src/utils/storage'
import './style'

const SHOW_ALL_ANNOTATIONS_KEY = 'showAllAnnotations'

const TempGlobalAnnotations = () => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [showAll, setShowAll] = useState(getBoolFromStorage(SHOW_ALL_ANNOTATIONS_KEY)),
        isTextJustified = useSelector(mapIsTextJustified)

    const toggleShowTodos = () => {
        setShowAll(!showAll)
        setBoolInStorage(SHOW_ALL_ANNOTATIONS_KEY, !showAll)
    }

    useEffect(() => {
        logMount('Annotations')

        if (selectedSongIndex && selectedAnnotationIndex) {
            const element = document.querySelector(
                `.TempGlobalAnnotation-${selectedSongIndex}-${selectedAnnotationIndex}`,
            )

            setTimeout(() => {
                scrollIntoView(element, { time: 100 })
            }, 1000)
        }
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'TempGlobalAnnotations',
                    isTextJustified && 'textJustified',
                    'font__text',
                ),
            }}
        >
            <GlobalColumns {...{ showAll }} />
            <GlobalHeader {...{ showAll }} />
            <GlobalCounter {...{ toggleShowTodos }} />
        </div>
    )
}

export default TempGlobalAnnotations
