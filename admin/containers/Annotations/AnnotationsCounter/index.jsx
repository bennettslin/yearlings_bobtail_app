import React from 'react'
import {
    getGlobalAnnotationCount,
    getGlobalAnnotationDoneCount,
} from '../../../api/album/globalAnnotation'

const TempGlobalAnnotationsCounter = () => {
    const percentageDone = parseInt(
        getGlobalAnnotationDoneCount() / getGlobalAnnotationCount() * 100,
    )
    return (
        <div className="TempGlobalAnnotationsCounter">
            <div className="TempGlobalAnnotation__header">
                {getGlobalAnnotationDoneCount()} / {getGlobalAnnotationCount()} ({percentageDone}%) done!
            </div>
        </div>
    )
}

export default TempGlobalAnnotationsCounter
