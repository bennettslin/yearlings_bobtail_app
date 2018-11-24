import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAudioStore } from 'flux/audio/action'
import { updateSessionStore } from 'flux/session/action'

import { getValueInBitNumber } from 'helpers/bitHelper'
import { getSongsNotLoguesCount } from 'helpers/dataHelper'

class AudioManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        updateAudioStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        selectSong: PropTypes.func.isRequired,
        toggleSelectedPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
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

    render() {
        return null
    }
}

const mapStateToProps = ({
    audioStore: {
        isPlaying,
        canPlayThroughs
    },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    }
}) => ({
    isPlaying,
    canPlayThroughs,
    selectedSongIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAudioStore,
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AudioManager)
