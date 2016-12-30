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

        this._handlePlay()
    }

    componentWillUpdate(nextProps, nextState) {
        if (this._getShouldUpdate(this.props, nextProps)) {
            this._handlePlay(nextProps)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this._getShouldUpdate(prevProps, this.props)) {
            
        }
    }

    getIsSelected(props = this.props) {
        const { playerIndex,
                selectedSongIndex } = props

        return playerIndex === selectedSongIndex
    }

    _getShouldUpdate(oldProps, newProps) {
        return (oldProps.selectedSongIndex !== newProps.selectedSongIndex) ||
            (oldProps.isPlaying !== newProps.isPlaying)
    }

    _handleListen(currentTime) {
        if (this.getIsSelected()) {
            this.props.onTimeChange(true, currentTime)
        }
    }

    _handlePlay(props = this.props) {
        if (this.getIsSelected()) {
            if (props.isPlaying && this.myPlayer.paused) {
                this.myPlayer.play()
            } else if (!props.isPlaying && !this.myPlayer.paused) {
                this.myPlayer.pause()
            }
        }
    }

    render() {

        const { mp3 } = this.props,
            isSelected = this.getIsSelected()

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
