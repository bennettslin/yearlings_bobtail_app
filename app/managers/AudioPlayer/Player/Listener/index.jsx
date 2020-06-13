import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updatePlayersStore } from '../../../../redux/players/action'
import { resetAudioQueue } from '../../../../redux/audio/action'
import { getPlayersCanPlayThroughFromBit } from '../../../../helpers/player'
import { getNextPlayerIndexToRender } from './helper'
import {
    mapQueuedPlayFromLogue,
    mapQueuedPlaySongIndex,
    mapIsSelectPlayReady
} from '../../../../redux/audio/selectors'
import { mapPlayersBit } from '../../../../redux/players/selectors'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue
} from '../../../../redux/selected/selectors'

const PlayerListener = ({ handleSelectPlayer }) => {
    const
        dispatch = useDispatch(),
        queuedPlayFromLogue = useSelector(mapQueuedPlayFromLogue),
        queuedPlaySongIndex = useSelector(mapQueuedPlaySongIndex),
        isSelectPlayReady = useSelector(mapIsSelectPlayReady),
        playersBit = useSelector(mapPlayersBit),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    useEffect(() => {
        if (isSelectPlayReady) {
            /**
             * Wait for song to render, in case the user is cycling through
             * songs in quick succession.
             */
            handleSelectPlayer({
                isPlayFromLogue: queuedPlayFromLogue,
                nextSongIndex: queuedPlaySongIndex
            })

            dispatch(resetAudioQueue())
        }
    }, [isSelectPlayReady])

    useEffect(() => {
        const playersCanPlayThrough = getPlayersCanPlayThroughFromBit(
            playersBit
        )

        dispatch(updatePlayersStore({
            nextPlayerToRender: getNextPlayerIndexToRender(
                selectedSongIndex,
                isSelectedLogue,
                playersCanPlayThrough
            )
        }))
    }, [playersBit])

    return null
}

PlayerListener.propTypes = {
    handleSelectPlayer: PropTypes.func.isRequired
}

export default PlayerListener
