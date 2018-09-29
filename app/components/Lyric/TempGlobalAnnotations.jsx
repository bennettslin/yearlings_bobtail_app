import React, { Component } from 'react'
import cx from 'classnames'

import {
    getAnnotationObject,
    getGlobalAnnotationObject
} from 'helpers/dataHelper'

const TempGlobalAnnotation = ({
    globalAnnotationIndex
}) => {
    const
        {
            songIndex,
            annotationIndex
        } = getGlobalAnnotationObject(
            globalAnnotationIndex
        ),
        annotationObject = getAnnotationObject(
            songIndex,
            annotationIndex
        )

    return (
        <div>
            {JSON.stringify(annotationObject, null, 3)}
        </div>
    )
}

class TempGlobalAnnotations extends Component {

    static propTypes = {}

    render() {

        return (
            <div
                className={cx(
                    'TempGlobalAnnotations'
                )}
            >
                <TempGlobalAnnotation
                    {...{
                        globalAnnotationIndex: 99
                    }}
                />
            </div>
        )
    }
}


export default TempGlobalAnnotations
