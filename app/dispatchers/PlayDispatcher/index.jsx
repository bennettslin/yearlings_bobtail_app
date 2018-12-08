// Child that knows rules to toggle admin.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAudioStore } from 'flux/audio/action'

import SongDispatcher from '../../handlers/SongHandler/Dispatcher'

import { getValueInBitNumber } from 'helpers/bit'
import { getSongsNotLoguesCount } from 'helpers/data'

class PlayDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateAudioStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchPlay = this.dispatchPlay
    }

    dispatchPlay = (isPlaying = !this.props.isPlaying) => {
        const {
                selectedSongIndex,
                isSelectedLogue,
                playersBitNumber
            } = this.props,

            songCanPlayThrough = getValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: playersBitNumber,

                // If logue, select first song.
                key: isSelectedLogue ? 1 : selectedSongIndex
            })

        // Do not toggle play if player is not ready to play through.
        if (!songCanPlayThrough) {
            return false
        }

        const isPlayFromLogue = isSelectedLogue && isPlaying

        /**
         * Select first song if play button in logue is toggled on. In order
         * to keep player and song in sync, only dispatch song, and let song
         * handler send queued event to toggle play.
         */
        if (isPlayFromLogue) {
            this.dispatchSong({
                isPlayFromLogue: true,
                selectedSongIndex: 1
            })

        } else {
            this.props.updateAudioStore({ queuedTogglePlay: true })
        }

        return true
    }

    render() {
        return (
            <SongDispatcher {...{ parentThis: this }} />
        )
    }
}

const mapStateToProps = ({
    playersStore: { playersBitNumber },
    audioStore: { isPlaying },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    }
}) => ({
    isPlaying,
    playersBitNumber,
    selectedSongIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAudioStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayDispatcher)
