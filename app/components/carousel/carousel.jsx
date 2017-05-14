import React, { Component } from 'react'
import CarouselAnnotation from './carousel-annotation'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

const Carousel = (props) => (
    <CarouselView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

class CarouselView extends Component {

    render() {
        const { annotations = [],

            handleAnnotationPrevious,
            handleAnnotationNext,

            ...other } = this.props

        return (
            <div className="carousel">
                <div className="carousel-scroll">
                    <div className="carousel-scroll-home"></div>
                    <div className="carousel-annotations-block">
                        {annotations.map((annotation, index) => {
                            return (
                                <CarouselAnnotation {...other}
                                    key={index}
                                    annotation={annotation}
                                    annotationIndex={index + 1}
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

export default Carousel
