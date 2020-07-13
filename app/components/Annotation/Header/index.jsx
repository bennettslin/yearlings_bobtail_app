import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AnnotationTitle from '../Title'
import './style'

const AnnotationHeader = ({
    inCarousel,
    isAccessed,
    isSelected,
    annotationIndex

}) => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
        <div
            {...{
                className: cx(
                    'AnnotationHeader',
                    // Annotation header needs to be hideable in carousel.
                    inCarousel && 'AnnotationHeaderAnimatable',
                    'abF'
                )
            }}
        >
            <AnnotationTitle
                {...{
                    isAccessed,
                    isSelected,
                    annotationIndex
                }}
            />
        </div>
    )
}

AnnotationHeader.propTypes = {
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired
}

export default memo(AnnotationHeader)
