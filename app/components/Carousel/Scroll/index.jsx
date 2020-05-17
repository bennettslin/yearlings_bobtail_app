// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from '../../../redux/lyric/action'

import Transition from 'react-transition-group/Transition'
import ScrollCarouselListener from '../../../listeners/Scroll/Carousel'
import CarouselAnnotation from '../Annotation'

import { getAnnotationIndicesArray } from '../../../album/api/annotations'
import { populateRefs } from '../../../helpers/ref'

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
        updateLyricStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('CarouselScroll')
    }

    _handleTransitionEntered = () => {
        this.props.updateLyricStore({ didCarouselUpdate: true })
    }

    _setCarouselParent = (node) => {
        return this.setCarouselParent(node)
    }

    _setCarouselAnnotationElement = (payload) => {
        return this.setCarouselAnnotationElement(payload)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            canLyricCarouselUpdate,
            lyricSongIndex,
            lyricAnnotationIndex,
            accessedAnnotationIndex,
            isAccessedIndexedAnchorShown
        } = this.props

        /**
         * Dynamically create array of just indices. CarouselScroll
         * annotation will fetch annotation object directly from data
         * helper.
         */
        const annotationIndices = getAnnotationIndicesArray(lyricSongIndex)

        return (
            <Transition
                {...{
                    in: canLyricCarouselUpdate,
                    timeout: 200,
                    onEntered: this._handleTransitionEntered
                }}
            >
                <div
                    ref={this._setCarouselParent}
                    className="CarouselScroll"
                >
                    <ScrollCarouselListener {...{ getRefs: this._getRefs }} />
                    {annotationIndices.map(index => {

                        const annotationIndex = index + 1,

                            isAccessed =
                                isAccessedIndexedAnchorShown &&
                                annotationIndex === accessedAnnotationIndex,

                            isSelected =
                                annotationIndex === lyricAnnotationIndex

                        return (
                            <CarouselAnnotation
                                {...{
                                    key: index,
                                    annotationIndex,
                                    isAccessed,
                                    isSelected,
                                    setCarouselAnnotationElement: this._setCarouselAnnotationElement
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
