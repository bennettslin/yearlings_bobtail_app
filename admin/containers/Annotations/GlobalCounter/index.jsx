import React from 'react'
import cx from 'classnames'
import {
    getGlobalAnnotationCount,
    getGlobalAnnotationDoneCount,
} from '../../../api/album/globalAnnotation'

const GlobalCounter = () => {
    const
        totalCount = getGlobalAnnotationCount(),
        todoCount = totalCount - getGlobalAnnotationDoneCount(),
        percentage = parseInt(
            todoCount / totalCount * 100,
        )
    return (
        <div
            {...{
                className: cx(
                    'TempGlobalCounter',
                    'textShadow__light',
                    'Rancho',
                ),
            }}
        >
            {todoCount} / {totalCount} ({percentage}%)
        </div>
    )
}

export default GlobalCounter
