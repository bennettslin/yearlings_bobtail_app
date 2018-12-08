// Manager for audio players.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { updateAudioStore } from 'flux/audio/action'
import { updatePlayerStore } from 'flux/player/action'
import { updateSongStore } from 'flux/song/action'

import PlayerListener from './Listener'
import TimeVerseDispatcher from '../../../dispatchers/TimeVerseDispatcher'
import Player from './Player'

import { setNewValueInBitNumber } from 'helpers/bit'

import {
    getSongsNotLoguesCount,
    getTimeForVerseIndex
} from 'helpers/data'

import {
    getMp3s,
    getNextVerseIndex,
    getTimeRelativeToVerseIndex,
    getCanPlayThroughsObject,
    getNextPlayerSongIndexToRender
} from './helper'

const mapStateToProps = ({
    audioStore: { canPlayThroughs },
    playerStore: { isPlaying },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedTime,
        isSelectedLogue
    }
}) => ({
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex,
    selectedTime,
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
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        updatePlayerStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired,
        handleSongEnd: PropTypes.func.isRequired
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

    // Initialise player refs.
    players = {}

    componentDidMount() {
        this.props.parentThis.toggleSelectedPlayer = this.toggleSelectedPlayer
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

    _playerShouldRender(songIndex) {
        const {
            canPlayThroughsObject,
            nextPlayerToRender
        } = this.state

        return (
            // Render player if it has already passed canPlayThrough...
            canPlayThroughsObject[songIndex] ||

            // Or if it is next in the queue to be rendered.
            songIndex === nextPlayerToRender
        )
    }

    setPlayerCanPlayThrough = (songIndex) => {
        const { canPlayThroughs } = this.props,

            // Convert to bit number before setting in Redux.
            newBitNumber = setNewValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: songIndex,
                value: true
            })

        this.props.updateAudioStore({ canPlayThroughs: newBitNumber })
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
            this.props.updatePlayerStore({ isPlaying: false })

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
        isPlayingFromLogue,
        nextSongIndex,
        nextVerseIndex

    }) => {
        const nextCurrentTime = getTimeForVerseIndex(
            nextSongIndex,
            nextVerseIndex
        )

        // Update selected player's current time.
        this.getPlayerRef(nextSongIndex).setCurrentTime(nextCurrentTime)

        // If playing from logue, begin playing only once player is selected.
        if (this.props.isPlaying || isPlayingFromLogue) {
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
        return this.getPlayerRef(songIndex).handleBeginPlaying()
    }

    setSelectedPlayerIsPlaying = (success) => {
        /**
         * If currently selected player is being toggled on, set in store that
         * it was able to play. If selected song was changed, set in store
         * whether newly selected player was able to play.
         */
        this.props.updatePlayerStore({ isPlaying: success })
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
            this.props.updateSongStore({ selectedTime: currentTime })

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
                logger.info('Updated time will end player.')
                this.props.handleSongEnd()

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
                <TimeVerseDispatcher {...{ parentThis: this }} />
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
