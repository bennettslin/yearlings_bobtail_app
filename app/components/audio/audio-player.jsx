import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'

class AudioPlayer extends Component {

    constructor(props) {
        super(props)

        const { playerIndex,
                selectedSongIndex } = this.props,
            isSelected = playerIndex === selectedSongIndex

        this.state = {
            isSelected
        }
    }

    render() {

        return (
            <div className="audio-player">
                <ReactAudioPlayer
                    src={this.props.mp3}
                />
            </div>
        )
    }
}

export default AudioPlayer
