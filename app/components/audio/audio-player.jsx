import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactAudioPlayer from 'react-audio-player'

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
// https://www.npmjs.com/package/react-audio-player

class AudioPlayer extends Component {

    constructor(props) {
        super(props)

        this._handleListen = this._handleListen.bind(this)
    }

    componentDidMount() {
        this.myPlayer = ReactDOM.findDOMNode(this.myReactPlayer)

        this._handleTimeChange()
        this._handleIsPlayingChange()
    }

    componentWillUpdate(nextProps, nextState) {
        const songChanged = this._getSongChanged(this.props, nextProps),
            isPlayingChanged = this._getIsPlayingChanged(this.props, nextProps)

        if (songChanged || isPlayingChanged) {
            this._handleIsPlayingChange(nextProps)
        }

        if (songChanged) {
            this._handleSongChange(this.props)
        }

        if (nextProps.updatedTimePlayed !== null) {
            this._handleTimeChange(nextProps)
        }
    }

    _getIsSelected(props = this.props) {
        const { playerIndex,
                selectedSongIndex } = props

        return playerIndex === selectedSongIndex
    }

    _getIsPlayingChanged(oldProps, newProps) {
        return oldProps.isPlaying !== newProps.isPlaying
    }

    _getSongChanged(oldProps, newProps) {
        return oldProps.selectedSongIndex !== newProps.selectedSongIndex
    }

    _getTimeChanged(oldProps, newProps) {
        return oldProps.updatedTimePlayed !== newProps.updatedTimePlayed
    }

    _handleListen(currentTime) {
        if (this._getIsSelected()) {
            this.props.onTimeChange(false, currentTime)
        }
    }

    _handleIsPlayingChange(props = this.props) {
        const isSelected = this._getIsSelected(props)

        // Play only if selected and is playing.
        if (isSelected && props.isPlaying && this.myPlayer.paused) {
            this.myPlayer.play()

        // Otherwise pause.
        } else if (!this.myPlayer.paused) {
            this.myPlayer.pause()
        }
    }

    _handleSongChange(oldProps) {
        const wasSelected = this._getIsSelected(oldProps)

        if (wasSelected) {
            this.myPlayer.currentTime = 0
        }
    }

    _handleTimeChange(props = this.props) {
        if (this._getIsSelected(props)) {

            // FIXME: Something should happen here to keep the player calling the onListen handler.
            this.myPlayer.currentTime = props.updatedTimePlayed
            this.props.onTimeUpdated()
        }
    }

    render() {

        const { mp3 } = this.props,
            isSelected = this._getIsSelected()

        return (
            <div className={`audio-player${isSelected ? ' selected' : ''}`}>
                <ReactAudioPlayer
                    src={mp3}
                    ref={(ref) => this.myReactPlayer = ref}
                    listenInterval={100}
                    onListen={this._handleListen}
                />
            </div>
        )
    }
}

export default AudioPlayer
