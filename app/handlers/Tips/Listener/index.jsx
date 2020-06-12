import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import {
    SHOWN,
    HIDDEN
} from '../../../constants/options'
import {
    mapLyricAnnotationIndex,
    mapLyricSongIndex
} from '../../../redux/lyric/selectors'
import {
    mapSelectedTipsOption,
    mapIsForcedShownOverview
} from '../../../redux/option/selectors'
import { mapIsSelectedLogue } from '../../../redux/selected/selectors'
import { mapIsTipsShowable } from '../../../redux/tips/selectors'
import { mapDeviceWidthIndex } from '../../../redux/viewport/selectors'

const mapStateToProps = state => {
    const
        isTipsShowable = mapIsTipsShowable(state),
        lyricSongIndex = mapLyricSongIndex(state),
        lyricAnnotationIndex = mapLyricAnnotationIndex(state),
        selectedTipsOption = mapSelectedTipsOption(state),
        isForcedShownOverview = mapIsForcedShownOverview(state),
        isSelectedLogue = mapIsSelectedLogue(state),
        deviceWidthIndex = mapDeviceWidthIndex(state)

    return {
        isSelectedLogue,
        selectedTipsOption,
        isForcedShownOverview,
        lyricAnnotationIndex,
        lyricSongIndex,
        deviceWidthIndex,
        isTipsShowable
    }
}

class TipsListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isForcedShownOverview: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        isTipsShowable: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleTipsUpdate()
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
            this._handleTipsUpdate()
        }
    }

    // TODO: Put this in reducer?
    _handleDeviceWidthChange(prevProps) {
        const {
                isTipsShowable,
                deviceWidthIndex,
                selectedTipsOption
            } = this.props,
            { deviceWidthIndex: prevDeviceWidthIndex } = prevProps

        if (deviceWidthIndex !== prevDeviceWidthIndex) {
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

    _handleTipsUpdate() {
        const {
            isTipsShowable,
            lyricAnnotationIndex
        } = this.props

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
                    selectedTipsOption: isTipsShowable ? SHOWN : HIDDEN
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

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsListener)
