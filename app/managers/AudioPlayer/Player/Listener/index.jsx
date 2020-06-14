import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePlayersStore } from '../../../../redux/players/action'
import { getPlayersCanPlayThroughFromBit } from '../../../../helpers/player'
import { getNextPlayerIndexToRender } from './helper'
import { mapPlayersBit } from '../../../../redux/players/selectors'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue
} from '../../../../redux/selected/selectors'

const PlayerListener = () => {
    const
        dispatch = useDispatch(),
        playersBit = useSelector(mapPlayersBit),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

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

export default PlayerListener
