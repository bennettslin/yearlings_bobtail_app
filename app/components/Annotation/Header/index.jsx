import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationTitle from '../Title'

const propTypes = {
        // From parent.
        inCarousel: PropTypes.bool,
        isShadow: PropTypes.bool.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired
    },

    AnnotationHeader = memo(({
        inCarousel,
        isShadow,
        isAccessed,
        isSelected,
        annotationIndex

    }) => (
        <div className={cx(
            'AnnotationHeader',

            // Annotation header needs to be hideable in carousel.
            inCarousel && 'AnnotationHeaderAnimatable',

            'absoluteFullContainer'
        )}>
            <AnnotationTitle
                {...{
                    isShadow,
                    isAccessed,
                    isSelected,
                    annotationIndex
                }}
            />
        </div>
    ))

AnnotationHeader.propTypes = propTypes

export default AnnotationHeader
