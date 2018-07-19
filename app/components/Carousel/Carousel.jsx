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
    renderableStore,
    accessedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex,
    isLyricExpanded
}) => ({
    canCarouselRender,
    isHiddenCarouselNav,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableAnnotationIndex: renderableStore.renderableAnnotationIndex,
    accessedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    interactivatedVerseIndex,
    isLyricExpanded
})

class Carousel extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,

        // From parent.
        handleScrollUponCarouselRender: PropTypes.func.isRequired,
        handleAnnotationPrevious: PropTypes.func.isRequired,
        handleAnnotationNext: PropTypes.func.isRequired,

        carouselDidRender: PropTypes.func.isRequired,
        setCarouselParentRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false,
            isShown: false,
            waitForShowTimeoutId: '',
            didRenderTimeoutId: ''
        }

        this._waitForShowBeforeRender = this._waitForShowBeforeRender.bind(this)
    }

    // No shouldComponentUpdate necessary.

    componentDidUpdate(prevProps) {
        const { canCarouselRender } = this.props,
            { canCarouselRender: couldRender } = prevProps

        if (canCarouselRender && !couldRender) {
            console.warn('Carousel rendered.')

            clearTimeout(this.state.waitForShowTimeoutId)
            clearTimeout(this.state.didRenderTimeoutId)

            const
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                ),
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this.props.carouselDidRender, 100
                ),

                {
                    hasMounted
                } = this.state

            this.setState({
                waitForShowTimeoutId,
                didRenderTimeoutId,

                // Register that component has mounted.
                ...!hasMounted && { hasMounted: true }
            })

            this.props.handleScrollUponCarouselRender()

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
        const {
                /* eslint-disable no-unused-vars */
                handleScrollUponCarouselRender,
                carouselDidRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                isHiddenCarouselNav,
                renderableSongIndex,
                renderableAnnotationIndex,
                accessedAnnotationIndex,
                selectedCarouselNavIndex,
                selectedDotsIndex,
                interactivatedVerseIndex,
                isLyricExpanded,

                handleAnnotationPrevious,
                handleAnnotationNext,
                setCarouselParentRef,
                canCarouselRender,

            ...other
            } = this.props,

            {
                hasMounted,
                isShown
            } = this.state

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

        return (hasMounted || canCarouselRender) && (
            <div
                className={cx(
                    'Carousel',
                    'gradientMask__carousel__desktop',
                    { 'parentIsShown': canCarouselRender && isShown }
                )}
            >
                <div
                    ref={setCarouselParentRef}
                    className="Carousel__scroll"
                >

                    {annotationsIndices.map(index => {

                        const annotationIndex = index + 1,

                            isAccessed =
                                /**
                                 * TODO: This conditional is repeated in
                                 * Carousel, StanzaDot, and
                                 * TextLyricAnchor. Consolidate?
                                 */
                                !selectedDotsIndex &&
                                interactivatedVerseIndex < 0 &&
                                (
                                    selectedCarouselNavIndex ||
                                    isLyricExpanded
                                ) &&
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
