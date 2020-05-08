import {
    getSongsAndLoguesCount,
    getSongsNotLoguesCount
} from '../album/api/songs'
import {
    getObjectFromBitNumber,
    getValueInBitNumber
} from '../helpers/bit'
import { getArrayOfLength } from '../helpers/general'

export const getPlayersCanPlayThroughFromBitNumber = (bitNumber) => {
    return getObjectFromBitNumber({
        keysArray: getArrayOfLength(getSongsNotLoguesCount(), 1),
        bitNumber
    })
}

export const getStoreKeyForPlayer = (songIndex) => {
    return `player${songIndex}`
}

export const getPlayerCanPlayThrough = ({
    songIndex,
    playersBitNumber

}) => {
    const
        songsCount = getSongsAndLoguesCount(),
        isPrologue = songIndex === 0,
        isEpilogue = songIndex === songsCount - 1,

        playerCanPlayThrough = getValueInBitNumber({
            keysCount: getSongsNotLoguesCount(),
            bitNumber: playersBitNumber,
            key: (isPrologue || isEpilogue) ? 1 : songIndex
        })

    return playerCanPlayThrough
}
