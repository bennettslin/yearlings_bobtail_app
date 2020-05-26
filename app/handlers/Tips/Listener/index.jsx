import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateOptionStore } from '../../../redux/option/action'
import { updateTransientStore } from '../../../redux/transient/action'

import { getShowTipForDevice } from '../../../album/api/tips'

import {
    SHOWN,
    HIDDEN
} from '../../../constants/options'

class TipsListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isForcedShownOverview: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
        isTabletWidth: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleTipsUpdate(this._getIsTipsShowable())
    }

    componentDidUpdate(prevProps) {
        this._handleSongChange(prevProps)
        this._handleForcedOverview(prevProps)
        this._handleDeviceWidthChange(prevProps)
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
            const isTipsShowable = this._getIsTipsShowable()
            this._handleTipsUpdate(isTipsShowable)
        }
    }

    _getIsTipsShowable() {
        const {
                lyricSongIndex,
                isPhoneWidth,
                isTabletWidth,
                isDesktopWidth
            } = this.props,

            // Ensure this song's tip can be shown for this viewport width.
            isTipsShowable = getShowTipForDevice({
                songIndex: lyricSongIndex,
                isPhoneWidth,
                isTabletWidth,
                isDesktopWidth
            })

        this.props.updateTransientStore({
            isTipsShowable
        })

        return isTipsShowable
    }

    _handleDeviceWidthChange(prevProps) {
        const {
                deviceWidthIndex,
                selectedTipsOption
            } = this.props,
            { deviceWidthIndex: prevDeviceWidthIndex } = prevProps

        if (deviceWidthIndex !== prevDeviceWidthIndex) {
            const isTipsShowable = this._getIsTipsShowable()
            if (
                !isTipsShowable &&
                selectedTipsOption === SHOWN
            ) {
                this.props.updateOptionStore({
                    selectedTipsOption: HIDDEN
                })
            }
        }
    }

    _handleTipsUpdate(isTipsShowable) {
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
                this.props.updateOptionStore({
                    selectedTipsOption: isTipsShowable ? SHOWN : HIDDEN,
                    ...isTipsShowable && { isSongShownTips: true }
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

    render() {
        return null
    }
}

const mapStateToProps = state => {
    const {
        lyricStore: {
            lyricSongIndex,
            lyricAnnotationIndex
        },
        selectedStore: {
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
    } = state

    return {
        isSelectedLogue,
        selectedTipsOption,
        isForcedShownOverview,
        lyricSongIndex,
        lyricAnnotationIndex,
        deviceWidthIndex,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    }
}

export default connect(
    mapStateToProps,
    {
        updateOptionStore,
        updateTransientStore
    }
)(TipsListener)
