// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setCanPlayThroughs } from '../../redux/actions/player'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'
import { getSongsNotLoguesCount } from '../../helpers/data-helper'
import { setNewValueInBitNumber } from '../../helpers/bit-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

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
        this._tellAppCurrentTimeOfAudioElement = this._tellAppCurrentTimeOfAudioElement.bind(this)

        this.state = {

            // Unique identifier for clearing setInterval.
            intervalId: null
        }
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isSelected',
                    {
                        staticProp: 'isSelected',
                        subUpdatingKey: 'isPlaying'
                    },
                    {
                        staticProp: 'isSelected',
                        subUpdatingKey: 'updatedTimePlayed'
                    }
                    // Player itself does not update on canPlayThroughs.
                ]
            })

        return componentShouldUpdate
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
    }

    componentWillUpdate(nextProps) {
        const { props } = this,
            selectedChanged = nextProps.isSelected !== props.isSelected,
            isPlayingChanged = nextProps.isPlaying !== props.isPlaying

        // Update playing status.
        if (selectedChanged || isPlayingChanged) {
            this._updateAudioElementIsPlaying(nextProps)
        }

        // Reset audio element if no longer selected.
        if (!nextProps.isSelected && props.isSelected) {
            this.myPlayer.currentTime = 0
        }

        // Handle user selected time.
        if (nextProps.updatedTimePlayed !== null) {
            this._updateAudioElementTime(nextProps)
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

            // this.myPlayer.addEventListener('ended', () => {
            //     console.error('ended', this.props.songIndex);
            // })
            // this.myPlayer.addEventListener('pause', () => {
            //     console.error('pause', this.props.songIndex);
            // })
            // this.myPlayer.addEventListener('play', () => {
            //     console.error('play', this.props.songIndex);
            // })
            // this.myPlayer.addEventListener('playing', () => {
            //     console.error('playing', this.props.songIndex);
            // })
            // this.myPlayer.addEventListener('timeupdate', () => {
            //     console.error('timeupdate', this.props.songIndex);
            // })

            // Determine which times ranges have been buffered.
            this.myPlayer.addEventListener('progress', () => {
                console.error('progress', this.props.songIndex);
            })

            // Seek operation has completed.
            this.myPlayer.addEventListener('seeked', () => {
                console.error('seeked', this.props.songIndex);
            })

            // Seek operation has begun.
            this.myPlayer.addEventListener('seeking', () => {
                console.error('seeking', this.props.songIndex);
            })

            // Data is not forthcoming.
            this.myPlayer.addEventListener('stalled', () => {
                console.error('stalled', this.props.songIndex);
            })

            // Download has completed.
            this.myPlayer.addEventListener('suspend', () => {
                console.error('suspend', this.props.songIndex);
            })

            // Enough data is available that the media can be played for now.
            this.myPlayer.addEventListener('canplay', () => {
                console.error('canplay', this.props.songIndex);
            })

            this.myPlayer.addEventListener('canplaythrough', () => {
                console.error('canplaythrough', this.props.songIndex);
            })

            this.myPlayer.addEventListener('waiting', () => {
                console.error('waiting', this.props.songIndex);
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
            clearInterval(this.state.intervalId)
            this.setState({
                intervalId: null
            })
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
            this.props.handlePlayerNextSong()

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
