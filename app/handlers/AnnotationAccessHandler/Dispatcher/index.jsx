// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'

import {
    getAnnotationIndexForVerseIndex,
    getAnnotationIndexForDirection
} from '../../../helpers/annotation'

class AnnotationAccessDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isEarShown: PropTypes.bool.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchAccessedAnnotation = this.dispatchAccessedAnnotation
    }

    dispatchAccessedAnnotation = ({
        direction,
        annotationIndex,
        verseIndex = this.props.selectedVerseIndex
    } = {}) => {

        const {
                selectedSongIndex,
                selectedDotKeys,
                earColumnIndex,
                isEarShown
            } = this.props,

            accessedAnnotationIndex =
                annotationIndex ? getAnnotationIndexForDirection({
                    currentAnnotationIndex: annotationIndex,
                    selectedSongIndex,
                    selectedDotKeys,
                    earColumnIndex,
                    isEarShown,
                    direction
                }) : getAnnotationIndexForVerseIndex({
                    verseIndex,
                    selectedSongIndex,
                    selectedDotKeys,
                    earColumnIndex,
                    isEarShown,
                    direction
                })

        this.props.updateAccessStore({ accessedAnnotationIndex })

        // Only scroll if accessed with a direction.
        if (direction && accessedAnnotationIndex) {
            this.props.updateScrollLyricStore({
                scrollLyricLog: 'Access lyric annotation.',
                scrollLyricIndex: accessedAnnotationIndex
            })
            if (this.props.isCarouselShown) {
                this.props.updateScrollCarouselStore({
                    scrollCarouselLog: 'Access carousel annotation.',
                    scrollCarouselIndex: accessedAnnotationIndex
                })
            }
        }

        return accessedAnnotationIndex
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        earColumnIndex,
        selectedSongIndex,
        selectedVerseIndex
    },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    toggleStore: { isCarouselShown },
    transientStore: { isEarShown }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    dotsBitNumber,
    selectedDotKeys,
    earColumnIndex,
    isCarouselShown,
    isEarShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updateScrollCarouselStore,
        updateScrollLyricStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationAccessDispatcher)
