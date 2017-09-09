// Section to show all song annotations in a carousel layout.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

import CarouselAnnotation from './carousel-annotation'
import Button from '../button/button'
import { getAnnotationsCount } from '../../helpers/data-helper'
import { getArrayOfLength } from '../../helpers/general-helper'

const mapStateToProps = ({
    isHiddenNav,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
}) => ({
    isHiddenNav,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
})

const carouselSectionPropTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    isHeavyRenderReady: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    accessedAnnotationIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired
},

CarouselSection = ({

    isHiddenNav,
    isHeavyRenderReady,
    selectedSongIndex,
    accessedAnnotationIndex,
    selectedAnnotationIndex,
    handleAnnotationPrevious,
    handleAnnotationNext,

...other }) => {

    if (isHiddenNav) {
        return null
    }

    const annotationsCount = getAnnotationsCount(selectedSongIndex),

        /**
         * Dynamically create array of just indices. Carousel annotation
         * will fetch annotation object directly from data helper.
         */
        annotationsIndices = getArrayOfLength({
            length: annotationsCount
        })

    return (
        <div className={classnames(
            'carousel',
            isHeavyRenderReady && 'render-ready'
        )}>
            <div className="carousel-scroll">
                <div className="carousel-annotations-block">
                    <div className="carousel-annotation carousel-annotation-0" />
                    {annotationsIndices.map(index => {
                        const annotationIndex = index + 1,
                            isAccessedAnnotation = annotationIndex === accessedAnnotationIndex,
                            isSelectedAnnotation = annotationIndex === selectedAnnotationIndex

                        return (
                            <CarouselAnnotation {...other}
                                key={index}
                                annotationIndex={annotationIndex}
                                isAccessedAnnotation={isAccessedAnnotation}
                                isSelectedAnnotation={isSelectedAnnotation}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="carousel-nav-buttons-block">
                <Button
                    buttonName="previous-position"
                    iconText={'\u276e'}
                    isLarge={true}
                    handleClick={handleAnnotationPrevious}
                />
                <Button
                    buttonName="next-position"
                    iconText={'\u276f'}
                    isLarge={true}
                    handleClick={handleAnnotationNext}
                />
            </div>
        </div>
    )
}

CarouselSection.propTypes = carouselSectionPropTypes

export default connect(mapStateToProps)(CarouselSection)
