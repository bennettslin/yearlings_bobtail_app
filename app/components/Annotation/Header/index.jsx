import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
        // From parent.
        inCarousel: PropTypes.bool,
        children: PropTypes.any.isRequired
    },

    AnnotationHeader = memo(({
        inCarousel,
        children

    }) => (
        <div className={cx(
            'AnnotationHeader',

            // Annotation header needs to be hideable in carousel.
            inCarousel && 'AnnotationHeaderAnimatable',

            'absoluteFullContainer'
        )}>
            {children}
        </div>
    ))

AnnotationHeader.propTypes = propTypes

export default AnnotationHeader
