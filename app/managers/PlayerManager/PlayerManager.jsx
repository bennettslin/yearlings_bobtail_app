// Manager for audio players.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { setCanPlayThroughs } from 'flux/actions/player'

import Player from './Player'

import { setNewValueInBitNumber } from 'helpers/bitHelper'

import {
    getMp3s,
    getSongTotalTime,
    getSongsNotLoguesCount,
    getTimeForVerseIndex
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

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            /**
             * This object is converted from the bit number fetched through
             * Redux. We will store it so that we don't have to convert it
             * every single time.
             */
            canPlayThroughsObject: getCanPlayThroughsObject(
                props.canPlayThroughs
            ),

            // At any given time, only one player is being newly rendered.
            nextPlayerToRender: -1
        }

        // Initialise player refs.
        this.players = {}
        this.setPlayerRef = this.setPlayerRef.bind(this)
        this.setPlayerCanPlayThrough = this.setPlayerCanPlayThrough.bind(this)
    }

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

        /**
         * Handle when playing is toggled on or off.
         */
        const {
                isPlaying,
                selectedSongIndex
            } = this.props,
            {
                isPlaying: wasPlaying
            } = prevProps

        // Handle pause.
        if (!isPlaying && wasPlaying) {
            this.getPlayerRef(selectedSongIndex).handleEndPlaying(
                this.getCurrentTimeForSongIndex(selectedSongIndex)
            )

        // Handle playing toggled on.
        } else if (isPlaying && !wasPlaying) {
            this.getPlayerRef(selectedSongIndex).handleBeginPlaying()
        }
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

        // If song was changed, pause and reset current player.
        if (selectedSongIndex !== nextSongIndex) {
            this.getPlayerRef(selectedSongIndex).handleEndPlaying()

            // If playing, toggle play and pause for respective players.
            if (isPlaying) {
                this.getPlayerRef(nextSongIndex).handleBeginPlaying()
            }
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

    setPlayerCanPlayThrough(playerSongIndex) {
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

    getPlayerRef(songIndex) {
        return this.players[songIndex] || LOGUE_DUMMY_PLAYER
    }

    setPlayerRef(node, songIndex) {
        this.players[songIndex] = node

        this.players[songIndex].setCurrentTime(
            this.getCurrentTimeForSongIndex(songIndex)
        )
    }

    getCurrentTimeForSongIndex(songIndex) {
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

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canPlayThroughs,
                selectedSongIndex,
                setCanPlayThroughs,
                dispatch,
                /* eslint-enable no-unused-vars */

                ...other
            } = this.props,

            mp3s = getMp3s()

        return (
            <div className={cx(
                'Players',
                'displayNoneContainer'
            )}>
                {mp3s.map((mp3, index) => {
                    const
                        songIndex = index + 1,
                        totalTime = getSongTotalTime(songIndex)

                    return this._playerShouldRender(songIndex) && (
                        <Player {...other}
                            key={index}
                            {...{
                                mp3,
                                songIndex,
                                totalTime,
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
        setCanPlayThroughs
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerManager)
