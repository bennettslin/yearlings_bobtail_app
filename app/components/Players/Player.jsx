// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'

import { setCanPlayThroughs } from 'flux/actions/player'
import { getSongsNotLoguesCount } from 'helpers/dataHelper'
import { setNewValueInBitNumber } from 'helpers/bitHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

// https://www.npmjs.com/package/react-audio-player

const LISTEN_INTERVAL = 100

const mapStateToProps = ({
    isPlaying,
    updatedTimePlayed,
    canPlayThroughs
}) => ({
    isPlaying,
    updatedTimePlayed,
    canPlayThroughs
})

class Player extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        updatedTimePlayed: PropTypes.number,
        canPlayThroughs: PropTypes.number.isRequired,
        setCanPlayThroughs: PropTypes.func.isRequired,

        // From parent.
        mp3: PropTypes.string.isRequired,
        songIndex: PropTypes.number.isRequired,
        totalTime: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired,
        handlePlayerTimeChange: PropTypes.func.isRequired,
        handlePlayerTimeReset: PropTypes.func.isRequired,
        handlePlayerNextSong: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleCanPlayThrough = this._handleCanPlayThrough.bind(this)
        this._handleEnded = this._handleEnded.bind(this)
        this._tellAppCurrentTimeOfAudioElement = this._tellAppCurrentTimeOfAudioElement.bind(this)

        this.state = {

            // Unique identifier for clearing setInterval.
            intervalId: ''
        }
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate = !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                checkIsShallowEqual: {
                    isPlaying: true,
                    updatedTimePlayed: true
                },
                onlyOnCondition: nextProps.isSelected
            })

        return shouldComponentUpdate
    }

    componentDidMount() {
        this.myPlayer = this.myReactPlayer.audioEl

        // this._listenForDebugStatements(true)

        // Tell audio element its initial state.
        this._updateAudioElementTime()
        this._updateAudioElementIsPlaying()

        // Add event listeners.

        // Tell app that player can now be played without interruption.
        this.myPlayer.addEventListener(

            // iOS doesn't fire canplaythrough.
            'suspend',
            this._handleCanPlayThrough
        )

        this.myPlayer.addEventListener(
            'ended',
            this._handleEnded
        )
    }

    componentDidUpdate(prevProps) {
        const { props } = this,
            selectedChanged = props.isSelected !== prevProps.isSelected,
            isPlayingChanged = props.isPlaying !== prevProps.isPlaying

        // Update playing status.
        if (selectedChanged || isPlayingChanged) {
            this._updateAudioElementIsPlaying(props)
        }

        // Reset audio element if no longer selected.
        if (!props.isSelected && prevProps.isSelected) {
            this.myPlayer.currentTime = 0
        }

        // Handle user selected time.
        if (props.updatedTimePlayed !== null) {
            this._updateAudioElementTime(props)
        }
    }

    _handleCanPlayThrough() {
        const { canPlayThroughs,
                songIndex } = this.props,

            // Convert to bit number before setting in Redux.
            newBitNumber = setNewValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: canPlayThroughs,
                key: songIndex,
                value: true
            })

        this.props.setCanPlayThroughs(newBitNumber)
    }

    _listenForDebugStatements(onlyIfSelected) {

        const showDebugStatements =
            this.props.isSelected || !onlyIfSelected

        if (showDebugStatements) {

            this.myPlayer.addEventListener('ended', () => {
                logger.error('ended', this.props.songIndex);
            })
            this.myPlayer.addEventListener('pause', () => {
                logger.error('pause', this.props.songIndex);
            })
            this.myPlayer.addEventListener('play', () => {
                logger.error('play', this.props.songIndex);
            })
            this.myPlayer.addEventListener('playing', () => {
                logger.error('playing', this.props.songIndex);
            })
            this.myPlayer.addEventListener('timeupdate', () => {
                logger.error('timeupdate', this.props.songIndex);
            })

            // Determine which times ranges have been buffered.
            this.myPlayer.addEventListener('progress', () => {
                logger.error('progress', this.props.songIndex);
            })

            // Seek operation has completed.
            this.myPlayer.addEventListener('seeked', () => {
                logger.error('seeked', this.props.songIndex);
            })

            // Seek operation has begun.
            this.myPlayer.addEventListener('seeking', () => {
                logger.error('seeking', this.props.songIndex);
            })

            // Data is not forthcoming.
            this.myPlayer.addEventListener('stalled', () => {
                logger.error('stalled', this.props.songIndex);
            })

            // Download has completed.
            this.myPlayer.addEventListener('suspend', () => {
                logger.error('suspend', this.props.songIndex);
            })

            // Enough data is available that the media can be played for now.
            this.myPlayer.addEventListener('canplay', () => {
                logger.error('canplay', this.props.songIndex);
            })

            this.myPlayer.addEventListener('canplaythrough', () => {
                logger.error('canplaythrough', this.props.songIndex);
            })

            this.myPlayer.addEventListener('waiting', () => {
                logger.error('waiting', this.props.songIndex);
            })
        }
    }

    _updateAudioElementIsPlaying(props = this.props) {
        const { isSelected,
                isPlaying } = props,
            { myPlayer } = this

        // Play only if selected and is playing.
        if (isSelected && isPlaying && myPlayer.paused) {
            myPlayer.play()

            // Begin listening.
            const intervalId = setInterval(
                    this._tellAppCurrentTimeOfAudioElement,
                    LISTEN_INTERVAL
                )
            this.setState({
                intervalId
            })

        // Otherwise pause.
        } else if (!myPlayer.paused) {
            myPlayer.pause()

            // Stop listening.
            this._clearInterval()
        }
    }

    _clearInterval() {
        clearInterval(this.state.intervalId)
        this.setState({
            intervalId: ''
        })
    }

    _handleEnded() {
        const { intervalId } = this.state

        // Ensure that this does not get called twice in same song.
        if (intervalId) {
            this.props.handlePlayerNextSong()

            this._clearInterval()
        }
    }

    _updateAudioElementTime(props = this.props) {
        // Let app update the audio element's current time.
        if (props.isSelected) {
            this.myPlayer.currentTime = props.updatedTimePlayed
            this.props.handlePlayerTimeReset()
        }
    }

    _tellAppCurrentTimeOfAudioElement() {
        const { currentTime } = this.myPlayer,
            { totalTime } = this.props

        // If the song has ended, tell app to handle next song selection.
        if (currentTime > totalTime) {
            this._handleEnded()

        // Otherwise, just tell app the audio element's current time.
        } else {
            this.props.handlePlayerTimeChange(currentTime)
        }
    }

    render() {
        return (
            <ReactAudioPlayer
                ref={(node) => (this.myReactPlayer = node)}
                src={this.props.mp3}
            />
        )
    }
}

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanPlayThroughs
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Player)
