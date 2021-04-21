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
} from '../../../app/redux/selected/selector'
import './style'

const TempGlobalAnnotations = () => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        [showTodos, setShowTodos] = useState(false)

    const toggleShowTodos = () => {
        setShowTodos(!showTodos)
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
                    'PtSansNarrow',
                ),
            }}
        >
            <GlobalColumns {...{ showTodos }} />
            <GlobalHeader />
            <GlobalCounter {...{ toggleShowTodos }} />
        </div>
    )
}

export default TempGlobalAnnotations
