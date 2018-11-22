import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setIsPlaying } from 'flux/audio/action'
import { selectAudioOptionIndex } from 'flux/storage/action'

import { getValueInBitNumber } from 'helpers/bitHelper'
import { getSongsNotLoguesCount } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { AUDIO_OPTIONS } from 'constants/options'

class AudioManager extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        selectedAudioOptionIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

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
        const
            { isSelectedLogue } = this.props,
            { isSelectedLogue: wasSelectedLogue } = prevProps

        // If selecting a logue, turn off play.
        if (isSelectedLogue && !wasSelectedLogue) {
            this.props.setIsPlaying(false)
        }
    }

    togglePlay(isPlaying = !this.props.isPlaying) {

        const {
                selectedSongIndex,
                isSelectedLogue,
                canPlayThroughs
            } = this.props,

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,

                // If logue, select first song.
                key: isSelectedLogue ? 1 : selectedSongIndex
            })

        // Do not toggle play if player is not ready to play through.
        if (!songCanPlayThrough) {
            return false
        }

        const isPlayingFromLogue = isSelectedLogue && isPlaying

        // Select first song if play button in logue is toggled on.
        if (isPlayingFromLogue) {
            this.props.selectSong({
                selectedSongIndex: 1
            })
        }

        // Player manager will decide whether to set isPlaying in store.
        this.props.toggleSelectedPlayer({
            isPlaying,

            // Tell player to play the first song if from logue.
            ...isPlayingFromLogue && {
                selectedSongIndex: 1
            }
        })

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
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    }
}) => ({
    isPlaying,
    canPlayThroughs,
    selectedAudioOptionIndex,
    selectedSongIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsPlaying,
        selectAudioOptionIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AudioManager)
