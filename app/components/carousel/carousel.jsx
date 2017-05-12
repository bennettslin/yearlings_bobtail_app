import React, { Component } from 'react'
import classnames from 'classnames'
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

class CarouselView extends Component {

    render() {
        const { annotations = [],
            ...other } = this.props

        return (
            <div className="carousel">
                <div className="carousel-scroll">
                    <div className="carousel-annotations-block">
                        {annotations.map((annotation, index) => {
                            return (
                                <div
                                    key={index}
                                    className={classnames(
                                        'carousel-annotation',
                                        `carousel-annotation-${index + 1}`,
                                        annotation.dotKeys
                                    )}
                                >
                                    <AnnotationSection {...other}
                                        popupAnnotation={annotation}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
