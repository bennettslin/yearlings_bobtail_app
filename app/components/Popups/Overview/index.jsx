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
import { mapIsLyricLogue } from '../../../redux/lyric/selectors'
import {
    mapIsLogueOverviewShown,
    mapSelectedOverviewOption,
    mapSelectedTipsOption
} from '../../../redux/option/selectors'
import { mapIsOverlayShown } from '../../../redux/transient/selectors'
import './style'

const mapStateToProps = state => {
    const {
            entranceStore: { canLyricCarouselEnter }
        } = state,
        isLyricLogue = mapIsLyricLogue(state),
        isLogueOverviewShown = mapIsLogueOverviewShown(state),
        selectedOverviewOption = mapSelectedOverviewOption(state),
        selectedTipsOption = mapSelectedTipsOption(state),
        isOverlayShown = mapIsOverlayShown(state)

    return {
        canLyricCarouselEnter,
        isOverlayShown,
        isLogueOverviewShown,
        selectedOverviewOption,
        selectedTipsOption,
        isLyricLogue
    }
}

class OverviewPopup extends PureComponent {

    static defaultProps = {
        inMain: false
    }

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,
        isLogueOverviewShown: PropTypes.bool.isRequired,
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
                isOverlayShown,
                isLogueOverviewShown,
                selectedOverviewOption,
                selectedTipsOption,
                canLyricCarouselEnter
            } = this.props,

            isVisibleBySection = getIsOverviewVisibleBySection({
                inMain,
                isLyricLogue
            }),

            isVisibleBySong = getIsOverviewVisibleBySong({
                isLyricLogue,
                isOverlayShown,
                isLogueOverviewShown,
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
                    popupName: 'OverviewPopup',
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
