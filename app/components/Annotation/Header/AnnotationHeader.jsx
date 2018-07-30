import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationTitle from './AnnotationTitle'
import AnnotationAccess from '../AnnotationAccess'

const propTypes = {
    // From parent.
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,
    annotationTitle: PropTypes.string.isRequired,
    accessibleAnnotationAnchorsLength: PropTypes.number,
    handleTitleClick: PropTypes.func
},

AnnotationHeader = ({

    inCarousel,
    isAccessed,
    isSelected,
    annotationDotKeys,
    annotationTitle,
    accessibleAnnotationAnchorsLength,
    handleTitleClick

}) => (
    <div className={cx(
        'AnnotationHeader',

        // Annotation header needs to be hideable in carousel.
        inCarousel && 'AnnotationHeaderAnimatable',

        'absoluteFullContainer'
    )}>
        <AnnotationTitle
            {...{
                isAccessed,
                isSelected,
                annotationDotKeys,
                annotationTitle,
                handleTitleClick
            }}
        />
        <AnnotationAccess
            {...{
                isSelected,
                accessibleAnnotationAnchorsLength
            }}
        />
    </div>
)

AnnotationHeader.propTypes = propTypes

export default AnnotationHeader
