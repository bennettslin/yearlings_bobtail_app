// Hidden component to wrap an audio DOM element.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
// https://www.npmjs.com/package/react-audio-player

class AudioPlayer extends Component {

    constructor(props) {
        super(props)

        this._handleListen = this._handleListen.bind(this)
        this._handleEnded = this._handleEnded.bind(this)
    }

    // TODO: Still necessary?
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

        this._handleTimeChange()
        this._handleIsPlayingChange()

        // this.myPlayer.addEventListener('timeupdate', e => {
        //     console.error('this.myPlayer.currentTime', this.myPlayer.currentTime);
        // })
    }

    componentWillUpdate(nextProps) {
        const selectedChanged = this._getSelectedChanged(this.props, nextProps),
            isPlayingChanged = this._getIsPlayingChanged(this.props, nextProps)

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

    _getIsPlayingChanged(oldProps, newProps) {
        return oldProps.isPlaying !== newProps.isPlaying
    }

    _getSelectedChanged(oldProps, newProps) {
        return oldProps.isSelected !== newProps.isSelected
    }

    _getTimeChanged(oldProps, newProps) {
        return oldProps.updatedTimePlayed !== newProps.updatedTimePlayed
    }

    _handleListen(currentTime) {
        if (this.props.isSelected) {
            this.props.handlePlayerTimeChange(currentTime)
        }
    }

    _handleEnded() {
        // FIXME: Waiting for the player to send onEnded event takes too long. Have this be based on the song's own time.
        if (this.props.isSelected) {
            this.props.handlePlayerNextSong()
        }
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

    render() {
        return (
            <ReactAudioPlayer
                src={this.props.mp3}
                ref={(node) => (this.myReactPlayer = node)}
                listenInterval={100}
                onListen={this._handleListen}
                onEnded={this._handleEnded}
            />
        )
    }
}

AudioPlayer.propTypes = {
    // Through Redux.
    isPlaying: PropTypes.bool.isRequired,
    updatedTimePlayed: PropTypes.number,

    // From parent.
    mp3: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handlePlayerTimeReset: PropTypes.func.isRequired,
    handlePlayerNextSong: PropTypes.func.isRequired
}

export default connect(({
    isPlaying,
    updatedTimePlayed
}) => ({
    isPlaying,
    updatedTimePlayed
}))(AudioPlayer)
