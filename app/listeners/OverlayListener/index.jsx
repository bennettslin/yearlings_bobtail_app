// Singleton to listen for changes that toggle overlay and related states.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTransientStore } from 'flux/transient/action'

import {
    getIsOverlayingAnnotation,
    getIsOverlayShown
} from './helper'

import {
    SHOWN,
    OVERVIEW_OPTIONS,
    TIPS_OPTIONS
} from 'constants/options'

class OverlayListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate() {
        this._determineOverlayAndCarouselNav()
    }

    _determineOverlayAndCarouselNav() {
        const {
            deviceIndex,
            isLyricExpanded,
            renderedAnnotationIndex,
            isRenderedLogue,
            isScoreShown,
            isTitleShown,
            selectedOverviewIndex,
            selectedTipsIndex,
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
                renderedAnnotationIndex,
                isScoreShown,
                isTitleShown,
                selectedWikiIndex
            }),

            overviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
            tipsShown = TIPS_OPTIONS[selectedTipsIndex] === SHOWN,

            isCarouselNavShowable =
                !isOverlayShown &&
                !overviewShown &&
                !tipsShown &&
                !isRenderedLogue &&
                !isLyricExpanded &&
                interactivatedVerseIndex < 0

        this.props.updateTransientStore({
            isOverlayingAnnotation,
            isOverlayShown,
            isCarouselNavShowable
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    toggleStore: {
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    renderedStore: {
        renderedAnnotationIndex,
        isRenderedLogue
    },
    sessionStore: {
        interactivatedVerseIndex,
        selectedOverviewIndex,
        selectedTipsIndex,
        selectedWikiIndex
    }
}) => ({
    deviceIndex,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    renderedAnnotationIndex,
    isRenderedLogue,
    interactivatedVerseIndex,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateTransientStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(OverlayListener)
