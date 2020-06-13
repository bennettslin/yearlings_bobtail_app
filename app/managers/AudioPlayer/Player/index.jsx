// Manager for audio players.
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { updateAudioStore } from '../../../redux/audio/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import PlayerDispatcher from './Dispatcher'
import PlayerListener from './Listener'
import TimeVerseDispatcher from '../../../dispatchers/TimeVerse'
import Player from './Player'
import { getSongNotLogueIndices } from '../../../api/album/songs'
import { getPlayersCanPlayThroughFromBit } from '../../../helpers/player'
import { getTimeInVerseStatus } from './helper'
import { mapIsPlaying } from '../../../redux/audio/selectors'
import {
    mapPlayersBit,
    mapNextPlayerToRender,
    getMapPlayerShouldRender
} from '../../../redux/players/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapSelectedTime
} from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        isPlaying = mapIsPlaying(state),
        playersBit = mapPlayersBit(state),
        nextPlayerToRender = mapNextPlayerToRender(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        selectedTime = mapSelectedTime(state)

    return {
        isPlaying,
        selectedSongIndex,
        selectedVerseIndex,
        selectedTime,
        playersBit,
        nextPlayerToRender
    }
}

// Kind of silly, but easiest approach for now.
const LOGUE_DUMMY_PLAYER = {
    promiseToPlay() {},
    askToPause() {}
}

class PlayerManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        playersBit: PropTypes.number.isRequired,
        nextPlayerToRender: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,

        // From parent.
        getToggleSelectedPlayer: PropTypes.func.isRequired,
        handleSongEnd: PropTypes.func.isRequired
    }

    // Initialise player refs.
    playerChildren = {}

    // Forward this ref.
    componentDidMount() {
        this.props.getToggleSelectedPlayer(this.toggleSelectedPlayer)
    }

    // TODO: Get this from selector
    _playerShouldRender(songIndex) {
        const {
                playersBit,
                nextPlayerToRender
            } = this.props,
            playersCanPlayThrough = getPlayersCanPlayThroughFromBit(
                playersBit
            )

        return (
            // Render player if it has already passed canPlayThrough...
            playersCanPlayThrough[songIndex] ||

            // Or if it is next in the queue to be rendered.
            songIndex === nextPlayerToRender
        )
    }

    // TODO: Forward this ref.
    toggleSelectedPlayer = ({ isPlaying }) => {
        /**
         * If play is being toggled on, ensure that selected player was able
         * to successfully play before storing play status in state.
         */
        const {
            isPlaying: wasPlaying,
            selectedSongIndex
        } = this.props

        // Pausing.
        if (!isPlaying && wasPlaying) {
            this.playerChildren[selectedSongIndex].askToPause()

        // Playing.
        } else if (isPlaying && !wasPlaying) {
            /**
             * Play is being toggled on, so don't set in store right away.
             * Pass callback and wait for successful return.
             */
            this.playerChildren[selectedSongIndex].promiseToPlay()
        }
    }

    handleSelectPlayer = ({
        isPlayFromLogue,
        nextSongIndex

    }) => {
        // If playing from logue, begin playing only once player is selected.
        if (this.props.isPlaying || isPlayFromLogue) {
            /**
             * If already playing, begin playing newly selected player.
             */
            this.playerChildren[nextSongIndex].promiseToPlay()
        }
    }

    updateCurrentTime = ({
        currentTime,
        currentSongIndex
    }) => {

        const {
            selectedSongIndex,
            selectedVerseIndex,
            selectedTime
        } = this.props

        const {
            isTimeInSelectedVerse,
            isTimeInNextVerse,
            nextVerseIndex,
            isEndOfSong
        } = getTimeInVerseStatus({
            currentTime,
            currentSongIndex,
            selectedSongIndex,
            selectedVerseIndex,
            selectedTime
        })

        // If current time is in selected verse, just update selected time.
        if (isTimeInSelectedVerse) {
            this.props.updateSelectedStore({ selectedTime: currentTime })

        // Otherwise, update verse and time.
        } else if (isTimeInNextVerse) {
            this.dispatchTimeVerse({
                currentTime,
                nextVerseIndex
            })

        } else {
            /**
             * If time is after current verse but there is no next verse, then
             * we have reached the end of the song.
             */
            if (isEndOfSong) {
                logPlayer({
                    log: 'Updated time will end player.',
                    action: 'endByUpdatedTime',
                    label: selectedSongIndex
                })
                this.props.handleSongEnd()

            /**
             * Something weird has happened, so we'll reset the player. This
             * should never get called, so fix the code if it does!
             */
            } else {
                logError({
                    log: `Time ${currentTime} and verse index ${selectedVerseIndex} are out of sync!`,
                    action: 'syncTimeAndVerse',
                    label: `song: ${selectedSongIndex}, verse: ${selectedVerseIndex}, time: ${currentTime}`
                })
            }

            /**
             * Tell the player to end either way. If it ended because the song
             * ended, we will still call this even though it will be called
             * again later, to ensure that the player will not end itself in
             * the interim.
             */
            this.playerChildren[selectedSongIndex].askToPause()
        }
    }

    getDispatchPlayerCanPlayThrough = dispatch => {
        this.dispatchPlayerCanPlayThrough = dispatch
    }

    getDispatchTimeVerse = dispatch => {
        this.dispatchTimeVerse = dispatch
    }

    getPlayer = node => {
        if (node) {
            const {
                promiseToPlay,
                askToPause,
                songIndex
            } = node
            this.playerChildren[songIndex] = {
                promiseToPlay,
                askToPause
            }
        }
    }

    render() {
        return (
            <div className={cx(
                'Players',
                'dNC'
            )}>
                <PlayerListener
                    {...{ handleSelectPlayer: this.handleSelectPlayer }}
                />
                {getSongNotLogueIndices().map(songIndex => (
                    this._playerShouldRender(songIndex) && (
                        <Player
                            {...{
                                key: songIndex,
                                ref: this.getPlayer,
                                songIndex,
                                updateCurrentTime: this.updateCurrentTime,
                                updateEnded: this.props.handleSongEnd,
                                dispatchPlayerCanPlayThrough:
                                    this.dispatchPlayerCanPlayThrough
                            }}
                        />
                    )
                ))}
                <PlayerDispatcher {...{ ref: this.getDispatchPlayerCanPlayThrough }} />
                <TimeVerseDispatcher {...{ ref: this.getDispatchTimeVerse }} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    {
        updateAudioStore,
        updateSelectedStore
    }
)(PlayerManager)
