// Section to show all song annotations in a carousel layout.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CarouselAnnotation from './carousel-annotation'
import Button from '../button/button'
import { getAnnotationsLength } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class CarouselSection extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [

                    // TODO: Necessary after annotation refactor?
                    'isHiddenNav',
                    'selectedSongIndex',

                    'accessedAnnotationIndex',
                    'selectedAnnotationIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { isHiddenNav,
                selectedSongIndex,
                accessedAnnotationIndex,
                selectedAnnotationIndex,
                handleAnnotationPrevious,
                handleAnnotationNext,
                ...other } = this.props

        if (isHiddenNav) {
            return null
        }

        const annotationsLength = getAnnotationsLength(selectedSongIndex),

            /**
             * Dynamically create array of just indices. Carousel annotation
             * will fetch annotation object directly from data helper.
             */
            indicesArray = Array.from(Array(annotationsLength).keys())

        return (
            <div className="carousel">
                <div className="carousel-scroll">
                    <div className="carousel-annotations-block">
                        <div className="carousel-annotation carousel-annotation-0" />
                        {indicesArray.map(index => {
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
}

CarouselSection.propTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    accessedAnnotationIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired
}

export default connect(({
    isHiddenNav,
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
}) => ({
    isHiddenNav,
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
}))(CarouselSection)
