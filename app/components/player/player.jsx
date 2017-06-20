// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
// https://www.npmjs.com/package/react-audio-player

class Player extends Component {

    constructor(props) {
        super(props)

        this._handleAudioElementAdvance = this._handleAudioElementAdvance.bind(this)
        this._handleAudioElementEnded = this._handleAudioElementEnded.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isPlaying',
                    'isSelected',
                    'updatedTimePlayed'
                ]
            })

        return componentShouldUpdate
    }

    componentDidMount() {
        this.myPlayer = this.myReactPlayer.audioEl

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

    _updateAudioElementIsPlaying(props = this.props) {
        const { isSelected,
                isPlaying } = props,
            { myPlayer } = this

        // Play only if selected and is playing.
        if (isSelected && isPlaying && myPlayer.paused) {
            myPlayer.play()

        // Otherwise pause.
        } else if (!myPlayer.paused) {
            myPlayer.pause()
        }
    }

    _updateAudioElementTime(props = this.props) {
        const { isSelected,
                isPlaying } = props

        if (isSelected) {

            if (isPlaying) {

                // FIXME: This doesn't actually fix the issue of the audio element no longer sending listen events when the time is changed while playing.
                this.myPlayer.pause()
                this.myPlayer.currentTime = props.updatedTimePlayed
                this.myPlayer.play()

            } else {
                this.myPlayer.currentTime = props.updatedTimePlayed
            }

            this.props.handlePlayerTimeReset()
        }
    }

    _handleAudioElementAdvance(currentTime) {
        // Tell app that audio element has advanced in time.
        this.props.handlePlayerTimeChange(currentTime)
    }

    _handleAudioElementEnded() {
        // FIXME: Waiting for the audio element to send onEnded event takes too long. Have this be based on the song's own time.
        if (this.props.isSelected) {
            this.props.handlePlayerNextSong()
        }
    }

    render() {
        return (
            <ReactAudioPlayer
                ref={(node) => (this.myReactPlayer = node)}
                src={this.props.mp3}
                listenInterval={100}
                onListen={this._handleAudioElementAdvance}
                onEnded={this._handleAudioElementEnded}
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
