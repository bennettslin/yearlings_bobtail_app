// Singleton to listen for changes that affect presentation of main sections.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransientStore } from 'flux/transient/action'

import {
    getIsOverlayingAnnotation,
    getIsOverlayShown
} from './helper'

import { SHOWN } from 'constants/options'

class MainListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
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
            deviceIndex,
            isDotsSlideShown,
            isLyricExpanded,
            lyricAnnotationIndex,
            isLyricLogue,
            isScoreShown,
            isTitleShown,
            selectedOverviewOption,
            selectedTipsOption,
            selectedWikiIndex,
            interactivatedVerseIndex
        } = this.props

        const isOverlayingAnnotation = getIsOverlayingAnnotation({
                deviceIndex,
                isLyricExpanded
            }),

            isOverlayShown = getIsOverlayShown({
                deviceIndex,
                isLyricExpanded,
                lyricAnnotationIndex,
                isScoreShown,
                isTitleShown,
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

            initialToggleConditions =
                Boolean(lyricAnnotationIndex) ||
                isDotsSlideShown ||
                isOverlayShown ||
                isLyricExpanded ||
                interactivatedVerseIndex > -1,

            // Toggle overview immediately under these conditions.
            toggleShowsOverviewImmediately =
                tipsShown || initialToggleConditions,

            // Toggle tips immediately under these conditions.
            toggleShowsTipsImmediately =
                (!tipsShown && overviewShown) || initialToggleConditions

        this.props.updateTransientStore({
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
    deviceStore: { deviceIndex },
    toggleStore: {
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    lyricStore: {
        lyricAnnotationIndex,
        isLyricLogue
    },
    sessionStore: {
        interactivatedVerseIndex,
        selectedWikiIndex
    },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    }
}) => ({
    deviceIndex,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    lyricAnnotationIndex,
    isLyricLogue,
    interactivatedVerseIndex,
    selectedOverviewOption,
    selectedTipsOption,
    selectedWikiIndex
})

export default connect(
    mapStateToProps,
    { updateTransientStore }
)(MainListener)
