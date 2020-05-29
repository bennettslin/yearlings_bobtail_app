// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSelectedStore } from '../../redux/selected/action'
import { IS_PLAYING_SELECTOR } from '../../redux/audio/selectors'
import { getStartTimeForVerse } from '../../album/api/time'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_VERSE_INDEX_SELECTOR
} from '../../redux/selected/selectors'

const mapStateToProps = state => {
    const {
            sliderStore: { isSliderTouched }
        } = state,
        isPlaying = IS_PLAYING_SELECTOR(state),
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        selectedVerseIndex = SELECTED_VERSE_INDEX_SELECTOR(state)

    return {
        isPlaying,
        isSliderTouched,
        selectedSongIndex,
        selectedVerseIndex
    }
}

class AudioListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateSelectedStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._resetTimeUponPause(prevProps)
    }

    _resetTimeUponPause(prevProps) {
        const
            { isPlaying } = this.props,
            { isPlaying: wasPlaying } = prevProps

        // If just now paused, reset time to start of selected verse.
        if (!isPlaying && wasPlaying) {
            const {
                    selectedSongIndex,
                    selectedVerseIndex
                } = this.props,

                selectedTime = getStartTimeForVerse(
                    selectedSongIndex,
                    selectedVerseIndex
                )

            this.props.updateSelectedStore({ selectedTime })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateSelectedStore }
)(AudioListener)
