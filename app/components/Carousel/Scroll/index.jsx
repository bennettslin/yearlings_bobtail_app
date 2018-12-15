// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CSSTransition } from 'react-transition-group'
import CarouselAnnotation from '../Annotation'

import { getAnnotationsCount } from 'helpers/data'
import { getArrayOfLength } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: {
        renderedSongIndex,
        renderedAnnotationIndex
    },
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
    isAccessOn,
    isLyricExpanded,
    accessedAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    interactivatedVerseIndex
})

class CarouselScroll extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,

        // From parent.
        setCarouselParent: PropTypes.func.isRequired,
        setCarouselAnnotationElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('CarouselScroll')
    }

    render() {
        const {
            canCarouselRender,
            renderedSongIndex,
            renderedAnnotationIndex,
            accessedAnnotationIndex,
            isAccessOn,
            isCarouselShown,
            isDotsSlideShown,
            interactivatedVerseIndex,
            isLyricExpanded,
            setCarouselParent,
            setCarouselAnnotationElement
        } = this.props

        const annotationsCount = getAnnotationsCount(renderedSongIndex),

            /**
             * Dynamically create array of just indices. CarouselScroll
             * annotation will fetch annotation object directly from data
             * helper.
             */
            annotationsIndices = getArrayOfLength(annotationsCount)

        return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                {...{
                    in: canCarouselRender,
                    timeout: {
                        enter: 0,
                        exit: 200
                    },
                    classNames: {
                        enterDone: 'CarouselScroll__visible'
                    }
                }}
            >
                <div
                    ref={setCarouselParent}
                    className="CarouselScroll"
                >
                    {annotationsIndices.map(index => {

                        const annotationIndex = index + 1,

                            isAccessed =
                                isAccessOn &&

                                /**
                                 * TODO: This conditional is repeated in
                                 * CarouselScroll, UnitDot, and
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
                                    setCarouselAnnotationElement
                                }}
                            />
                        )
                    })}
                </div>
            </CSSTransition>
        )
    }
}

export default connect(mapStateToProps)(CarouselScroll)
