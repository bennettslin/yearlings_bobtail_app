import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationTitle from './Title'

const propTypes = {
    // From parent.
        inCarousel: PropTypes.bool
    },

    AnnotationHeader = ({

        inCarousel,

        ...other
    }) => (
        <div className={cx(
            'AnnotationHeader',

            // Annotation header needs to be hideable in carousel.
            inCarousel && 'AnnotationHeaderAnimatable',

            'absoluteFullContainer'
        )}>
            <AnnotationTitle {...other} />
        </div>
    )

AnnotationHeader.propTypes = propTypes

export default AnnotationHeader
