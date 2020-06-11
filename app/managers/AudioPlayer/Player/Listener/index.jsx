// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updatePlayersStore } from '../../../../redux/players/action'
import { resetAudioQueue } from '../../../../redux/audio/action'
import { getPlayersCanPlayThroughFromBit } from '../../../../helpers/player'
import { getNextPlayerIndexToRender } from './helper'
import {
    mapQueuedPlayFromLogue,
    mapQueuedPlaySongIndex,
    mapQueuedPlayVerseIndex,
    mapIsSelectPlayReady
} from '../../../../redux/audio/selectors'
import { mapPlayersBit } from '../../../../redux/players/selectors'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue
} from '../../../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        queuedPlayFromLogue = mapQueuedPlayFromLogue(state),
        queuedPlaySongIndex = mapQueuedPlaySongIndex(state),
        queuedPlayVerseIndex = mapQueuedPlayVerseIndex(state),
        isSelectPlayReady = mapIsSelectPlayReady(state),
        playersBit = mapPlayersBit(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state)
    return {
        playersBit,
        selectedSongIndex,
        isSelectedLogue,
        queuedPlayFromLogue,
        queuedPlaySongIndex,
        queuedPlayVerseIndex,
        isSelectPlayReady
    }
}

class PlayerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        playersBit: PropTypes.number.isRequired,
        queuedPlayFromLogue: PropTypes.bool.isRequired,
        queuedPlaySongIndex: PropTypes.number.isRequired,
        queuedPlayVerseIndex: PropTypes.number.isRequired,
        isSelectPlayReady: PropTypes.bool.isRequired,
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
            queuedPlayFromLogue,
            queuedPlaySongIndex,
            queuedPlayVerseIndex,
            isSelectPlayReady
        } = this.props

        if (isSelectPlayReady) {
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
            { playersBit } = this.props,
            { playersBit: prevBit } = prevProps

        if (playersBit !== prevBit) {
            const {
                    selectedSongIndex,
                    isSelectedLogue,
                    playersBit
                } = this.props,

                playersCanPlayThrough = getPlayersCanPlayThroughFromBit(
                    playersBit
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

export default connect(
    mapStateToProps,
    {
        updatePlayersStore,
        resetAudioQueue
    }
)(PlayerListener)
