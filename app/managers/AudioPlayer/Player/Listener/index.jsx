// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updatePlayersStore } from '../../../../redux/players/action'
import { resetAudioQueue } from '../../../../redux/audio/action'
import { getPlayersCanPlayThroughFromBitNumber } from '../../../../helpers/player'
import { getNextPlayerIndexToRender } from './helper'
import {
    QUEUED_PLAY_FROM_LOGUE_SELECTOR,
    QUEUED_PLAY_SONG_INDEX_SELECTOR,
    QUEUED_PLAY_VERSE_INDEX_SELECTOR
} from '../../../../redux/audio/selectors'
import {
    LYRIC_SONG_INDEX_SELECTOR,
    LYRIC_VERSE_INDEX_SELECTOR
} from '../../../../redux/lyric/selectors'

const mapStateToProps = state => {
    const {
            playersStore: { playersBitNumber },
            selectedStore: {
                selectedSongIndex,
                isSelectedLogue
            }
        } = state,
        queuedPlayFromLogue = QUEUED_PLAY_FROM_LOGUE_SELECTOR(state),
        queuedPlaySongIndex = QUEUED_PLAY_SONG_INDEX_SELECTOR(state),
        queuedPlayVerseIndex = QUEUED_PLAY_VERSE_INDEX_SELECTOR(state),
        lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
        lyricVerseIndex = LYRIC_VERSE_INDEX_SELECTOR(state)

    return {
        playersBitNumber,
        selectedSongIndex,
        isSelectedLogue,
        lyricSongIndex,
        lyricVerseIndex,
        queuedPlayFromLogue,
        queuedPlaySongIndex,
        queuedPlayVerseIndex
    }
}

class PlayerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        playersBitNumber: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricVerseIndex: PropTypes.number.isRequired,
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
            lyricSongIndex,
            lyricVerseIndex,
            queuedPlayFromLogue,
            queuedPlaySongIndex,
            queuedPlayVerseIndex
        } = this.props

        if (
            lyricSongIndex === queuedPlaySongIndex &&
            lyricVerseIndex === queuedPlayVerseIndex
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

export default connect(
    mapStateToProps,
    {
        updatePlayersStore,
        resetAudioQueue
    }
)(PlayerListener)
