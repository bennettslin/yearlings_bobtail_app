import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from 'flux/option/action'

import { getNextOption } from '../../../helpers/options'

import { getShowTipForDevice } from '../../../album/api/tips'

class TipsDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        toggleShowsTipsImmediately: PropTypes.bool.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
        isTabletWidth: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchTips: this.dispatchTips
        })
    }

    // TODO: This is duplicated in the listener.
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

    dispatchTips = ({
        isToggled,
        tipsOption
    } = {}) => {
        const {
            isLyricLogue,
            toggleShowsTipsImmediately
        } = this.props

        // Don't allow toggling in logue, or if no tip for this device width.
        if (isLyricLogue || !this._getShowTipForDevice()) {
            return false
        }

        const selectedTipsOption = getNextOption({
            isToggled,
            toggleShows: toggleShowsTipsImmediately,
            prevOption: this.props.selectedTipsOption,
            nextOption: tipsOption
        })

        this.props.updateOptionStore({ selectedTipsOption })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    lyricStore: {
        isLyricLogue,
        lyricSongIndex
    },
    optionStore: { selectedTipsOption },
    transientStore: { toggleShowsTipsImmediately },
    viewportStore: {
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    }
}) => ({
    isLyricLogue,
    lyricSongIndex,
    selectedTipsOption,
    toggleShowsTipsImmediately,
    isPhoneWidth,
    isTabletWidth,
    isDesktopWidth
})

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsDispatcher)
