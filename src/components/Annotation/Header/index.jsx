import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import AnnotationTitle from '../Title'
import './style'

const AnnotationHeader = ({
    didMount,
    inCarousel,
    isAccessed,
    isSelected,
    annotationIndex,

}) => didMount && (
    <div
        {...{
            className: cx(
                'AnnotationHeader',
                // Annotation header needs to be hideable in carousel.
                inCarousel && 'AnnotationHeaderAnimatable',
                'abF',
            ),
        }}
    >
        <AnnotationTitle
            {...{
                isAccessed,
                isSelected,
                annotationIndex,
            }}
        />
    </div>
)

AnnotationHeader.propTypes = {
    didMount: PropTypes.bool.isRequired,
    inCarousel: PropTypes.bool,
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number.isRequired,
}

export default memo(getDidMountHoc(AnnotationHeader))
