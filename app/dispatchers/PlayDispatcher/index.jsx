// Child that knows rules to toggle admin.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayerStore } from 'flux/player/action'

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
        updatePlayerStore: PropTypes.func.isRequired,

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

        const isPlayingFromLogue = isSelectedLogue && isPlaying

        /**
         * Select first song if play button in logue is toggled on. In order
         * to keep player and song in sync, only dispatch song, and let song
         * handler send queued event to toggle play.
         */
        if (isPlayingFromLogue) {
            this.dispatchSong({
                isPlayingFromLogue: true,
                selectedSongIndex: 1
            })

        } else {
            this.props.updatePlayerStore({ queuedTogglePlay: true })
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
    audioStore: { playersBitNumber },
    playerStore: { isPlaying },
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
        updatePlayerStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayDispatcher)
