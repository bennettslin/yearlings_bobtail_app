// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScrollCarouselListener from '../../listeners/ScrollCarouselListener'
import CarouselAnnotation from './Annotation'
import CarouselSelect from './Select'

import { getAnnotationsCount } from 'helpers/data'
import { getArrayOfLength } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { didCarouselRender },
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
    didCarouselRender,
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
        didCarouselRender: PropTypes.bool.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('Carousel')
    }

    _setCarouselParent = (node) => {
        return this.setCarouselParent(node)
    }

    _setCarouselAnnotationElement = (payload) => {
        return this.setCarouselAnnotationElement(payload)
    }

    render() {
        const {
            isHiddenCarouselNav,
            renderedSongIndex,
            renderedAnnotationIndex,
            accessedAnnotationIndex,
            isAccessOn,
            isCarouselShown,
            isDotsSlideShown,
            interactivatedVerseIndex,
            isLyricExpanded,
            didCarouselRender
        } = this.props

        if (isHiddenCarouselNav) {
            return null
        }

        const annotationsCount = getAnnotationsCount(renderedSongIndex),

            /**
             * Dynamically create array of just indices. Carousel annotation
             * will fetch annotation object directly from data helper.
             */
            annotationsIndices = getArrayOfLength(annotationsCount)

        return (
            <div
                className={cx(
                    'Carousel',
                    'gradientMask__carousel__desktop',
                    { 'parent__shown': didCarouselRender }
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
                            <CarouselAnnotation
                                key={index}
                                {...{
                                    annotationIndex,
                                    isAccessed,
                                    isSelected,
                                    setCarouselAnnotationElement: this._setCarouselAnnotationElement
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

export default connect(mapStateToProps)(Carousel)
