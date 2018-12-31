// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransitionStore } from 'flux/transition/action'

import Transition from 'react-transition-group/Transition'
import CarouselAnnotation from '../Annotation'

import { getAnnotationsCount } from 'album/api/annotations'
import { getArrayOfLength } from 'helpers/general'

const mapStateToProps = ({
    lyricStore: { canLyricCarouselUpdate },
    lyricStore: {
        lyricSongIndex,
        lyricAnnotationIndex
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
    canLyricCarouselUpdate,
    lyricSongIndex,
    lyricAnnotationIndex,
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
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        updateTransitionStore: PropTypes.func.isRequired,

        // From parent.
        setCarouselParent: PropTypes.func.isRequired,
        setCarouselAnnotationElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('CarouselScroll')
    }

    _handleTransitionEntered = () => {
        this.props.updateTransitionStore({ didCarouselUpdate: true })
    }

    render() {
        const {
            canLyricCarouselUpdate,
            lyricSongIndex,
            lyricAnnotationIndex,
            accessedAnnotationIndex,
            isAccessOn,
            isCarouselShown,
            isDotsSlideShown,
            interactivatedVerseIndex,
            isLyricExpanded,
            setCarouselParent,
            setCarouselAnnotationElement
        } = this.props

        const annotationsCount = getAnnotationsCount(lyricSongIndex),

            /**
             * Dynamically create array of just indices. CarouselScroll
             * annotation will fetch annotation object directly from data
             * helper.
             */
            annotationsIndices = getArrayOfLength(annotationsCount)

        return (
            <Transition
                {...{
                    in: canLyricCarouselUpdate,
                    timeout: 200,
                    onEntered: this._handleTransitionEntered
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
                                annotationIndex === lyricAnnotationIndex

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
            </Transition>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateTransitionStore }
)(CarouselScroll)
