import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setIsPlaying } from 'flux/actions/audio'
import { selectAudioOptionIndex } from 'flux/actions/storage'

import { getValueInBitNumber } from 'helpers/bitHelper'
import {
    getSongIsLogue,
    getSongsNotLoguesCount
} from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { AUDIO_OPTIONS } from 'constants/options'

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
        setRef: PropTypes.func.isRequired,
        selectSong: PropTypes.func.isRequired,
        toggleSelectedPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate(prevProps) {
        const { selectedSongIndex } = this.props

        // If selecting a logue, turn off play.
        if (selectedSongIndex !== prevProps.selectedSongIndex) {

            if (getSongIsLogue(selectedSongIndex)) {
                this.props.setIsPlaying(false)
            }
        }
    }

    togglePlay(isPlaying = !this.props.isPlaying) {

        const {
                selectedSongIndex,
                canPlayThroughs
            } = this.props,

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
            this.props.selectSong({
                selectedSongIndex: 1
            })
        }

        // Player manager will decide whether to set isPlaying in store.
        this.props.toggleSelectedPlayer(isPlaying)

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
    selectedStore: { selectedSongIndex }
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
