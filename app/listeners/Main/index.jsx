// Singleton to listen for changes that affect presentation of main sections.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransientStore } from 'flux/transient/action'

import {
    getIsShelfLeftShown,
    getIsOverlayingAnnotation,
    getIsOverlayShown,
    getToggleShowsImmediately
} from './helper'

import { SHOWN } from 'constants/options'

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
        interactivatedVerseIndex: PropTypes.number.isRequired,
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
                interactivatedVerseIndex
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
                interactivatedVerseIndex < 0,

            isShelfLeftShown = getIsShelfLeftShown({
                isPhoneWidth,
                isDotsSlideShown,
                isLyricExpanded,
                interactivatedVerseIndex,
                isOverlayShown,
                canLyricCarouselEnter,
                lyricAnnotationIndex,
                isLyricLogue,
                isLogueOverviewShown,
                overviewShown,
                tipsShown
            }),

            {
                toggleShowsOverviewImmediately,
                toggleShowsTipsImmediately

            } = getToggleShowsImmediately({
                lyricAnnotationIndex,
                isDotsSlideShown,
                isOverlayShown,
                isLyricExpanded,
                interactivatedVerseIndex,
                overviewShown,
                tipsShown
            })

        this.props.updateTransientStore({
            isShelfLeftShown,
            isOverlayingAnnotation,
            isOverlayShown,
            isCarouselNavShowable,
            toggleShowsOverviewImmediately,
            toggleShowsTipsImmediately
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    viewportStore: { isPhoneWidth },
    toggleStore: {
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isAboutShown
    },
    lyricStore: {
        canLyricCarouselEnter,
        lyricAnnotationIndex,
        isLyricLogue
    },
    sessionStore: {
        interactivatedVerseIndex,
        selectedWikiIndex
    },
    optionStore: {
        isLogueOverviewShown,
        selectedOverviewOption,
        selectedTipsOption
    }
}) => ({
    isPhoneWidth,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isAboutShown,
    canLyricCarouselEnter,
    lyricAnnotationIndex,
    isLyricLogue,
    interactivatedVerseIndex,
    isLogueOverviewShown,
    selectedOverviewOption,
    selectedTipsOption,
    selectedWikiIndex
})

export default connect(
    mapStateToProps,
    { updateTransientStore }
)(MainListener)
