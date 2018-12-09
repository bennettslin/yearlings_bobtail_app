// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayersStore } from 'flux/players/action'
import { resetAudioQueue } from 'flux/audio/action'

import { getPlayersCanPlayThroughFromBitNumber } from 'helpers/player'
import { getNextPlayerIndexToRender } from './helper'

class PlayerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,
        queuedPlayFromLogue: PropTypes.bool.isRequired,
        queuedPlaySongIndex: PropTypes.number.isRequired,
        queuedPlayVerseIndex: PropTypes.number.isRequired,
        updatePlayersStore: PropTypes.func.isRequired,
        resetAudioQueue: PropTypes.func.isRequired,

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

    _checkPlayerChange() {
        const {
            renderedSongIndex,
            renderedVerseIndex,
            queuedPlayFromLogue,
            queuedPlaySongIndex,
            queuedPlayVerseIndex
        } = this.props

        if (
            renderedSongIndex === queuedPlaySongIndex &&
            renderedVerseIndex === queuedPlayVerseIndex
        ) {
            /**
             * Wait for song to render, in case the user is cycling through
             * songs in quick succession.
             */
            this.props.handleSelectPlayer({
                isPlayFromLogue: queuedPlayFromLogue,
                nextSongIndex: queuedPlaySongIndex,
                nextVerseIndex: queuedPlayVerseIndex
            })

            this.props.resetAudioQueue()
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
                    playersBitNumber
                } = this.props,

                playersCanPlayThrough = getPlayersCanPlayThroughFromBitNumber(
                    playersBitNumber
                )

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
    playersStore: { playersBitNumber },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    },
    renderedStore: {
        renderedSongIndex,
        renderedVerseIndex
    },
    audioStore: {
        queuedPlayFromLogue,
        queuedPlaySongIndex,
        queuedPlayVerseIndex
    }
}) => ({
    playersBitNumber,
    selectedSongIndex,
    isSelectedLogue,
    renderedSongIndex,
    renderedVerseIndex,
    queuedPlayFromLogue,
    queuedPlaySongIndex,
    queuedPlayVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePlayersStore,
        resetAudioQueue
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerListener)
