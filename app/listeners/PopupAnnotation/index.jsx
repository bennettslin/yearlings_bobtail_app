// Singleton to listen for changes that make popup annotation visible.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mapCanLyricCarouselEnter } from '../../redux/entrance/selectors'
import { mapLyricAnnotationIndex } from '../../redux/lyric/selectors'
import { updateTransientStore } from '../../redux/transient/action'
import { mapCanCarouselMount } from '../../redux/mount/selectors'
import { mapIsOverlayingAnnotation } from '../../redux/transient/selectors'
import { mapIsWikiShown } from '../../redux/session/selectors'
import {
    mapIsCarouselShown,
    mapIsScoreShown,
    mapIsAboutShown
} from '../../redux/toggle/selectors'

const mapStateToProps = state => {
    const
        canLyricCarouselEnter = mapCanLyricCarouselEnter(state),
        lyricAnnotationIndex = mapLyricAnnotationIndex(state),
        canCarouselMount = mapCanCarouselMount(state),
        isOverlayingAnnotation = mapIsOverlayingAnnotation(state),
        isWikiShown = mapIsWikiShown(state),
        isCarouselShown = mapIsCarouselShown(state),
        isScoreShown = mapIsScoreShown(state),
        isAboutShown = mapIsAboutShown(state)

    return {
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselMount,
        isOverlayingAnnotation,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isWikiShown
    }
}

class PopupAnnotationListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isAboutShown: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        canCarouselMount: PropTypes.bool.isRequired,
        isOverlayingAnnotation: PropTypes.bool.isRequired,
        isWikiShown: PropTypes.bool.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handlePopupAnnotationVisible()
        this._handlePopupAnnotationChange(prevProps)
    }

    _handlePopupAnnotationVisible() {
        const {
                canLyricCarouselEnter,
                lyricAnnotationIndex,
                isAboutShown,
                isScoreShown,
                isCarouselShown,
                canCarouselMount,
                isOverlayingAnnotation,
                isWikiShown
            } = this.props,

            isPopupAnnotationVisible =
                canLyricCarouselEnter &&
                Boolean(lyricAnnotationIndex) &&

                /**
                 * If an annotation is selected, always show in popup if
                 * it's a phone or lyric is expanded.
                 */
                (
                    !isCarouselShown ||
                    !canCarouselMount ||
                    isOverlayingAnnotation
                ) &&

                /**
                 * These are here because they only hide, not close, the
                 * popup annotation.
                 */
                !isScoreShown &&
                !isAboutShown &&
                !isWikiShown

        // TODO: Move this into selector.
        this.props.updateTransientStore({ isPopupAnnotationVisible })
    }

    _handlePopupAnnotationChange(prevProps) {
        /**
         * This persists the popup annotation while it is fading out.
         */
        const {
                lyricAnnotationIndex,
                isCarouselShown
            } = this.props,
            {
                lyricAnnotationIndex: prevAnnotationIndex,
                isCarouselShown: wasCarouselShown
            } = prevProps

        if (
            // If there is a selected annotation...
            lyricAnnotationIndex &&
            (
                // ... and annotation index has changed...
                lyricAnnotationIndex !== prevAnnotationIndex
            ) || (
                // ... or toggling to popup from carousel...
                !isCarouselShown && wasCarouselShown
            )
        ) {
            // ... then persist the popup annotation index.
            // TODO: Move this into selector.
            this.props.updateTransientStore({
                popupAnnotationIndex: lyricAnnotationIndex
            })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateTransientStore }
)(PopupAnnotationListener)
