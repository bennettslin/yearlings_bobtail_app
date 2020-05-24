/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import cx from 'classnames'

import AnnotationCards from './AnnotationCards'

import {
    getMetadataForNextGlobalAnnotation,
    getGlobalAnnotationCount,
    getGlobalAnnotationDoneCount
} from '../../album/api/globalAnnotation'
import {
    getTitleForAnnotation,
    getCardsForAnnotation
} from '../../../app/album/api/annotations'

import { getArrayOfLength } from '../../../app/helpers/general'
import { removeLoadingIndicator } from '../../../app/utils/browser'

const INTERVALS_COUNT = 4

import './style.scss'

const TempGlobalAnnotationsCounter = () => (
    <div className="TempGlobalAnnotationsCounter">
        <div className="TempGlobalAnnotation__header">
            {getGlobalAnnotationDoneCount()} / {getGlobalAnnotationCount()} done!
        </div>
    </div>
)

const TempGlobalAnnotation = ({ intervalIndex }) => {

    const {
        songIndex,
        annotationIndex,
        globalIndex

    } = getMetadataForNextGlobalAnnotation({
        intervalIndex,
        count: INTERVALS_COUNT
    })

    if (!songIndex || !annotationIndex) {
        return null
    }

    const
        annotationTitle = getTitleForAnnotation(songIndex, annotationIndex),
        annotationCards = getCardsForAnnotation(songIndex, annotationIndex)

    return (
        <div className="TempGlobalAnnotation">
            {/* {true && JSON.stringify(annotationObject)} */}

            <div className="TempGlobalAnnotation__header">
                {globalIndex}. {annotationTitle}
            </div>

            <AnnotationCards {...{ cards: annotationCards }} />
        </div>
    )
}

class TempGlobalAnnotations extends PureComponent {

    componentDidMount() {
        logMount('Annotations')
        removeLoadingIndicator()
    }

    render() {
        return (
            <div
                {...{
                    className: cx(
                        'TempGlobalAnnotations',
                        'PtSansNarrow'
                    )
                }}
            >
                <TempGlobalAnnotationsCounter />
                {getArrayOfLength(INTERVALS_COUNT).map(intervalIndex => (
                    <TempGlobalAnnotation
                        {...{
                            key: intervalIndex,
                            intervalIndex
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default TempGlobalAnnotations
