// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { getAnnotationIndexForDirection } from '../../../helpers/annotation'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { getAnnotationIndexForVerseIndex } from './helper'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'
import { IS_EAR_SHOWN_SELECTOR } from '../../../redux/transient/selectors'

const mapStateToProps = state => {
    const {
            selectedStore: {
                earColumnIndex,
                selectedSongIndex,
                selectedVerseIndex
            }
        } = state,
        dotsBitNumber = DOTS_BIT_NUMBER_SELECTOR(state),
        isEarShown = IS_EAR_SHOWN_SELECTOR(state)

    return {
        selectedSongIndex,
        selectedVerseIndex,
        dotsBitNumber,
        earColumnIndex,
        isEarShown
    }
}

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
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchAccessedAnnotation: this.dispatchAccessedAnnotation
        })
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
        if (direction && accessedAnnotationIndex > 0) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog:
                    `Direction access annotation ${accessedAnnotationIndex}.`,
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

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateScrollCarouselStore,
        updateScrollLyricStore
    }
)(AnnotationAccessDispatcher)
