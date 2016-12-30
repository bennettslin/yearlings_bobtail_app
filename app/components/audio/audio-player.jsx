import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactAudioPlayer from 'react-audio-player'

class AudioPlayer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.myPlayer = ReactDOM.findDOMNode(this.myReactPlayer)
    }

    componentWillUpdate(nextProps, nextState) {
        if (this._getShouldUpdate(this.props, nextProps)) {
            if (this.getIsSelected(nextProps)) {
                console.error('this.myPlayer', this.myPlayer);
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this._getShouldUpdate(prevProps, this.props)) {
            if (this.getIsSelected(this.props)) {
                console.error('this.myPlayer', this.myPlayer);
            }
        }
    }

    getIsSelected(props = this.props) {
        const { playerIndex,
                selectedSongIndex } = props

        return playerIndex === selectedSongIndex
    }

    _getShouldUpdate(oldProps, newProps) {
        return oldProps.selectedSongIndex !== newProps.selectedSongIndex
    }

    handleListen(currentTime) {
        console.error('currentTime', currentTime);
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
                    onListen={this.handleListen}
                />
            </div>
        )
    }
}

export default AudioPlayer
