// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import ScrollCarouselListener from '../../listeners/ScrollCarouselListener'
import CarouselAnnotation from './Annotation'
import CarouselSelect from './Select'

import { getAnnotationsCount } from 'helpers/dataHelper'
import { getArrayOfLength } from 'helpers/generalHelper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: {
        renderedSongIndex,
        renderedAnnotationIndex
    },
    responsiveStore: { isHiddenCarouselNav },
    toggleStore: {
        isAccessOn,
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    accessStore: { accessedAnnotationIndex },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex,
    renderedAnnotationIndex,
    isHiddenCarouselNav,
    isAccessOn,
    isLyricExpanded,
    accessedAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    interactivatedVerseIndex
})

class Carousel extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        hasMounted: false,
        isShown: false,
        didRenderTimeoutId: '',
        waitForShowTimeoutId: ''
    }

    // No shouldComponentUpdate necessary.

    componentDidUpdate(prevProps) {
        const { canCarouselRender } = this.props,
            { canCarouselRender: couldRender } = prevProps

        if (canCarouselRender && !couldRender) {
            logger.warn('Carousel rendered.')

            clearTimeout(this.state.didRenderTimeoutId)
            clearTimeout(this.state.waitForShowTimeoutId)

            const
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this._carouselDidRender, 100
                ),
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                ),

                {
                    hasMounted
                } = this.state

            this.setState({
                didRenderTimeoutId,
                waitForShowTimeoutId,

                // Register that component has mounted.
                ...!hasMounted && { hasMounted: true }
            })

        } else if (couldRender && !canCarouselRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _carouselDidRender = () => {
        this.props.updateRenderStore({ didCarouselRender: true })
    }

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    _setCarouselParent = (node) => {
        return this.setCarouselParent(node)
    }

    _setCarouselAnnotation = (payload) => {
        return this.setCarouselAnnotation(payload)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                isHiddenCarouselNav,
                renderedSongIndex,
                renderedAnnotationIndex,
                accessedAnnotationIndex,
                isAccessOn,
                isCarouselShown,
                isDotsSlideShown,
                interactivatedVerseIndex,
                isLyricExpanded,
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

        const annotationsCount = getAnnotationsCount(renderedSongIndex),

            /**
             * Dynamically create array of just indices. Carousel annotation
             * will fetch annotation object directly from data helper.
             */
            annotationsIndices = getArrayOfLength(annotationsCount)

        return (hasMounted || canCarouselRender) && (
            <div
                className={cx(
                    'Carousel',
                    'gradientMask__carousel__desktop',
                    { 'parent__shown': canCarouselRender && isShown }
                )}
            >
                <ScrollCarouselListener {...{ parentThis: this }} />
                <div
                    ref={this._setCarouselParent}
                    className="Carousel__scroll"
                >

                    {annotationsIndices.map(index => {

                        const annotationIndex = index + 1,

                            isAccessed =
                                isAccessOn &&

                                /**
                                 * TODO: This conditional is repeated in
                                 * Carousel, UnitDot, and
                                 * TextLyricAnchor. Consolidate?
                                 */
                                !isDotsSlideShown &&
                                interactivatedVerseIndex < 0 &&
                                (
                                    isCarouselShown ||
                                    isLyricExpanded
                                ) &&
                                annotationIndex === accessedAnnotationIndex,

                            isSelected =
                                annotationIndex === renderedAnnotationIndex

                        return (
                            <CarouselAnnotation {...other}
                                key={index}
                                {...{
                                    annotationIndex,
                                    isAccessed,
                                    isSelected,
                                    setCarouselAnnotation: this._setCarouselAnnotation
                                }}
                            />
                        )
                    })}

                </div>

                <CarouselSelect />
            </div>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Carousel)
