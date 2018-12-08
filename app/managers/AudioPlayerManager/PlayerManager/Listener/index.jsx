// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayersStore } from 'flux/players/action'
import { resetPlayingQueue } from 'flux/playing/action'

import { getNextPlayerIndexToRender } from './helper'

class PlayerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        playersCanPlayThrough: PropTypes.object.isRequired,
        queuedPlayFromLogue: PropTypes.bool.isRequired,
        queuedPlaySongIndex: PropTypes.number.isRequired,
        queuedPlayVerseIndex: PropTypes.number.isRequired,
        updatePlayersStore: PropTypes.func.isRequired,
        resetPlayingQueue: PropTypes.func.isRequired,

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
                queuedPlayFromLogue,
                queuedPlaySongIndex,
                queuedPlayVerseIndex
            } = this.props,
            {
                queuedPlaySongIndex: prevSongIndex,
                queuedPlayVerseIndex: prevVerseIndex
            } = prevProps

        if (
            (
                queuedPlaySongIndex > -1 &&
                queuedPlaySongIndex !== prevSongIndex
            ) || (
                queuedPlayVerseIndex > -1 &&
                queuedPlayVerseIndex !== prevVerseIndex
            )
        ) {
            this.props.handleSelectPlayer({
                isPlayFromLogue: queuedPlayFromLogue,
                nextSongIndex: queuedPlaySongIndex,
                nextVerseIndex: queuedPlayVerseIndex
            })

            this.props.resetPlayingQueue()
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

            this.props.updatePlayersStore({
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
    playersStore: {
        playersBitNumber,
        ...playersCanPlayThrough
    },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    },
    playingStore: {
        queuedPlayFromLogue,
        queuedPlaySongIndex,
        queuedPlayVerseIndex
    }
}) => ({
    playersBitNumber,
    playersCanPlayThrough,
    selectedSongIndex,
    isSelectedLogue,
    queuedPlayFromLogue,
    queuedPlaySongIndex,
    queuedPlayVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePlayersStore,
        resetPlayingQueue
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerListener)
