// Section to show all song annotations in a carousel layout.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import CarouselAnnotation from './CarouselAnnotation'
import CarouselSelect from './CarouselSelect'

import { getAnnotationsCount } from '../../helpers/dataHelper'
import { getArrayOfLength } from '../../helpers/generalHelper'

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

    constructor(props) {
        super(props)

        this.state = {
            isShown: false,
            didRenderTimeoutId: ''
        }

        this._waitForShowBeforeRender = this._waitForShowBeforeRender.bind(this)
    }

    componentDidUpdate(prevProps) {
        const { canCarouselRender } = this.props,
            { canCarouselRender: couldRender } = prevProps

        if (canCarouselRender && !couldRender) {
            console.warn('Carousel rendered.')

            // Set timeout to prevent children transitions before render.
            setTimeout(this._waitForShowBeforeRender, 50)

            clearTimeout(this.state.didRenderTimeoutId)

            // Wait for parent to transition before continuing render sequence.
            const didRenderTimeoutId = setTimeout(
                this.props.carouselDidRender, 100
            )

            this.setState({
                didRenderTimeoutId
            })

        } else if (couldRender && !canCarouselRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _waitForShowBeforeRender() {
        this.setState({
            isShown: true
        })
    }

    render() {
        const { isHiddenCarouselNav,
                renderableSongIndex,
                accessedAnnotationIndex,
                renderableAnnotationIndex,
                handleAnnotationPrevious,
                handleAnnotationNext,

                /* eslint-disable no-unused-vars */
                canCarouselRender,
                carouselDidRender,
                /* eslint-enable no-unused-vars */

                ...other } = this.props,

            { isShown } = this.state

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

        return (
            <div
                className={cx(
                    'Carousel',
                    'gradientMask__carousel__desktop',
                    { 'parentIsShown': canCarouselRender && isShown }
                )}
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
        )
    }
}

export default connect(mapStateToProps)(Carousel)
