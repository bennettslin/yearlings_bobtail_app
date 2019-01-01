// Manager for audio players.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { updateAudioStore } from 'flux/audio/action'
import { updateSelectedStore } from 'flux/selected/action'

import PlayerDispatcher from './Dispatcher'
import PlayerListener from './Listener'
import TimeVerseDispatcher from '../../../dispatchers/TimeVerseDispatcher'
import Player from './Player'

import { getStartTimeForVerseIndex } from 'album/api/time'
import { populateRefs } from 'helpers/ref'
import { getPlayersCanPlayThroughFromBitNumber } from 'helpers/player'

import {
    getMp3s,
    getNextVerseIndex,
    getTimeRelativeToVerseIndex
} from './helper'

const mapStateToProps = ({
    playersStore: {
        playersBitNumber,
        nextPlayerToRender
    },
    audioStore: { isPlaying },
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedTime
    }
}) => ({
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex,
    selectedTime,
    playersBitNumber,
    nextPlayerToRender
})

// Kind of silly, but easiest approach for now.
const LOGUE_DUMMY_PLAYER = {
    promiseToBeginPlaying: () => {},
    handleEndPlaying: () => {},
    setCurrentTime: () => {}
}

class PlayerManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        nextPlayerToRender: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired,
        handleSongEnd: PropTypes.func.isRequired
    }

    // Initialise player refs.
    players = {}

    componentDidMount() {
        this.props.getRefs({
            toggleSelectedPlayer: this.toggleSelectedPlayer
        })
    }

    _playerShouldRender(songIndex) {
        const {
                playersBitNumber,
                nextPlayerToRender
            } = this.props,
            playersCanPlayThrough = getPlayersCanPlayThroughFromBitNumber(
                playersBitNumber
            )

        return (
            // Render player if it has already passed canPlayThrough...
            playersCanPlayThrough[songIndex] ||

            // Or if it is next in the queue to be rendered.
            songIndex === nextPlayerToRender
        )
    }

    setPlayerCanPlayThrough = (songIndex) => {
        this.dispatchPlayerCanPlayThrough(songIndex)
    }

    toggleSelectedPlayer = ({
        isPlaying,
        selectedSongIndex = this.props.selectedSongIndex
    }) => {
        /**
         * If play is being toggled on, ensure that selected player was able
         * to successfully play before storing play status in state.
         */
        const {
            isPlaying: wasPlaying
        } = this.props

        // Pausing.
        if (!isPlaying && wasPlaying) {

            // Play is being toggled off, so set in store right away.
            this.props.updateAudioStore({ isPlaying: false })

            return this.getPlayerRef(selectedSongIndex).handleEndPlaying(

                // Player manager keeps track of default times of players.
                this.getCurrentTimeForSongIndex()
            )

        // Playing.
        } else if (isPlaying && !wasPlaying) {
            return this.askPlayerToBeginPlaying(selectedSongIndex)
        }
    }

    handleSelectPlayer = ({
        isPlayFromLogue,
        nextSongIndex,
        nextVerseIndex

    }) => {
        const nextCurrentTime = getStartTimeForVerseIndex(
            nextSongIndex,
            nextVerseIndex
        )

        // Update selected player's current time.
        this.getPlayerRef(nextSongIndex).setCurrentTime(nextCurrentTime)

        // If playing from logue, begin playing only once player is selected.
        if (this.props.isPlaying || isPlayFromLogue) {
            /**
             * If already playing, begin playing newly selected player.
             */
            this.askPlayerToBeginPlaying(nextSongIndex)
        }
    }

    askPlayerToBeginPlaying(songIndex) {
        /**
         * Play is being toggled on, so don't set in store right away.
         * Pass callback and wait for successful return.
         */
        return this.getPlayerRef(songIndex).promiseToBeginPlaying()
    }

    setSelectedPlayerIsPlaying = (success) => {
        /**
         * If currently selected player is being toggled on, set in store that
         * it was able to play. If selected song was changed, set in store
         * whether newly selected player was able to play.
         */
        this.props.updateAudioStore({ isPlaying: success })
    }

    getCurrentTimeForSongIndex(songIndex = this.props.selectedSongIndex) {
        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props

        return songIndex === selectedSongIndex ?

            // If player is selected, get current time from selected verse.
            getStartTimeForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex

            // Otherwise, set it to zero.
            ) : 0
    }

    updatePlayerTime = ({
        currentTime,
        currentSongIndex
    }) => {

        const {
            selectedSongIndex,
            selectedTime
        } = this.props

        if (
            currentTime === selectedTime ||
            currentSongIndex !== selectedSongIndex
        ) {
            return
        }

        const {
                selectedVerseIndex
            } = this.props,

            timeRelativeToSelectedVerse = getTimeRelativeToVerseIndex(
                selectedSongIndex,
                selectedVerseIndex,
                currentTime
            ),

            isTimeInSelectedVerse = timeRelativeToSelectedVerse === 0

        let nextVerseIndex,
            isTimeInNextVerse = false

        /**
         * This value will be 1 if time is after selected verse. In which case,
         * we will check if it's in the next verse.
         */
        if (timeRelativeToSelectedVerse === 1) {

            nextVerseIndex = getNextVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )

            isTimeInNextVerse = nextVerseIndex && getTimeRelativeToVerseIndex(
                selectedSongIndex,
                nextVerseIndex,
                currentTime
            ) === 0
        }

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
            if (timeRelativeToSelectedVerse === 1 && !nextVerseIndex) {
                logPlayer('Updated time will end player.')
                this.props.handleSongEnd()

            /**
             * Something weird has happened, so we'll reset the player. This
             * should never get called, so fix the code if it does!
             */
            } else {
                logError(`Time ${currentTime} and verse index ${selectedVerseIndex} are out of sync!`)
            }

            /**
             * Tell the player to end either way. If it ended because the song
             * ended, we will still call this even though it will be called
             * again later, to ensure that the player will not end itself in
             * the interim.
             */
            this.getPlayerRef(selectedSongIndex).handleEndPlaying()
        }
    }

    getPlayerRef(songIndex) {
        return this.players[songIndex] || LOGUE_DUMMY_PLAYER
    }

    setPlayerRef = (node, songIndex) => {
        this.players[songIndex] = node

        this.players[songIndex].setCurrentTime(
            this.getCurrentTimeForSongIndex(songIndex)
        )
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const { selectedSongIndex } = this.props,
            mp3s = getMp3s()

        return (
            <div className={cx(
                'Players',
                'displayNoneContainer'
            )}>
                <PlayerListener
                    {...{ handleSelectPlayer: this.handleSelectPlayer }}
                />
                {mp3s.map((mp3, index) => {
                    const songIndex = index + 1

                    return this._playerShouldRender(songIndex) && (
                        <Player
                            key={index}
                            {...{
                                mp3,
                                songIndex,
                                isSelected: songIndex === selectedSongIndex,
                                updateCurrentTime: this.updatePlayerTime,
                                updateEnded: this.props.handleSongEnd,
                                setPlayerRef: this.setPlayerRef,
                                setPlayerCanPlayThrough:
                                    this.setPlayerCanPlayThrough,
                                setSelectedPlayerIsPlaying:
                                    this.setSelectedPlayerIsPlaying
                            }}
                        />
                    )
                })}
                <PlayerDispatcher {...{ getRefs: this._getRefs }} />
                <TimeVerseDispatcher {...{ getRefs: this._getRefs }} />
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
