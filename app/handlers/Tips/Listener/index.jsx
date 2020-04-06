import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateOptionStore } from 'flux/option/action'

import { getShowTipForDevice } from '../../../album/api/tips'

import {
    SHOWN,
    HIDDEN
} from 'constants/options'

class TipsListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isRoutingComplete: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isForcedShownOverview: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
        isTabletWidth: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleRoutingComplete(prevProps)
        this._handleSongChange(prevProps)
        this._handleForcedOverview(prevProps)
        this._handleDeviceWidthChange(prevProps)
    }

    _handleRoutingComplete(prevProps) {
        const
            { isRoutingComplete } = this.props,
            { isRoutingComplete: wasRoutingComplete } = prevProps

        if (isRoutingComplete && !wasRoutingComplete) {
            this._handleTipsUpdate()
        }
    }

    _handleSongChange(prevProps) {
        const
            { lyricSongIndex } = this.props,
            { lyricSongIndex: prevSongIndex } = prevProps

        /**
         * Technically, this should also check for updates to the viewport
         * width as well, in case the tip is not to be shown for certain
         * widths. However, this should happen so infrequently that I won't
         * bother for now.
         */
        if (lyricSongIndex !== prevSongIndex) {
            this._handleTipsUpdate()
        }
    }

    _handleTipsUpdate() {
        const { lyricAnnotationIndex } = this.props

        // There also cannot be a selected annotation.
        if (!lyricAnnotationIndex) {
            const {
                isSelectedLogue,
                selectedTipsOption
            } = this.props

            // Show tips for new song.
            if (
                !isSelectedLogue && (
                    selectedTipsOption === HIDDEN ||
                    selectedTipsOption === SHOWN
                )
            ) {
                // Ensure this song's tip can be shown for this viewport width.
                const showTipForDevice = this._getShowTipForDevice()

                this.props.updateOptionStore({
                    selectedTipsOption: showTipForDevice ? SHOWN : HIDDEN,
                    ...showTipForDevice && { isSongShownTips: true }
                })

            // If shown, hide when now in logue.
            } else if (isSelectedLogue && selectedTipsOption === SHOWN) {
                this.props.updateOptionStore({
                    selectedTipsOption: HIDDEN
                })
            }
        }
    }

    _handleForcedOverview(prevProps) {
        const
            {
                isForcedShownOverview,
                selectedTipsOption
            } = this.props,
            { isForcedShownOverview: wasForcedShownOverview } = prevProps

        if (
            selectedTipsOption === SHOWN &&
            isForcedShownOverview && !wasForcedShownOverview
        ) {
            this.props.updateOptionStore({
                selectedTipsOption: HIDDEN,
                isForcedShownOverview: false
            })
        }
    }

    _handleDeviceWidthChange(prevProps) {
        const {
                deviceWidthIndex,
                selectedTipsOption
            } = this.props,
            { deviceWidthIndex: prevDeviceWidthIndex } = prevProps

        if (
            selectedTipsOption === SHOWN &&
            deviceWidthIndex !== prevDeviceWidthIndex &&
            !this._getShowTipForDevice()
        ) {
            this.props.updateOptionStore({
                selectedTipsOption: HIDDEN
            })
        }
    }

    // TODO: This is duplicated in the dispatcher.
    _getShowTipForDevice() {
        const {
            lyricSongIndex,
            isPhoneWidth,
            isTabletWidth,
            isDesktopWidth
        } = this.props

        return getShowTipForDevice({
            songIndex: lyricSongIndex,
            isPhoneWidth,
            isTabletWidth,
            isDesktopWidth
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    lyricStore: {
        lyricSongIndex,
        lyricAnnotationIndex
    },
    selectedStore: {
        isRoutingComplete,
        isSelectedLogue
    },
    optionStore: {
        selectedTipsOption,
        isForcedShownOverview
    },
    viewportStore: {
        deviceWidthIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    }
}) => ({
    isRoutingComplete,
    isSelectedLogue,
    selectedTipsOption,
    isForcedShownOverview,
    lyricSongIndex,
    lyricAnnotationIndex,
    deviceWidthIndex,
    isPhoneWidth,
    isTabletWidth,
    isDesktopWidth
})

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsListener)
