// Singleton to listen for non-toggle events that require turning off score.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateToggleStore } from 'flux/toggle/action'

class LyricListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._collapseLyricIfNeeded(prevProps)
        this._checkLyricExpand(prevProps)
    }

    _collapseLyricIfNeeded(prevProps) {
        const
            {
                isLyricExpandable,
                isSelectedLogue
            } = this.props,
            {
                isLyricExpandable: wasLyricExpandable,
                isSelectedLogue: wasSelectedLogue
            } = prevProps

        if (
            (isSelectedLogue && !wasSelectedLogue) ||
            (!isLyricExpandable && wasLyricExpandable)
        ) {
            this.props.updateToggleStore({ isLyricExpanded: false })
        }
    }

    _checkLyricExpand(prevProps) {
        /**
         * If collapsing or expanding lyric, or going from heightless to
         * heighted, scroll lyric.
         */

        const
            {
                isLyricExpanded,
                isHeightlessLyric
            } = this.props,
            {
                isLyricExpanded: wasLyricExpanded,
                isHeightlessLyric: wasLyricHeightless
            } = prevProps,

            lyricExpandChanged = isLyricExpanded !== wasLyricExpanded,
            heightlessLyricChanged = !isHeightlessLyric && wasLyricHeightless

        if (
            lyricExpandChanged || heightlessLyricChanged
        ) {
            const queuedScrollLyricLog =
                lyricExpandChanged ?
                    `Lyric ${isLyricExpanded ? 'expanded' : 'collapsed'}.` :
                    `Lyric ${isHeightlessLyric ? 'heightless' : 'heighted'}.`

            this.props.updateScrollLyricStore({
                queuedScrollLyricLog,
                queuedScrollLyricByVerse: true,
                queuedScrollLyricAlways: true
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isLyricExpanded },
    responsiveStore: {
        isLyricExpandable,
        isHeightlessLyric
    },
    selectedStore: { isSelectedLogue }
}) => ({
    isLyricExpanded,
    isLyricExpandable,
    isHeightlessLyric,
    isSelectedLogue
})

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateToggleStore
    }
)(LyricListener)
