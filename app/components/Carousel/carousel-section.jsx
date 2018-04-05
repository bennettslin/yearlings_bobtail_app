// Section to show all song annotations in a carousel layout.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import CarouselAnnotation from './carousel-annotation'
import Button from '../button/button'
import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY } from '../../constants/access'
import { getAnnotationsCount } from '../../helpers/data-helper'
import { getArrayOfLength } from '../../helpers/general-helper'

const mapStateToProps = ({
    isHeightlessLyricColumn,
    isHiddenNav,
    isHeavyRenderReady,
    renderReadySongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
}) => ({
    isHeightlessLyricColumn,
    isHiddenNav,
    isHeavyRenderReady,
    renderReadySongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
})

class CarouselSection extends Component {

    static propTypes = {
        // Through Redux.
        isHiddenNav: PropTypes.bool.isRequired,
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
            shouldOverrideAnimate: false
        }

        this._handleTransition = this._handleTransition.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isHeavyRenderReady && !nextProps.isHeavyRenderReady) {
            this.setState({
                shouldOverrideAnimate: true
            })
        }
    }

    _handleTransition(e) {
        if (e.propertyName === 'opacity') {
            this.setState({
                shouldOverrideAnimate: false
            })
        }
    }

    render() {
        const { isHeightlessLyricColumn,
                isHiddenNav,
                isHeavyRenderReady,
                renderReadySongIndex,
                accessedAnnotationIndex,
                selectedAnnotationIndex,
                handleAnnotationPrevious,
                handleAnnotationNext,
                ...other } = this.props,

            { shouldOverrideAnimate } = this.state

        if (isHiddenNav) {
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

        return isHeightlessLyricColumn ? null : (
            <div
                className={cx(
                    'carousel',
                    'desktop-carousel-gradient-mask',
                    isHeavyRenderReady ? 'render-ready' : 'render-unready',
                    { 'override-animate': shouldOverrideAnimate }
                )}
                onTransitionEnd={this._handleTransition}
            >
                <div className="carousel-scroll">
                    <div className="carousel-annotations-block">
                        <div className="carousel-annotation carousel-annotation-0" />
                        {annotationsIndices.map(index => {
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
                        accessKey={NAVIGATION_LEFT_KEY}
                        iconText={'\u276e'}
                        isLarge={true}
                        handleClick={handleAnnotationPrevious}
                    />
                    <Button
                        buttonName="next-position"
                        accessKey={NAVIGATION_RIGHT_KEY}
                        iconText={'\u276f'}
                        isLarge={true}
                        handleClick={handleAnnotationNext}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CarouselSection)
