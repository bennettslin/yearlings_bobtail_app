// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'

import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { getAnnotationIndexForVerseIndex } from './helper'

class AnnotationAccessDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isEarShown: PropTypes.bool.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchAccessedAnnotation = this.dispatchAccessedAnnotation
    }

    dispatchAccessedAnnotation = ({
        verseIndex = this.props.selectedVerseIndex,
        annotationIndex,
        direction
    } = {}) => {

        const {
                selectedSongIndex,
                dotsBitNumber,
                earColumnIndex,
                isEarShown
            } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            accessedAnnotationIndex =
                annotationIndex ?

                    // If given an annotation index, start from there.
                    getAnnotationIndexForDirection({
                        currentAnnotationIndex: annotationIndex,
                        selectedSongIndex,
                        selectedDotKeys,
                        earColumnIndex,
                        isEarShown,
                        direction

                    /**
                     * Otherwise, start from the selected verse, and grab the
                     * first valid annotation index if going left, or the last
                     * if going right.
                     */
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
                queuedScrollLyricLog: 'Access lyric annotation.',
                queuedScrollLyricIndex: accessedAnnotationIndex
            })
            this.props.updateScrollCarouselStore({
                queuedScrollCarouselLog: 'Access carousel annotation.',
                queuedScrollCarouselIndex: accessedAnnotationIndex
            })
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
    dotsStore: { dotsBitNumber },
    transientStore: { isEarShown }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    dotsBitNumber,
    earColumnIndex,
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
