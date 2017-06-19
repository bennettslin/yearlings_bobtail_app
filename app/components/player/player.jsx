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

        this._handleListen = this._handleListen.bind(this)
        this._handleEnded = this._handleEnded.bind(this)
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

        // if (nextProps.isSelected) {
        //     console.error('props:', JSON.stringify(props, null, 2));
        //     console.error('nextProps:', JSON.stringify(nextProps, null, 2));
        //     console.error(`componentShouldUpdate:`, componentShouldUpdate);
        // }

        return componentShouldUpdate
    }

    componentDidMount() {
        this.myPlayer = this.myReactPlayer.audioEl

        this._handleTimeChange()
        this._handleIsPlayingChange()
    }

    componentWillUpdate(nextProps) {
        const { props } = this,
            selectedChanged = nextProps.isSelected !== props.isSelected,
            isPlayingChanged = nextProps.isPlaying !== props.isPlaying

        if (selectedChanged || isPlayingChanged) {
            this._handleIsPlayingChange(nextProps)
        }

        if (selectedChanged) {
            this._handleSelectedChange(this.props)
        }

        if (nextProps.updatedTimePlayed !== null) {
            this._handleTimeChange(nextProps)
        }
    }

    _handleListen(currentTime) {
        // Tell app that player has advanced in time.
        this.props.handlePlayerTimeChange(currentTime)
    }

    _handleIsPlayingChange(props = this.props) {
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

    _handleSelectedChange(oldProps) {
        const wasSelected = oldProps.isSelected

        if (wasSelected) {
            this.myPlayer.currentTime = 0
        }
    }

    _handleTimeChange(props = this.props) {
        const { isSelected } = props

        if (isSelected) {

            // FIXME: Something should happen here to keep the player calling the onListen handler.
            this.myPlayer.currentTime = props.updatedTimePlayed
            this.props.handlePlayerTimeReset()
        }
    }

    _handleEnded() {
        // FIXME: Waiting for the player to send onEnded event takes too long. Have this be based on the song's own time.
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
                onListen={this._handleListen}
                onEnded={this._handleEnded}
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
