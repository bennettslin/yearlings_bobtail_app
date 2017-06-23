// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
// https://www.npmjs.com/package/react-audio-player

const LISTEN_INTERVAL = 100

class Player extends Component {

    constructor(props) {
        super(props)

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
                ]
            })

        return componentShouldUpdate
    }

    componentDidMount() {
        this.myPlayer = this.myReactPlayer.audioEl

        // this._listenForDebugStatements()

        // Tell audio element its initial state.
        this._updateAudioElementTime()
        this._updateAudioElementIsPlaying()
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

    _listenForDebugStatements() {
        // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
        this.myPlayer.addEventListener('canplay', () => {
            console.error('canplay', this.props.songIndex);
        })
        this.myPlayer.addEventListener('canplaythrough', () => {
            console.error('canplaythrough', this.props.songIndex);
        })
        this.myPlayer.addEventListener('ended', () => {
            console.error('ended', this.props.songIndex);
        })
        this.myPlayer.addEventListener('pause', () => {
            console.error('pause', this.props.songIndex);
        })
        this.myPlayer.addEventListener('play', () => {
            console.error('play', this.props.songIndex);
        })
        this.myPlayer.addEventListener('playing', () => {
            console.error('playing', this.props.songIndex);
        })
        this.myPlayer.addEventListener('progress', () => {
            console.error('progress', this.props.songIndex);
        })
        this.myPlayer.addEventListener('seeked', () => {
            console.error('seeked', this.props.songIndex);
        })
        this.myPlayer.addEventListener('seeking', () => {
            console.error('seeking', this.props.songIndex);
        })
        this.myPlayer.addEventListener('stalled', () => {
            console.error('stalled', this.props.songIndex);
        })
        this.myPlayer.addEventListener('suspend', () => {
            console.error('suspend', this.props.songIndex);
        })
        this.myPlayer.addEventListener('timeupdate', () => {
            console.error('timeupdate', this.props.songIndex);
        })
        this.myPlayer.addEventListener('waiting', () => {
            console.error('waiting', this.props.songIndex);
        })
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

Player.propTypes = {
    // Through Redux.
    isPlaying: PropTypes.bool.isRequired,
    updatedTimePlayed: PropTypes.number,

    // From parent.
    mp3: PropTypes.string.isRequired,
    songIndex: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handlePlayerTimeChange: PropTypes.func.isRequired,
    handlePlayerTimeReset: PropTypes.func.isRequired,
    handlePlayerNextSong: PropTypes.func.isRequired
}

export default connect(({
    isPlaying,
    updatedTimePlayed
}) => ({
    isPlaying,
    updatedTimePlayed
}))(Player)
