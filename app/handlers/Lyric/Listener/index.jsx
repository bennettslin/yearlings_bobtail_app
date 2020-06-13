// Singleton to listen for non-toggle events that require turning off score.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { mapIsLyricExpanded } from '../../../redux/toggle/selectors'
import { mapIsHeightlessLyric } from '../../../redux/viewport/selectors'

const mapStateToProps = state => {
    const
        isLyricExpanded = mapIsLyricExpanded(state),
        isHeightlessLyric = mapIsHeightlessLyric(state)

    return {
        isLyricExpanded,
        isHeightlessLyric
    }
}

class LyricListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricExpanded: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkLyricExpand(prevProps)
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
            const scrollLyricLog =
                lyricExpandChanged ?
                    `Lyric ${isLyricExpanded ? 'expanded' : 'collapsed'}.` :
                    `Lyric ${isHeightlessLyric ? 'heightless' : 'heighted'}.`

            this.props.updateScrollLyricStore({
                scrollLyricLog,
                scrollLyricByVerse: true,
                scrollLyricAlways: true
            })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateToggleStore
    }
)(LyricListener)
