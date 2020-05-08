/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import cx from 'classnames'

import AnnotationCards from './AnnotationCards'

import {
    getNextGlobalAnnotationForInterval,
    getGlobalAnnotationsCount,
    getGlobalAnnotationsDoneCount
} from '../../../app/album/api/admin'

import { getArrayOfLength } from '../../../app/helpers/general'

import { removeLoadingIndicator } from '../../../app/utils/window'

const INTERVALS_COUNT = 4

import './style.scss'

const TempGlobalAnnotationsCounter = () => (
    <div className="TempGlobalAnnotationsCounter">
        <div className="TempGlobalAnnotation__header">
            {getGlobalAnnotationsDoneCount()} / {getGlobalAnnotationsCount()} done!
        </div>
    </div>
)

const TempGlobalAnnotation = ({ intervalIndex }) => {

    const annotationObject = getNextGlobalAnnotationForInterval({
        intervalIndex,
        count: INTERVALS_COUNT
    })

    if (!annotationObject) {
        return null
    }

    const {
        title,
        cards,
        globalIndex
    } = annotationObject

    return (
        <div className="TempGlobalAnnotation">
            {/* {true && JSON.stringify(annotationObject)} */}

            <div className="TempGlobalAnnotation__header">
                {globalIndex}. {title}
            </div>

            <AnnotationCards {...{ cards }} />
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
