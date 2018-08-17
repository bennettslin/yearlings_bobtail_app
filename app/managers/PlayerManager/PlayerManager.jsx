// Manager for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { setIsPlaying } from 'flux/actions/audio'
import { setCanPlayThroughs } from 'flux/actions/player'

import Player from './Player'

import { setNewValueInBitNumber } from 'helpers/bitHelper'

import {
    getMp3s,
    getSongsNotLoguesCount,
    getTimeForVerseIndex,
    getTimeRelativeToVerseIndex,
    getNextVerseIndex
} from 'helpers/dataHelper'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getCanPlayThroughsObject,
    getNextPlayerSongIndexToRender
} from './playerManagerHelper'

const mapStateToProps = ({
    isPlaying,
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex
    },
    canPlayThroughs
}) => ({
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex,
    canPlayThroughs
})

// Kind of silly, but easiest approach for now.
const LOGUE_DUMMY_PLAYER = {
    /* eslint-disable no-empty-function */
    handleBeginPlaying: () => {},
    handleEndPlaying: () => {},
    setCurrentTime: () => {}
    /* eslint-enable no-empty-function */
}

class PlayerManager extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        canPlayThroughs: PropTypes.number.isRequired,
        setCanPlayThroughs: PropTypes.func.isRequired,
        setIsPlaying: PropTypes.func.isRequired,

        // From parent.
        updateTime: PropTypes.func.isRequired,
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
        nextPlayerToRender: -1,

        // Unique identifier for clearing setInterval.
        // nextSelectedIntervalId: ''
    }

    // Initialise player refs.
    players = {}

    componentDidMount() {
        this.props.setRef(this)
        this._updateCanPlayThroughsObject()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextProps: nextState
        })
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
                selectedSongIndex
            } = this.props,

            canPlayThroughsObject = getCanPlayThroughsObject(
                canPlayThroughs
            )

        this.setState({
            canPlayThroughsObject,
            nextPlayerToRender: getNextPlayerSongIndexToRender(
                    selectedSongIndex,
                    canPlayThroughsObject
                )
        })
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

        this.props.setCanPlayThroughs(newBitNumber)
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
            } = this.props,

            playerRef = this.getPlayerRef(selectedSongIndex)

        // Pausing.
        if (!isPlaying && wasPlaying) {

            // Play is being toggled off, so set in store right away.
            this.props.setIsPlaying(false)

            return playerRef.handleEndPlaying(

                // Player manager keeps track of default times of players.
                this.getCurrentTimeForSongIndex()
            )

        // Playing.
        } else if (isPlaying && !wasPlaying) {
            return playerRef.handleBeginPlaying(

                /**
                 * Play is being toggled on, so don't set in store right away.
                 * Pass callback and wait for successful return.
                 */
                this.handlePlaySelectedPlayer
            )
        }
    }

    handlePlaySelectedPlayer = (success) => {
        /**
         * If currently selected player is being toggled on, set in store that
         * it was able to play. If selected song was changed, set in store
         * whether newly selected player was able to play.
         */
        this.props.setIsPlaying(success)
    }

    updateSelectedPlayer({
        selectedSongIndex: nextSongIndex,
        selectedVerseIndex: nextVerseIndex
    }) {
        /**
         * If user manually changes song or verse, update the player's current
         * time. This allows the player not to have to watch for these changes
         * itself, which is needed because it can't tell the difference between
         * manual and automatic verse changes.
         */

        // clearInterval(this.state.nextSelectedIntervalId)

        // const nextSelectedIntervalId = setInterval(
        //     this._startNextPlayer,
        //     200
        // )

        // this.setState({
        //     nextSelectedIntervalId
        // })

        const {
                selectedSongIndex,
                isPlaying
            } = this.props,

            nextCurrentTime = getTimeForVerseIndex(
                nextSongIndex,
                nextVerseIndex
            )

        // Update selected player's current time.
        this.getPlayerRef(nextSongIndex).setCurrentTime(nextCurrentTime)

        if (
            selectedSongIndex !== nextSongIndex &&
            isPlaying
        ) {
            /**
             * If already playing, begin playing newly selected player.
             */
            this.getPlayerRef(nextSongIndex).handleBeginPlaying(
                this.handlePlaySelectedPlayer
            )
        }
    }

    // _startNextPlayer = () => {

    // }

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

    updatePlayerTime = (currentTime) => {
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

        /**
         * If current time is in selected or next verse, update selected time.
         * Also select next verse if needed.
         */
        if (isTimeInSelectedVerse || isTimeInNextVerse) {
            this.props.updateTime({
                currentTime,
                ...isTimeInNextVerse && {
                    nextVerseIndex
                }
            })

        /**
         * If time is after current verse but there is no next verse, then we
         * have reached the end of the song.
         */
        } else if (timeRelativeToSelectedVerse === 1 && !nextVerseIndex) {
            logger.info('Updated time will end player.')

            /**
             * Call this even though it will be called again later, to ensure
             * that the player will not end itself in the interim.
             */
            this.getPlayerRef(selectedSongIndex).handleEndPlaying()
            this.updatePlayerEnded()

        /**
         * Something weird has happened, so we'll reset the player.
         */
        } else {
            logger.error('Time and verse are hopelessly out of sync!')
            this.getPlayerRef(selectedSongIndex).handleEndPlaying()
        }
    }

    updatePlayerEnded = () => {
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
                setCanPlayThroughs,
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
            </div>
        )
    }
}

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanPlayThroughs,
        setIsPlaying
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerManager)
