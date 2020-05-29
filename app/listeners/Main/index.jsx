// Singleton to listen for changes that affect presentation of main sections.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransientStore } from '../../redux/transient/action'
import {
    getIsOverlayingAnnotation,
    getIsOverlayShown
} from '../../helpers/main'
import { LYRIC_ANNOTATION_INDEX_SELECTOR } from '../../redux/lyric/selectors'

const mapStateToProps = state => {
    const {
            viewportStore: { isPhoneWidth },
            toggleStore: {
                isLyricExpanded,
                isScoreShown,
                isAboutShown
            },
            sessionStore: { selectedWikiIndex }
        } = state,
        lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state)

    return {
        isPhoneWidth,
        isLyricExpanded,
        isScoreShown,
        isAboutShown,
        lyricAnnotationIndex,
        selectedWikiIndex
    }
}

class MainListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhoneWidth: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isAboutShown: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate() {
        this._determineOverlayAndCarouselNav()
    }

    _determineOverlayAndCarouselNav() {
        const {
                isPhoneWidth,
                isLyricExpanded,
                lyricAnnotationIndex,
                isScoreShown,
                isAboutShown,
                selectedWikiIndex
            } = this.props,

            isOverlayingAnnotation = getIsOverlayingAnnotation({
                isPhoneWidth,
                isLyricExpanded
            }),

            isOverlayShown = getIsOverlayShown({
                isOverlayingAnnotation,
                lyricAnnotationIndex,
                isScoreShown,
                isAboutShown,
                selectedWikiIndex
            })

        this.props.updateTransientStore({
            isOverlayingAnnotation,
            isOverlayShown
        })
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateTransientStore }
)(MainListener)
