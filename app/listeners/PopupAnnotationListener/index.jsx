// Singleton to listen for changes that make popup annotation visible.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTransientStore } from 'flux/transient/action'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedAnnotationIndex },
    toggleStore: {
        isCarouselShown,
        isScoreShown,
        isTitleShown
    },
    transientStore: { isOverlayingAnnotation },
    sessionStore: { selectedWikiIndex }
}) => ({
    isCarouselShown,
    isScoreShown,
    isTitleShown,
    isOverlayingAnnotation,
    canCarouselRender,
    renderedAnnotationIndex,
    selectedWikiIndex
})

class PopupAnnotationListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
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
                canCarouselRender,
                renderedAnnotationIndex,
                isCarouselShown,
                isOverlayingAnnotation,
                isScoreShown,
                isTitleShown,
                selectedWikiIndex
            } = this.props,

            isPopupAnnotationVisible =
                canCarouselRender &&
                Boolean(renderedAnnotationIndex) &&

                /**
                 * If an annotation is selected, always show in popup if
                 * it's a phone or lyric is expanded.
                 */
                (
                    !isCarouselShown ||
                    isOverlayingAnnotation
                ) &&

                !isScoreShown &&
                !isTitleShown &&
                !selectedWikiIndex

        this.props.updateTransientStore({ isPopupAnnotationVisible })
    }

    _handlePopupAnnotationChange(prevProps) {
        /**
         * This persists the popup annotation while it is fading out.
         */
        const {
            renderedAnnotationIndex,
            isCarouselShown
        } = this.props

        if (
            // If there is a selected annotation...
            renderedAnnotationIndex &&
            (
                // ... and annotation index has changed...
                renderedAnnotationIndex !==
                prevProps.renderedAnnotationIndex
            ) || (
                // ... or toggling from carousel to popup...
                !isCarouselShown &&
                prevProps.isCarouselShown
            )
        ) {
            // ... then persist the popup annotation index.
            this.props.updateTransientStore({
                popupAnnotationIndex: renderedAnnotationIndex
            })
        }
    }

    render() {
        return null
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateTransientStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PopupAnnotationListener)
