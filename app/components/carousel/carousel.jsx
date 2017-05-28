import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CarouselAnnotation from './carousel-annotation'
import Button from '../button/button'
import { getAnnotationsArray } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

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
                    'accessedAnnotationIndex',
                    'selectedAnnotationIndex',
                    'selectedSongIndex',
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
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const CarouselView = ({

    selectedSongIndex,
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
                        return (
                            <CarouselAnnotation {...other}
                                key={index}
                                annotation={annotation}
                                annotationIndex={index + 1}
                                annotationColumn={annotation.column}
                                annotationDotKeys={annotation.dotKeys}
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

export default Carousel
