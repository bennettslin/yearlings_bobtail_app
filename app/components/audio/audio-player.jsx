import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ReactAudioPlayer from 'react-audio-player'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedSongIndex,
    isPlaying,
    updatedTimePlayed
}) => ({
// Pass Redux state into component props.
    selectedSongIndex,
    isPlaying,
    updatedTimePlayed
})

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
// https://www.npmjs.com/package/react-audio-player

class AudioPlayer extends Component {

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
                    'mp3',
                    'isPlaying',
                    'playerIndex',
                    'selectedSongIndex',
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

    // shouldComponentUpdate(nextProps) {
    //     const songChanged = this._getSongChanged(this.props, nextProps),
    //         isPlayingChanged = this._getIsPlayingChanged(this.props, nextProps)
    //
    //     return songChanged || isPlayingChanged || nextProps.updatedTimePlayed !== null
    // }

    componentWillUpdate(nextProps) {
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
            this.props.handlePlayerTimeChange(currentTime)
        }
    }

    _handleEnded() {
        // FIXME: Waiting for the player to send onEnded event takes too long. Have this be based on the song's own time.
        if (this._getIsSelected()) {
            this.props.handlePlayerNextSong()
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
            this.props.handlePlayerTimeReset()
        }
    }

    render() {
        const { mp3,
                playerIndex } = this.props,

            isSelected = this._getIsSelected()

        return (
            <div className={classnames(
                'audio-player',
                `player-${playerIndex}`,
                { 'selected': isSelected }
            )}>
                <ReactAudioPlayer
                    src={mp3}
                    ref={(node) => (this.myReactPlayer = node)}
                    listenInterval={100}
                    onListen={this._handleListen}
                    onEnded={this._handleEnded}
                />
            </div>
        )
    }
}

AudioPlayer.propTypes = {
    mp3: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    playerIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    updatedTimePlayed: PropTypes.number,
    handlePlayerTimeReset: PropTypes.func.isRequired,
    handlePlayerNextSong: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(AudioPlayer)
