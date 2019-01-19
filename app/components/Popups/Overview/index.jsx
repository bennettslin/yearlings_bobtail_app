// Popup container for overview section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Overview from '../../Overview'
import Popup from '../../Popup'

import {
    getIsOverviewVisibleBySection,
    getIsOverviewVisibleBySong
} from './helper'

const mapStateToProps = ({
    responsiveStore: { isHeightlessLyric },
    lyricStore: { canLyricCarouselEnter },
    transientStore: { isOverlayShown },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    lyricStore: { isLyricLogue }
}) => ({
    isHeightlessLyric,
    canLyricCarouselEnter,
    isOverlayShown,
    selectedOverviewOption,
    selectedTipsOption,
    isLyricLogue
})

class OverviewPopup extends PureComponent {

    static defaultProps = {
        inMain: false
    }

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        canLyricCarouselEnter: PropTypes.bool.isRequired,

        // From parent.
        inMain: PropTypes.bool.isRequired
    }

    render() {
        const
            {
                inMain,
                isLyricLogue,
                isHeightlessLyric,
                isOverlayShown,
                selectedOverviewOption,
                selectedTipsOption,
                canLyricCarouselEnter
            } = this.props,

            isVisibleBySection = getIsOverviewVisibleBySection({
                inMain,
                isLyricLogue,
                isHeightlessLyric
            }),

            isVisibleBySong = getIsOverviewVisibleBySong({
                isLyricLogue,
                isOverlayShown,
                selectedTipsOption,
                selectedOverviewOption
            }),

            isVisible =
                canLyricCarouselEnter &&
                isVisibleBySection &&
                isVisibleBySong

        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                bounceAnimate
                hasNarrowPadding
                noAbsoluteFull
                {...{
                    popupName: 'Overview',
                    isVisible,
                    noFlexCentre: inMain
                }}
            >
                <Overview />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(OverviewPopup)
