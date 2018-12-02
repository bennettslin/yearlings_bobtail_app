import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSongStore } from 'flux/song/action'

import { intersects } from '../../../helpers/dot'
import { getAnnotationObject } from '../../../helpers/data'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'

class AnnotationDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchAnnotationIndex = this.dispatchAnnotationIndex
        this.props.parentThis.dispatchAnnotationDirection = this.dispatchAnnotationDirection
    }

    dispatchAnnotationIndex = ({
        selectedAnnotationIndex,
        fromCarousel
    }) => {

        const {
            selectedSongIndex,
            selectedDotKeys
        } = this.props

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
                    scrollLyricLog: 'Carousel selected lyric annotation.',
                    scrollLyricIndex: selectedAnnotationIndex
                })

            // If selecting from lyric, scroll carousel.
            } else {
                this.props.updateScrollCarouselStore({
                    scrollCarouselLog: 'Lyric selected carousel annotation.',
                    scrollCarouselIndex: selectedAnnotationIndex
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
                selectedDotKeys,
                earColumnIndex,
                isEarShown
            } = this.props,

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
                scrollLyricLog: 'Select accessed lyric annotation.',
                scrollLyricIndex: selectedAnnotationIndex
            })
            this.props.updateScrollCarouselStore({
                scrollCarouselLog: 'Select accessed carousel annotation.',
                scrollCarouselIndex: selectedAnnotationIndex
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
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    songStore: { earColumnIndex }
}) => ({
    isEarShown,
    selectedSongIndex,
    selectedAnnotationIndex,
    dotsBitNumber,
    selectedDotKeys,
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
