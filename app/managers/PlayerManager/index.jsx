// Manager for audio players.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { updateAudioStore } from 'flux/audio/action'
import { updatePlayerStore } from 'flux/player/action'
import { updateSongStore } from 'flux/song/action'

import PlayerTimeVerseDispatcher from '../../dispatchers/PlayerTimeVerseDispatcher'
import Player from './Player'

import { setNewValueInBitNumber } from 'helpers/bitHelper'

import {
    getSongsNotLoguesCount,
    getTimeForVerseIndex
} from 'helpers/dataHelper'

import {
    getMp3s,
    getNextVerseIndex,
    getTimeRelativeToVerseIndex,
    getCanPlayThroughsObject,
    getNextPlayerSongIndexToRender
} from './helper'

const mapStateToProps = ({
    audioStore: {
        isPlaying,
        canPlayThroughs
    },
    playerStore: {
        playerSongIndex,
        playerVerseIndex
    },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        isSelectedLogue
    }
}) => ({
    isPlaying,
    playerSongIndex,
    playerVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    isSelectedLogue,
    canPlayThroughs
})

// Kind of silly, but easiest approach for now.
const LOGUE_DUMMY_PLAYER = {
    handleBeginPlaying: () => {},
    handleEndPlaying: () => {},
    setCurrentTime: () => {}
}

class PlayerManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        playerSongIndex: PropTypes.number.isRequired,
        playerVerseIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updatePlayerStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        handleSongEnd: PropTypes.func.isRequired,
        setRef: PropTypes.func.isRequired
    }

    state = {
        /**
         * This object is converted from the bit number fetched through
         * Redux. We will store it so that we don't have to convert it
         * every single time.
         */
        canPlayThroughsObject: getCanPlayThroughsObject(
            this.props.canPlayThroughs
        ),

        // At any given time, only one player is being newly rendered.
        nextPlayerToRender: -1
    }

    playerState = {
        /**
         * We will use this object to pass values when selecting the player
         * in the timeout callback, because we don't want to deal with the
         * uncertainty of when setState gets executed.
         */

        // Unique identifier for clearing setInterval.
        nextSelectedTimeoutId: ''
    }

    sessionState = {
        /**
         * This lets us reject a call to update time that is no longer
         * applicable upon manual selection of a new song or verse.
         */
        currentSessionId: 0
    }

    // Initialise player refs.
    players = {}

    componentDidMount() {
        this.props.setRef(this)
        this._updateCanPlayThroughsObject()
    }

    componentDidUpdate(prevProps) {
        /**
         * If the bit number has changed, convert it and store the updated
         * object that keeps track of each player's canPlayThrough status, then
         * calculate which player is next in line to be newly rendered.
         */
        if (this.props.canPlayThroughs !== prevProps.canPlayThroughs) {
            this._updateCanPlayThroughsObject()
        }

        this._checkPlayerChange(prevProps)
    }

    _updateCanPlayThroughsObject() {
        const {
                canPlayThroughs,
                selectedSongIndex,
                isSelectedLogue
            } = this.props,

            canPlayThroughsObject = getCanPlayThroughsObject(
                canPlayThroughs
            )

        this.setState({
            canPlayThroughsObject,
            nextPlayerToRender: getNextPlayerSongIndexToRender(
                selectedSongIndex,
                isSelectedLogue,
                canPlayThroughsObject
            )
        })
    }

    _checkPlayerChange(prevProps) {
        const {
                playerSongIndex,
                playerVerseIndex
            } = this.props,
            {
                playerSongIndex: prevSongIndex,
                playerVerseIndex: prevVerseIndex
            } = prevProps

        if (
            (playerSongIndex > -1 && playerSongIndex !== prevSongIndex) ||
            (playerVerseIndex > -1 && playerVerseIndex !== prevVerseIndex)
        ) {
            this._changeSelectedPlayer({
                nextSongIndex: playerSongIndex,
                nextVerseIndex: playerVerseIndex
            })

            this.props.updatePlayerStore()
        }
    }

    _changeSelectedPlayer({
        nextSongIndex,
        nextVerseIndex
    }) {
        /**
         * If user manually changes song or verse, player manager will update
         * the player. This allows the player not to have to watch for these
         * changes itself, which is needed because it can't tell the difference
         * between manual and automatic verse changes.
         */

        // Increment session id right away.
        this.sessionState.currentSessionId++

        clearTimeout(this.playerState.nextSelectedTimeoutId)

        const nextSelectedTimeoutId = setTimeout(
            this._handleSelectPlayer,
            200
        )

        this.playerState = {
            nextSelectedTimeoutId,

            // Store next song and verse in component state for callback.
            nextSongIndex,
            nextVerseIndex
        }
    }

    _playerShouldRender(playerSongIndex) {
        const {
            canPlayThroughsObject,
            nextPlayerToRender
        } = this.state

        return (
            // Render player if it has already passed canPlayThrough...
            canPlayThroughsObject[playerSongIndex] ||

            // Or if it is next in the queue to be rendered.
            playerSongIndex === nextPlayerToRender
        )
    }

    setPlayerCanPlayThrough = (playerSongIndex) => {
        const {
                canPlayThroughs
            } = this.props,

            // Convert to bit number before setting in Redux.
            newBitNumber = setNewValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: playerSongIndex,
                value: true
            })

        this.props.updateAudioStore({ canPlayThroughs: newBitNumber })
    }

    toggleSelectedPlayer({
        isPlaying,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
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

    _handleSelectPlayer = () => {
        const {
                nextSongIndex,
                nextVerseIndex
            } = this.playerState,

            nextCurrentTime = getTimeForVerseIndex(
                nextSongIndex,
                nextVerseIndex
            )

        // Update selected player's current time.
        this.getPlayerRef(nextSongIndex).setCurrentTime(nextCurrentTime)

        if (this.props.isPlaying) {
            /**
             * If already playing, begin playing newly selected player.
             */
            this.askPlayerToBeginPlaying(nextSongIndex)
        }
    }

    askPlayerToBeginPlaying(playerSongIndex) {
        const playerRef = this.getPlayerRef(playerSongIndex)

        return playerRef.handleBeginPlaying(
            this.sessionState.currentSessionId,

            /**
             * Play is being toggled on, so don't set in store right away.
             * Pass callback and wait for successful return.
             */
            this.handlePlaySelectedPlayer
        )
    }

    handlePlaySelectedPlayer = (success) => {
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
            getTimeForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex

            // Otherwise, set it to zero.
            ) : 0
    }

    updatePlayerTime = (
        currentSessionId,
        currentTime
    ) => {

        /**
         * Ignore calls from previous sessions that haven't yet cleared out
         * their intervals.
         */
        if (currentSessionId !== this.sessionState.currentSessionId) {
            return
        }

        const {
                selectedSongIndex,
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
            this.props.updateSongStore({ selectedTime: currentTime })

        // Otherwise, update verse and time.
        } else if (isTimeInNextVerse) {
            this.dispatchPlayerTimeVerse({
                currentTime,
                nextVerseIndex
            })

        } else {
            /**
             * If time is after current verse but there is no next verse, then
             * we have reached the end of the song.
             */
            if (timeRelativeToSelectedVerse === 1 && !nextVerseIndex) {
                logger.info('Updated time will end player.')
                this.updatePlayerEnded(currentSessionId)

            /**
             * Something weird has happened, so we'll reset the player. This
             * should never get called, so fix the code if it does!
             */
            } else {
                logger.error(`Time ${currentTime} and verse index ${selectedVerseIndex} are out of sync!`)
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

    updatePlayerEnded = (currentSessionId) => {

        /**
         * Ignore calls from previous sessions that haven't yet cleared out
         * their intervals.
         */
        if (currentSessionId !== this.sessionState.currentSessionId) {
            return
        }

        this.props.handleSongEnd()
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

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canPlayThroughs,
                dispatch,
                /* eslint-enable no-unused-vars */

                selectedSongIndex
            } = this.props,

            mp3s = getMp3s()

        return (
            <div className={cx(
                'Players',
                'displayNoneContainer'
            )}>
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
                                updateEnded: this.updatePlayerEnded,
                                setPlayerRef: this.setPlayerRef,
                                setPlayerCanPlayThrough:
                                    this.setPlayerCanPlayThrough
                            }}
                        />
                    )
                })}
                <PlayerTimeVerseDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAudioStore,
        updatePlayerStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerManager)
