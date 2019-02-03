import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationTitle from '../Title'

const propTypes = {
        // From parent.
        inCarousel: PropTypes.bool,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired
    },

    AnnotationHeader = ({
        inCarousel,
        isAccessed,
        isSelected,
        annotationIndex

    }) => (
        <div className={cx(
            'AnnotationHeader',

            // Annotation header needs to be hideable in carousel.
            inCarousel && 'AnnotationHeaderAnimatable',

            'abF'
        )}>
            <AnnotationTitle
                {...{
                    isAccessed,
                    isSelected,
                    annotationIndex
                }}
            />
        </div>
    )

AnnotationHeader.propTypes = propTypes

export default memo(AnnotationHeader)
