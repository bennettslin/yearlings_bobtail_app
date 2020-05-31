import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import {
    intersects,
    getDotKeysFromBitNumber
} from '../../../helpers/dot'
import { getDotKeysForAnnotation } from '../../../album/api/annotations'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'
import { IS_EAR_SHOWN_SELECTOR } from '../../../redux/transient/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_ANNOTATION_INDEX_SELECTOR,
    EAR_COLUMN_INDEX_SELECTOR
} from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        dotsBitNumber = DOTS_BIT_NUMBER_SELECTOR(state),
        isEarShown = IS_EAR_SHOWN_SELECTOR(state),
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        selectedAnnotationIndex = SELECTED_ANNOTATION_INDEX_SELECTOR(state),
        earColumnIndex = EAR_COLUMN_INDEX_SELECTOR(state)

    return {
        isEarShown,
        selectedSongIndex,
        selectedAnnotationIndex,
        dotsBitNumber,
        earColumnIndex
    }
}

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
        updateSelectedStore: PropTypes.func.isRequired,

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
            const annotationDotKeys = getDotKeysForAnnotation(
                selectedSongIndex,
                selectedAnnotationIndex
            )

            if (!intersects(annotationDotKeys, selectedDotKeys)) {
                return false
            }
        }

        this.dispatchAndLog(selectedAnnotationIndex)

        if (selectedAnnotationIndex) {

            // If selecting from carousel, scroll lyric.
            if (fromCarousel) {
                this.props.updateScrollLyricStore({
                    queuedScrollLyricLog:
                        `Carousel select annotation ${selectedAnnotationIndex}.`,
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

        this.dispatchAndLog(selectedAnnotationIndex)

        if (selectedAnnotationIndex) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog:
                    `Direction select annotation ${selectedAnnotationIndex}.`,
                queuedScrollLyricIndex: selectedAnnotationIndex
            })
            this.props.updateScrollCarouselStore({
                queuedScrollCarouselLog: 'Select accessed carousel annotation.',
                queuedScrollCarouselIndex: selectedAnnotationIndex
            })
        }

        return selectedAnnotationIndex
    }

    dispatchAndLog = selectedAnnotationIndex => {
        const { selectedSongIndex } = this.props

        this.props.updateSelectedStore({ selectedAnnotationIndex })

        logSelect({
            action: 'annotation',
            song: selectedSongIndex,
            annotation: selectedAnnotationIndex
        })
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateScrollCarouselStore,
        updateScrollLyricStore,
        updateSelectedStore
    }
)(AnnotationDispatcher)
