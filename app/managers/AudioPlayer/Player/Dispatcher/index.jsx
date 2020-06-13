import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePlayersStore } from '../../../../redux/players/action'
import { getBitFromPlayerCanPlayThrough } from '../../../../helpers/player'
import { mapPlayersBit } from '../../../../redux/players/selectors'

const PlayerDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        playersBit = useSelector(mapPlayersBit)

    const dispatchPlayerCanPlayThrough = songIndex => {
        dispatch(updatePlayersStore({
            playersBit: getBitFromPlayerCanPlayThrough({
                bit: playersBit,
                key: songIndex
            })
        }))
    }

    useImperativeHandle(ref, () => dispatchPlayerCanPlayThrough)
    return null
})

export default PlayerDispatcher
