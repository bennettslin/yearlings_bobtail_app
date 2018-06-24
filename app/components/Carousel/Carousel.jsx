// Section to show all song annotations in a carousel layout.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import CarouselAnnotation from './CarouselAnnotation'
import CarouselSelect from './CarouselSelect'

import { getAnnotationsCount } from '../../helpers/dataHelper'
import { getArrayOfLength, getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    isHiddenCarouselNav,
    renderableSongIndex,
    renderableAnnotationIndex,
    accessedAnnotationIndex
}) => ({
    canCarouselRender,
    isHiddenCarouselNav,
    renderableSongIndex,
    renderableAnnotationIndex,
    accessedAnnotationIndex
})

class Carousel extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        handleAnnotationPrevious: PropTypes.func.isRequired,
        handleAnnotationNext: PropTypes.func.isRequired,

        carouselDidRender: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isHiddenCarouselNav',
                    'renderableSongIndex',
                    'accessedAnnotationIndex',
                    'renderableAnnotationIndex',
                    'canCarouselRender'
                ]
            })

        return componentShouldUpdate
    }

    componentDidUpdate(prevProps) {
        if (this.props.canCarouselRender && !prevProps.canCarouselRender) {
            console.warn('Carousel rendered.')

            setTimeout(
                this.props.carouselDidRender, 0
            )
        }
    }

    render() {
        const { isHiddenCarouselNav,
                renderableSongIndex,
                accessedAnnotationIndex,
                renderableAnnotationIndex,
                handleAnnotationPrevious,
                handleAnnotationNext,

                canCarouselRender,

                ...other } = this.props

        if (isHiddenCarouselNav) {
            return null
        }

        const annotationsCount = getAnnotationsCount(renderableSongIndex),

            /**
             * Dynamically create array of just indices. Carousel annotation
             * will fetch annotation object directly from data helper.
             */
            annotationsIndices = getArrayOfLength({
                length: annotationsCount
            })

        return canCarouselRender ? (
            <div
                className={cx(
                    'Carousel',
                    'gradientMask__carousel__desktop'
                )}
                onTransitionEnd={this._handleTransition}
            >
                <div className="Carousel__scrollParent">

                    {annotationsIndices.map(index => {

                        const annotationIndex = index + 1,
                            isAccessed =
                                annotationIndex === accessedAnnotationIndex,
                            isSelected =
                                annotationIndex === renderableAnnotationIndex

                        return (
                            <CarouselAnnotation {...other}
                                key={index}
                                annotationIndex={annotationIndex}
                                isAccessed={isAccessed}
                                isSelected={isSelected}
                            />
                        )
                    })}

                </div>

                <CarouselSelect
                    handleAnnotationPrevious={handleAnnotationPrevious}
                    handleAnnotationNext={handleAnnotationNext}
                />
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(Carousel)
