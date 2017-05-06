import React from 'react'
import AnnotationSection from '../annotation/annotation-section'
// import {  } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const Carousel = (props) => (
    <CarouselView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const CarouselView = ({

    // From props.
    annotations = [],

...other }) => (
    <div className="carousel">
        <div className="carousel-animatable">
            {annotations.map((annotation, index) => {
                return (
                    <div
                        key={index}
                        className="carousel-annotation"
                    >
                        <AnnotationSection {...other}
                            popupAnnotation={annotation}
                        />
                    </div>
                )
            })}
        </div>
    </div>
)

export default Carousel
