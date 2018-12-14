import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSongStore } from 'flux/song/action'

import {
    intersects,
    getDotKeysFromBitNumber
} from '../../../helpers/dot'
import { getAnnotationObject } from '../../../helpers/data'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'

class AnnotationDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchAnnotationIndex: this.dispatchAnnotationIndex,
            dispatchAnnotationDirection: this.dispatchAnnotationDirection
        })
    }

    dispatchAnnotationIndex = ({
        selectedAnnotationIndex = 0,
        fromCarousel
    } = {}) => {

        const {
                selectedSongIndex,
                dotsBitNumber
            } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber)

        // If selecting an annotation, make sure that its dots intersect.
        if (selectedAnnotationIndex) {
            const annotation = getAnnotationObject(
                selectedSongIndex,
                selectedAnnotationIndex
            )

            if (!intersects(annotation.dotKeys, selectedDotKeys)) {
                return false
            }
        }

        this.props.updateSongStore({ selectedAnnotationIndex })

        if (selectedAnnotationIndex) {

            // If selecting from carousel, scroll lyric.
            if (fromCarousel) {
                this.props.updateScrollLyricStore({
                    queuedScrollLyricLog: 'Carousel selected lyric annotation.',
                    queuedScrollLyricIndex: selectedAnnotationIndex
                })

            // If selecting from lyric, scroll carousel.
            } else {
                this.props.updateScrollCarouselStore({
                    queuedScrollCarouselLog: 'Lyric selected carousel annotation.',
                    queuedScrollCarouselIndex: selectedAnnotationIndex
                })
            }
        }

        // Tell text lyric anchor to stop propagation if successfully selected.
        return Boolean(selectedAnnotationIndex)
    }

    dispatchAnnotationDirection = (direction) => {
        const {
                selectedSongIndex,
                selectedAnnotationIndex: currentAnnotationIndex,
                dotsBitNumber,
                earColumnIndex,
                isEarShown
            } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            // Called from arrow buttons in popup.
            selectedAnnotationIndex = getAnnotationIndexForDirection({
                isEarShown,
                selectedSongIndex,
                selectedDotKeys,
                currentAnnotationIndex,
                earColumnIndex,
                direction
            })

        this.props.updateSongStore({ selectedAnnotationIndex })

        if (selectedAnnotationIndex) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog: 'Select accessed lyric annotation.',
                queuedScrollLyricIndex: selectedAnnotationIndex
            })
            this.props.updateScrollCarouselStore({
                queuedScrollCarouselLog: 'Select accessed carousel annotation.',
                queuedScrollCarouselIndex: selectedAnnotationIndex
            })
        }

        return selectedAnnotationIndex
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    transientStore: { isEarShown },
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    },
    dotsStore: { dotsBitNumber },
    songStore: { earColumnIndex }
}) => ({
    isEarShown,
    selectedSongIndex,
    selectedAnnotationIndex,
    dotsBitNumber,
    earColumnIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollCarouselStore,
        updateScrollLyricStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationDispatcher)
