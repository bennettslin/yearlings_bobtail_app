/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import cx from 'classnames'

import AnnotationCards from './AnnotationCards'

import { getNextGlobalAnnotationForInterval } from '../../../app/album/api/admin'

import { getArrayOfLength } from 'helpers/general'

import { removeLoadingIndicator } from 'utils/window'

const INTERVALS_COUNT = 4

import './style.scss'

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
                <span>
                    {globalIndex}. {title}
                </span>
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
