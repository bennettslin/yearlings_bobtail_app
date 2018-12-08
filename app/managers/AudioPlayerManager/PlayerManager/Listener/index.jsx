// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAudioStore } from 'flux/audio/action'
import { resetPlayerQueue } from 'flux/player/action'

import { getNextPlayerIndexToRender } from './helper'

class PlayerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        playersCanPlayThrough: PropTypes.object.isRequired,
        queuedPlayingFromLogue: PropTypes.bool.isRequired,
        queuedPlayerSongIndex: PropTypes.number.isRequired,
        queuedPlayerVerseIndex: PropTypes.number.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
        resetPlayerQueue: PropTypes.func.isRequired,

        // From parent.
        handleSelectPlayer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._updateNextPlayerToRender()
    }

    componentDidUpdate(prevProps) {
        this._checkPlayerChange(prevProps)
        this._updateNextPlayerToRender(prevProps)
    }

    _checkPlayerChange(prevProps) {
        const {
                queuedPlayingFromLogue,
                queuedPlayerSongIndex,
                queuedPlayerVerseIndex
            } = this.props,
            {
                queuedPlayerSongIndex: prevSongIndex,
                queuedPlayerVerseIndex: prevVerseIndex
            } = prevProps

        if (
            (
                queuedPlayerSongIndex > -1 &&
                queuedPlayerSongIndex !== prevSongIndex
            ) || (
                queuedPlayerVerseIndex > -1 &&
                queuedPlayerVerseIndex !== prevVerseIndex
            )
        ) {
            this.props.handleSelectPlayer({
                isPlayingFromLogue: queuedPlayingFromLogue,
                nextSongIndex: queuedPlayerSongIndex,
                nextVerseIndex: queuedPlayerVerseIndex
            })

            this.props.resetPlayerQueue()
        }
    }

    _updateNextPlayerToRender(prevProps = {}) {
        const
            { playersBitNumber } = this.props,
            { playersBitNumber: prevBitNumber } = prevProps

        if (playersBitNumber !== prevBitNumber) {
            const {
                selectedSongIndex,
                isSelectedLogue,
                playersCanPlayThrough
            } = this.props

            this.props.updateAudioStore({
                nextPlayerToRender: getNextPlayerIndexToRender(
                    selectedSongIndex,
                    isSelectedLogue,
                    playersCanPlayThrough
                )
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    audioStore: {
        playersBitNumber,
        ...playersCanPlayThrough
    },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    },
    playerStore: {
        queuedPlayingFromLogue,
        queuedPlayerSongIndex,
        queuedPlayerVerseIndex
    }
}) => ({
    playersBitNumber,
    playersCanPlayThrough,
    selectedSongIndex,
    isSelectedLogue,
    queuedPlayingFromLogue,
    queuedPlayerSongIndex,
    queuedPlayerVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAudioStore,
        resetPlayerQueue
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerListener)
