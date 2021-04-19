import React, { useEffect } from 'react'
import cx from 'classnames'
import TempGlobalAnnotation from './Annotation'
// import TempGlobalAnnotationsCounter from './AnnotationsCounter'
import { getArrayOfLength } from '../../../app/helpers/general'
import './style'

const INTERVALS_COUNT = 5

const TempGlobalAnnotations = () => {
    useEffect(() => {
        logMount('Annotations')
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
            {/* <TempGlobalAnnotationsCounter /> */}
            {getArrayOfLength(INTERVALS_COUNT).map(intervalIndex => (
                <TempGlobalAnnotation
                    {...{
                        key: intervalIndex,
                        intervalIndex,
                    }}
                />
            ))}
        </div>
    )
}

export default TempGlobalAnnotations
