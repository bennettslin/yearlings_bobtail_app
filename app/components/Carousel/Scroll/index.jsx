// Section to show all song annotations in a carousel layout.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import Transition from 'react-transition-group/Transition'
import ScrollCarouselListener from '../../../listeners/Scroll/Carousel'
import CarouselAnnotation from '../Annotation'
import { getAnnotationIndices } from '../../../api/album/annotations'
import { mapCanLyricCarouselUpdate } from '../../../redux/entrance/selectors'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import './style'

const mapStateToProps = state => {
    const
        canLyricCarouselUpdate = mapCanLyricCarouselUpdate(state),
        lyricSongIndex = mapLyricSongIndex(state)

    return {
        canLyricCarouselUpdate,
        lyricSongIndex
    }
}

class CarouselScroll extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselUpdate: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        updateEntranceStore: PropTypes.func.isRequired
    }

    carouselScrollChildren = {}

    componentDidMount() {
        logMount('CarouselScroll')
    }

    _handleTransitionEntered = () => {
        logTransition('Carousel did update from CarouselScroll.')
        this.props.updateEntranceStore({ didCarouselUpdate: true })
    }

    _setCarouselScrollParent = node => {
        this.carouselScrollParent = node
    }

    _setCarouselScrollChild = ({ node, index }) => {
        this.carouselScrollChildren[index] = node
    }

    getCarouselScrollParent = () => (
        this.carouselScrollParent
    )

    getCarouselScrollChild = index => (
        this.carouselScrollChildren[index]
    )

    render() {
        const {
            canLyricCarouselUpdate,
            lyricSongIndex
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
                    {...{
                        ref: this._setCarouselScrollParent,
                        className: 'CarouselScroll'
                    }}
                >
                    <ScrollCarouselListener {...{
                        getCarouselScrollParent: this.getCarouselScrollParent,
                        getCarouselScrollChild: this.getCarouselScrollChild
                    }} />
                    {getAnnotationIndices(lyricSongIndex).map(index => {
                        const annotationIndex = index + 1

                        return (
                            <CarouselAnnotation
                                {...{
                                    key: index,
                                    annotationIndex,
                                    setCarouselAnnotationChild: this._setCarouselScrollChild
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
