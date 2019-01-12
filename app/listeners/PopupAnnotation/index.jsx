// Singleton to listen for changes that make popup annotation visible.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransientStore } from 'flux/transient/action'

const mapStateToProps = ({
    lyricStore: {
        canLyricCarouselEnter,
        lyricAnnotationIndex
    },
    toggleStore: {
        isCarouselShown,
        isScoreShown,
        isAboutShown
    },
    transientStore: { isOverlayingAnnotation },
    sessionStore: { selectedWikiIndex }
}) => ({
    isCarouselShown,
    isScoreShown,
    isAboutShown,
    isOverlayingAnnotation,
    canLyricCarouselEnter,
    lyricAnnotationIndex,
    selectedWikiIndex
})

class PopupAnnotationListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isAboutShown: PropTypes.bool.isRequired,
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
                isCarouselShown,
                isOverlayingAnnotation,
                isScoreShown,
                isAboutShown,
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
                    isOverlayingAnnotation
                ) &&

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
