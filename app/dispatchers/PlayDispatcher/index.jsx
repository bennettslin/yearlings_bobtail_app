// Child that knows rules to toggle admin.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAudioStore } from '../../redux/audio/action'
import SongDispatcher from '../../handlers/Song/Dispatcher'
import { populateRefs } from '../../helpers/ref'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'
import { IS_PLAYING_SELECTOR } from '../../redux/audio/selectors'
import { PLAYERS_BIT_NUMBER_SELECTOR } from '../../redux/players/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    IS_SELECTED_LOGUE_SELECTOR
} from '../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        isPlaying = IS_PLAYING_SELECTOR(state),
        playersBitNumber = PLAYERS_BIT_NUMBER_SELECTOR(state),
        selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
        isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state)

    return {
        isPlaying,
        playersBitNumber,
        selectedSongIndex,
        isSelectedLogue
    }
}

class PlayDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateAudioStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchPlay: this.dispatchPlay
        })
    }

    dispatchPlay = (isPlaying = !this.props.isPlaying) => {
        const {
                selectedSongIndex,
                isSelectedLogue,
                playersBitNumber
            } = this.props,

            playerCanPlayThrough = getPlayerCanPlayThroughFromBit({
                songIndex: selectedSongIndex,
                playersBitNumber
            })

        // Do not toggle play if player is not ready to play through.
        if (!playerCanPlayThrough) {
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

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <SongDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

export default connect(
    mapStateToProps,
    { updateAudioStore }
)(PlayDispatcher)
