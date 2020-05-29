// Singleton to listen for changes that make popup annotation visible.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LYRIC_ANNOTATION_INDEX_SELECTOR } from '../../redux/lyric/selectors'
import { updateTransientStore } from '../../redux/transient/action'
import { CAN_CAROUSEL_MOUNT_SELECTOR } from '../../redux/mount/selectors'

const mapStateToProps = state => {
    const {
            entranceStore: { canLyricCarouselEnter },
            toggleStore: {
                isAboutShown,
                isScoreShown,
                isCarouselShown
            },
            transientStore: { isOverlayingAnnotation },
            sessionStore: { selectedWikiIndex }
        } = state,
        lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
        canCarouselMount = CAN_CAROUSEL_MOUNT_SELECTOR(state)

    return {
        isAboutShown,
        isScoreShown,
        isCarouselShown,
        canCarouselMount,
        isOverlayingAnnotation,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        selectedWikiIndex
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
        selectedWikiIndex: PropTypes.number.isRequired,
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
                selectedWikiIndex
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
                !selectedWikiIndex

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
