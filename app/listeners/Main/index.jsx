// Singleton to listen for changes that affect presentation of main sections.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransientStore } from '../../redux/transient/action'
import {
    getIsShelfLeftShown,
    getIsOverlayingAnnotation,
    getIsOverlayShown
} from '../../helpers/main'
import { SHOWN } from '../../constants/options'
import { IS_ACTIVATED_SELECTOR } from '../../redux/activated/selectors'
import {
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR
} from '../../redux/lyric/selectors'

const mapStateToProps = state => {
    const {
            viewportStore: { isPhoneWidth },
            toggleStore: {
                isDotsSlideShown,
                isLyricExpanded,
                isScoreShown,
                isAboutShown
            },
            entranceStore: { canLyricCarouselEnter },
            sessionStore: { selectedWikiIndex },
            optionStore: {
                isLogueOverviewShown,
                selectedOverviewOption,
                selectedTipsOption
            }
        } = state,
        isActivated = IS_ACTIVATED_SELECTOR(state),
        lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
        isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)

    return {
        isPhoneWidth,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isAboutShown,
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue,
        isActivated,
        isLogueOverviewShown,
        selectedOverviewOption,
        selectedTipsOption,
        selectedWikiIndex
    }
}

class MainListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhoneWidth: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isAboutShown: PropTypes.bool.isRequired,
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,
        isActivated: PropTypes.bool.isRequired,
        isLogueOverviewShown: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate() {
        this._determineOverlayAndCarouselNav()
    }

    _determineOverlayAndCarouselNav() {
        const {
                isPhoneWidth,
                isDotsSlideShown,
                isLyricExpanded,
                lyricAnnotationIndex,
                isLyricLogue,
                isLogueOverviewShown,
                isScoreShown,
                isAboutShown,
                canLyricCarouselEnter,
                selectedOverviewOption,
                selectedTipsOption,
                selectedWikiIndex,
                isActivated
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
            }),

            overviewShown = selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN,

            isCarouselNavShowable =
                !isOverlayShown &&
                !overviewShown &&
                !tipsShown &&
                !isLyricLogue &&
                !isLyricExpanded &&
                !isActivated,

            isShelfLeftShown = getIsShelfLeftShown({
                isPhoneWidth,
                isDotsSlideShown,
                isLyricExpanded,
                isActivated,
                isOverlayShown,
                canLyricCarouselEnter,
                lyricAnnotationIndex,
                isLyricLogue,
                isLogueOverviewShown,
                overviewShown,
                tipsShown
            })

        this.props.updateTransientStore({
            isShelfLeftShown,
            isOverlayingAnnotation,
            isOverlayShown,
            isCarouselNavShowable
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
