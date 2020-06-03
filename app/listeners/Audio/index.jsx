// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSelectedStore } from '../../redux/selected/action'
import { mapIsPlaying } from '../../redux/audio/selectors'
import { getStartTimeForVerse } from '../../api/album/time'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex
} from '../../redux/selected/selectors'
import { mapIsSliderTouched } from '../../redux/slider/selectors'

const mapStateToProps = state => {
    const
        isPlaying = mapIsPlaying(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        isSliderTouched = mapIsSliderTouched(state)

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
