// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import Transition from 'react-transition-group/Transition'
import CarouselAnnotation from '../Annotation'

import { getAnnotationsCount } from 'album/api/annotations'
import { getArrayOfLength } from 'helpers/general'

const mapStateToProps = ({
    lyricStore: {
        canLyricCarouselUpdate,
        lyricSongIndex,
        lyricAnnotationIndex
    },
    accessStore: {
        isAccessedIndexedAnchorShown,
        accessedAnnotationIndex
    }
}) => ({
    canLyricCarouselUpdate,
    lyricSongIndex,
    lyricAnnotationIndex,
    isAccessedIndexedAnchorShown,
    accessedAnnotationIndex
})

class CarouselScroll extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        isAccessedIndexedAnchorShown: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired,

        // From parent.
        setCarouselParent: PropTypes.func.isRequired,
        setCarouselAnnotationElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('CarouselScroll')
    }

    _handleTransitionEntered = () => {
        this.props.updateLyricStore({ didCarouselUpdate: true })
    }

    render() {
        const {
            canLyricCarouselUpdate,
            lyricSongIndex,
            lyricAnnotationIndex,
            accessedAnnotationIndex,
            isAccessedIndexedAnchorShown,
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
                                isAccessedIndexedAnchorShown &&
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
    { updateLyricStore }
)(CarouselScroll)
