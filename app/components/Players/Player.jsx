// // Hidden component to wrap an audio DOM element.

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import ReactAudioPlayer from 'react-audio-player'

// import { getTimeForVerseIndex } from 'helpers/dataHelper'
// import { getPropsAreShallowEqual } from 'helpers/generalHelper'

// // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

// // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

// // https://www.npmjs.com/package/react-audio-player

// const LISTEN_INTERVAL = 100

// const mapStateToProps = ({
//     isPlaying,
//     updatedTimePlayed,
//     selectedStore: {
//         selectedSongIndex,
//         selectedVerseIndex
//     }
// }) => ({
//     isPlaying,
//     updatedTimePlayed,
//     selectedSongIndex,
//     selectedVerseIndex
// })

// class Player extends Component {

//     static propTypes = {
//         // Through Redux.
//         isPlaying: PropTypes.bool.isRequired,
//         // updatedTimePlayed: PropTypes.number,
//         selectedSongIndex: PropTypes.number.isRequired,
//         selectedVerseIndex: PropTypes.number.isRequired,

//         // From parent.
//         mp3: PropTypes.string.isRequired,
//         songIndex: PropTypes.number.isRequired,
//         totalTime: PropTypes.number.isRequired,
//         handlePlayerTimeChange: PropTypes.func.isRequired,
//         handlePlayerNextSong: PropTypes.func.isRequired,
//         setPlayerCanPlayThrough: PropTypes.func.isRequired
//     }

//     constructor(props) {
//         super(props)

//         this._handleSuspendEvent = this._handleSuspendEvent.bind(this)
//         this._handleEndedEvent = this._handleEndedEvent.bind(this)
//         this._tellAppCurrentTime = this._tellAppCurrentTime.bind(this)

//         this.state = {
//             // Unique identifier for clearing setInterval.
//             intervalId: ''
//         }
//     }

//     shouldComponentUpdate(nextProps) {
//         const {
//                 selectedSongIndex: nextSongIndex
//             } = nextProps

//         // No point in updating if it remains unselected.
//         if (
//             !this._getIsSelected() &&
//             !this._getIsSelected(nextSongIndex)
//         ) {
//             return false
//         }

//         const shouldComponentUpdate = !getPropsAreShallowEqual({
//             props: this.props,
//             nextProps
//         })

//         return shouldComponentUpdate
//     }

//     componentDidMount() {
//         this.myPlayer = this.myReactPlayer.audioEl

//         // Set initial time.
//         this._setCurrentTime()

//         // Tell app that player can now be played without interruption.
//         this.myPlayer.addEventListener(

//             /**
//              * This is effectively the same as canplaythrough. iOS doesn't fire
//              * canplaythrough.
//              */
//             'suspend',
//             this._handleSuspendEvent
//         )

//         this.myPlayer.addEventListener(
//             'ended',
//             this._handleEndedEvent
//         )
//     }

//     componentDidUpdate(prevProps) {
//         const {
//                 isPlaying,
//                 selectedVerseIndex
//             } = this.props,
//             {
//                 selectedSongIndex: prevSongIndex,
//                 selectedVerseIndex: prevVerseIndex,
//                 isPlaying: wasPlaying
//             } = prevProps,

//             isSelected = this._getIsSelected(),
//             wasSelected = this._getIsSelected(prevSongIndex)

//         // Handle pause or no longer selected.
//         if (
//             !isSelected && wasSelected ||
//             !isPlaying && wasPlaying
//         ) {
//             this._handleEndPlaying(isSelected)
//         }

//         // Handle playing if selected.
//         if (
//             isSelected &&
//             isPlaying && !wasPlaying
//         ) {
//             this._handleBeginPlaying()
//         }

//         if (
//             isSelected &&
//             selectedVerseIndex !== prevVerseIndex
//         ) {
//             this._setCurrentTime()
//         }
//     }

//     _clearInterval() {
//         clearInterval(this.state.intervalId)
//         this.setState({
//             intervalId: ''
//         })
//     }

//     _getIsSelected(selectedSongIndex = this.props.selectedSongIndex) {
//         const { songIndex } = this.props
//         return songIndex === selectedSongIndex
//     }

//     _setCurrentTime(
//         isSelected = this._getIsSelected()
//     ) {

//         // If selected, set time to selected verse.
//         if (isSelected) {

//             const {
//                     selectedSongIndex,
//                     selectedVerseIndex
//                 } = this.props,
//                 currentTime = getTimeForVerseIndex(
//                     selectedSongIndex,
//                     selectedVerseIndex
//                 )

//             this.myPlayer.currentTime = currentTime

//             this.props.handlePlayerTimeChange(currentTime)

//         // Otherwise, set time to start of song.
//         } else {
//             this.myPlayer.currentTime = 0
//         }
//     }

//     _handleSuspendEvent() {
//         const {
//             songIndex
//         } = this.props

//         this.props.setPlayerCanPlayThrough(songIndex)
//     }

//     _handleEndedEvent() {
//         const { intervalId } = this.state

//         // Ensure that this does not get called twice in same song.
//         if (intervalId) {
//             this.props.handlePlayerNextSong()

//             this._clearInterval()
//         }
//     }

//     _handleEndPlaying(isSelected) {
//         this.myPlayer.pause()
//         this._clearInterval()

//         // If still selected, reset time to selected verse.
//         this._setCurrentTime(isSelected)
//     }

//     _handleBeginPlaying() {
//         this.myPlayer.play()

//         // Begin listening.
//         const
//             intervalId = setInterval(
//                 this._tellAppCurrentTime,
//                 LISTEN_INTERVAL
//             )

//         this.setState({
//             intervalId
//         })
//     }

//     _tellAppCurrentTime() {
//         const { currentTime } = this.myPlayer,
//             { totalTime } = this.props

//         // If the song has ended, tell app to handle next song selection.
//         if (currentTime > totalTime) {
//             this._handleEndedEvent()

//         // Otherwise, just tell app the audio element's current time.
//         } else {
//             this.props.handlePlayerTimeChange(currentTime)
//         }
//     }

//     _listenForDebugStatements(onlyIfSelected) {

//         const showDebugStatements =
//             this.props.isSelected || !onlyIfSelected

//         if (showDebugStatements) {

//             this.myPlayer.addEventListener('ended', () => {
//                 logger.error('ended', this.props.songIndex);
//             })
//             this.myPlayer.addEventListener('pause', () => {
//                 logger.error('pause', this.props.songIndex);
//             })
//             this.myPlayer.addEventListener('play', () => {
//                 logger.error('play', this.props.songIndex);
//             })
//             this.myPlayer.addEventListener('playing', () => {
//                 logger.error('playing', this.props.songIndex);
//             })
//             this.myPlayer.addEventListener('timeupdate', () => {
//                 logger.error('timeupdate', this.props.songIndex);
//             })

//             // Determine which times ranges have been buffered.
//             this.myPlayer.addEventListener('progress', () => {
//                 logger.error('progress', this.props.songIndex);
//             })

//             // Seek operation has completed.
//             this.myPlayer.addEventListener('seeked', () => {
//                 logger.error('seeked', this.props.songIndex);
//             })

//             // Seek operation has begun.
//             this.myPlayer.addEventListener('seeking', () => {
//                 logger.error('seeking', this.props.songIndex);
//             })

//             // Data is not forthcoming.
//             this.myPlayer.addEventListener('stalled', () => {
//                 logger.error('stalled', this.props.songIndex);
//             })

//             // Download has completed.
//             this.myPlayer.addEventListener('suspend', () => {
//                 logger.error('suspend', this.props.songIndex);
//             })

//             // Enough data is available that the media can be played for now.
//             this.myPlayer.addEventListener('canplay', () => {
//                 logger.error('canplay', this.props.songIndex);
//             })

//             this.myPlayer.addEventListener('canplaythrough', () => {
//                 logger.error('canplaythrough', this.props.songIndex);
//             })

//             this.myPlayer.addEventListener('waiting', () => {
//                 logger.error('waiting', this.props.songIndex);
//             })
//         }
//     }

//     render() {
//         return (
//             <ReactAudioPlayer
//                 ref={(node) => (this.myReactPlayer = node)}
//                 src={this.props.mp3}
//             />
//         )
//     }
// }

// export default connect(mapStateToProps)(Player)
