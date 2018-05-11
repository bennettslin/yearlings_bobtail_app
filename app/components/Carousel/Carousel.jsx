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
    isHiddenCarouselNav,
    isHeavyRenderReady,
    renderReadySongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
}) => ({
    isHiddenCarouselNav,
    isHeavyRenderReady,
    renderReadySongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
})

class Carousel extends Component {

    static propTypes = {
        // Through Redux.
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isHeavyRenderReady: PropTypes.bool.isRequired,
        renderReadySongIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        handleAnnotationPrevious: PropTypes.func.isRequired,
        handleAnnotationNext: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            /**
             * When a dot is deselected, don't animate elements that get hidden
             * when transitioning between songs.
             */
            overrideTransitions: false
        }

        this._handleTransition = this._handleTransition.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isHiddenCarouselNav',
                    'isHeavyRenderReady',
                    'renderReadySongIndex',
                    'accessedAnnotationIndex',
                    'selectedAnnotationIndex'
                ]
            })

        return componentShouldUpdate
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isHeavyRenderReady && !nextProps.isHeavyRenderReady) {
            this.setState({
                overrideTransitions: true
            })
        }
    }

    _handleTransition(e) {
        if (e.propertyName === 'opacity') {
            this.setState({
                overrideTransitions: false
            })
        }
    }

    render() {
        const { isHiddenCarouselNav,
                isHeavyRenderReady,
                renderReadySongIndex,
                accessedAnnotationIndex,
                selectedAnnotationIndex,
                handleAnnotationPrevious,
                handleAnnotationNext,
                ...other } = this.props,

            { overrideTransitions } = this.state

        if (isHiddenCarouselNav) {
            return null
        }

        const annotationsCount = getAnnotationsCount(renderReadySongIndex),

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
                    isHeavyRenderReady && 'renderReady',
                    { 'overrideTransitions': overrideTransitions }
                )}
                onTransitionEnd={this._handleTransition}
            >
                <div className="Carousel__scrollParent">

                    {annotationsIndices.map(index => {

                        const annotationIndex = index + 1,
                            isAccessed =
                                annotationIndex === accessedAnnotationIndex,
                            isSelected =
                                annotationIndex === selectedAnnotationIndex

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
