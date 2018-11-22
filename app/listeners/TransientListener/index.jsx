// Singleton to listen for transient UI changes that affect no other state.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTransientStore } from 'flux/actions/transient'

import { getShowOverlay } from './helper'

import {
    SHOWN,
    OVERVIEW_OPTIONS,
    TIPS_OPTIONS
} from 'constants/options'

class TransientListener extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate() {
        this.determineOverlayAndCarouselNav()
    }

    determineOverlayAndCarouselNav() {
        const {
            deviceIndex,
            isLyricExpanded,
            renderedAnnotationIndex,
            isRenderedLogue,
            isScoreShown,
            isTitleShown,
            selectedOverviewIndex,
            selectedTipsIndex,
            selectedWikiIndex
        } = this.props

        const isOverlayShown = getShowOverlay({
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
                !isRenderedLogue
                && !isOverlayShown
                && !isLyricExpanded
                && !overviewShown
                && !tipsShown

        this.props.updateTransientStore({
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
        isScoreShown,
        isTitleShown,
        isLyricExpanded
    },
    renderedStore: {
        renderedAnnotationIndex,
        isRenderedLogue
    },
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex
}) => ({
    deviceIndex,
    isScoreShown,
    isTitleShown,
    isLyricExpanded,
    renderedAnnotationIndex,
    isRenderedLogue,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateTransientStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TransientListener)
