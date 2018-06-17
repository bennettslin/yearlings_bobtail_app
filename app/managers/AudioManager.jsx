import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setIsPlaying } from '../redux/actions/audio'
import { selectAudioOptionIndex } from '../redux/actions/storage'

import { getValueInBitNumber } from '../helpers/bitHelper'
import {
    getSongIsLogue,
    getSongsNotLoguesCount
} from '../helpers/dataHelper'

import { AUDIO_OPTIONS } from '../constants/options'


class AudioManager extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        setIsPlaying: PropTypes.func.isRequired,
        selectAudioOptionIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        selectSong: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    togglePlay(isPlaying = !this.props.isPlaying) {

        const { selectedSongIndex,
                canPlayThroughs } = this.props

        const
            isLogue = getSongIsLogue(this.props.selectedSongIndex),

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,

                // If logue, select first song.
                key: isLogue ? 1 : selectedSongIndex
            })

        // Do not toggle play if player is not ready to play through.
        if (!songCanPlayThrough) {
            return false
        }

        // Select first song if play button in logue is toggled on.
        if (isLogue && isPlaying) {
            this.selectSong({
                selectedSongIndex: 1
            })
        }

        this.props.setIsPlaying(isPlaying)
        return true
    }

    selectAudioOption(
        selectedAudioOptionIndex =
            (this.props.selectedAudioOptionIndex + 1) % AUDIO_OPTIONS.length
    ) {
        // If no argument passed, then just toggle amongst audio options.

        this.props.selectAudioOptionIndex(selectedAudioOptionIndex)
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    isPlaying,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex
}) => ({
    isPlaying,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsPlaying,
        selectAudioOptionIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AudioManager)
