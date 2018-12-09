import {
    getSongsAndLoguesCount,
    getSongsNotLoguesCount
} from 'helpers/data'
import {
    getObjectFromBitNumber,
    getValueInBitNumber
} from 'helpers/bit'
import { getArrayOfLength } from 'helpers/general'

const getPlayersCanPlayThroughFromBitNumber = (bitNumber) => {
    return getObjectFromBitNumber({
        keysArray: getArrayOfLength(getSongsNotLoguesCount(), 1),
        bitNumber
    })
}

const getStoreKeyForPlayer = (songIndex) => {
    return `player${songIndex}`
}

const getPlayerCanPlayThrough = ({
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

export {
    getStoreKeyForPlayer,
    getPlayersCanPlayThroughFromBitNumber,
    getPlayerCanPlayThrough
}
