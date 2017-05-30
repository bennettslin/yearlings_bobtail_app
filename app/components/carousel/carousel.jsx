import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CarouselAnnotation from './carousel-annotation'
import Button from '../button/button'
import { getAnnotationsArray } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedSongIndex,
    selectedAnnotationIndex
}) => ({
// Pass Redux state into component props.
    selectedSongIndex,
    selectedAnnotationIndex
})

/*************
 * CONTAINER *
 *************/

class Carousel extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedSongIndex',
                    'accessedAnnotationIndex',
                    'selectedAnnotationIndex',
                    'accessedPopupAnchorIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        return (
            <CarouselView {...this.props} />
        )
    }
}

Carousel.propTypes = {
    selectedSongIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const CarouselView = ({

    selectedSongIndex,
    accessedAnnotationIndex,
    selectedAnnotationIndex,
    handleAnnotationPrevious,
    handleAnnotationNext,

...other }) => {

    const annotations = getAnnotationsArray(selectedSongIndex)

    return (
        <div className="carousel">
            <div className="carousel-scroll">
                <div className="carousel-annotations-block">
                    <div className="carousel-annotation carousel-annotation-0"></div>
                    {annotations.map((annotation, index) => {
                        const annotationIndex = index + 1,
                            isAccessedAnnotation = annotationIndex === accessedAnnotationIndex,
                            isSelectedAnnotation = annotationIndex === selectedAnnotationIndex

                        return (
                            <CarouselAnnotation {...other}
                                key={index}
                                annotationObject={annotation}
                                annotationColumn={annotation.column}
                                annotationDotKeys={annotation.dotKeys}
                                annotationIndex={annotationIndex}
                                isAccessedAnnotation={isAccessedAnnotation}
                                isSelectedAnnotation={isSelectedAnnotation}
                                selectedSongIndex={selectedSongIndex}
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

export default connect(passReduxStateToProps)(Carousel)
