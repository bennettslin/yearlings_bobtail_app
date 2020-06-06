import {
    getSongsNotLoguesCount,
    getSongIsLogue
} from '../api/album/songs'
import {
    getObjectFromBitNumber,
    getBitNumberFromObject
} from '../helpers/bit'
import { getArrayOfLength } from '../helpers/general'

export const getPlayersCanPlayThroughFromBitNumber = (bitNumber) => {
    return getObjectFromBitNumber({
        keysArray: getArrayOfLength(getSongsNotLoguesCount(), 1),
        bitNumber
    })
}

export const getPlayerCanPlayThroughFromBit = (
    songIndex,
    playersBitNumber
) => (
    getObjectFromBitNumber({
        keysCount: getSongsNotLoguesCount(),
        bitNumber: playersBitNumber

    // If logue, the player to check is the first song.
    })[getSongIsLogue(songIndex) ? 1 : songIndex]
)

export const getBitFromPlayerCanPlayThrough = ({
    bitNumber = 0,
    key
}) => {
    // First convert the bit number to an object whose values true or false.
    const trueFalseObject = getObjectFromBitNumber({
        keysCount: getSongsNotLoguesCount(),
        bitNumber
    })

    // Set the value in this object.
    trueFalseObject[key] = true

    // Convert object to new bit number, which is then returned.
    return getBitNumberFromObject({
        trueFalseObject
    })
}

export const getStoreKeyForPlayer = songIndex => {
    return `player${songIndex}`
}
