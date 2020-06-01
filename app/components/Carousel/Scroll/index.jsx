// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import Transition from 'react-transition-group/Transition'
import ScrollCarouselListener from '../../../listeners/Scroll/Carousel'
import CarouselAnnotation from '../Annotation'
import { getAnnotationIndices } from '../../../album/api/annotations'
import { populateRefs } from '../../../helpers/ref'
import {
    mapIsAccessedIndexedAnchorShown,
    mapAccessedAnnotationIndex
} from '../../../redux/access/selectors'
import {
    mapLyricSongIndex,
    mapLyricAnnotationIndex
} from '../../../redux/lyric/selectors'
import './style'

const mapStateToProps = state => {
    const {
            entranceStore: { canLyricCarouselUpdate }
        } = state,
        isAccessedIndexedAnchorShown = mapIsAccessedIndexedAnchorShown(state),
        accessedAnnotationIndex = mapAccessedAnnotationIndex(state),
        lyricSongIndex = mapLyricSongIndex(state),
        lyricAnnotationIndex = mapLyricAnnotationIndex(state)

    return {
        canLyricCarouselUpdate,
        lyricSongIndex,
        lyricAnnotationIndex,
        isAccessedIndexedAnchorShown,
        accessedAnnotationIndex
    }
}

class CarouselScroll extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        isAccessedIndexedAnchorShown: PropTypes.bool.isRequired,
        updateEntranceStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('CarouselScroll')
    }

    _handleTransitionEntered = () => {
        logTransition('Carousel did update from CarouselScroll.')
        this.props.updateEntranceStore({ didCarouselUpdate: true })
    }

    _setCarouselParent = node => {
        return this.setCarouselParent(node)
    }

    _setCarouselAnnotationElement = payload => {
        return this.setCarouselAnnotationElement(payload)
    }

    _getRefs = payload => {
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
                    {getAnnotationIndices(lyricSongIndex).map(index => {

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
    { updateEntranceStore }
)(CarouselScroll)
