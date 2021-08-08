import {
    getSongsNotLoguesCount,
    getSongIsLogue,
} from '../endpoint/album/songs'
import {
    getObjectFromBit,
    getBitFromObject,
} from '../helpers/bit'
import { getArrayOfLength } from '../helpers/general'

export const getPlayersCanPlayThroughFromBit = (bit) => {
    return getObjectFromBit({
        keysList: getArrayOfLength(getSongsNotLoguesCount(), 1),
        bit,
    })
}

export const getPlayerCanPlayThroughFromBit = (
    songIndex,
    playersBit,
) => (
    getObjectFromBit({
        keysCount: getSongsNotLoguesCount(),
        bit: playersBit,

    // If logue, the player to check is the first song.
    })[getSongIsLogue(songIndex) ? 1 : songIndex]
)

export const getBitFromPlayerCanPlayThrough = ({
    bit = 0,
    key,
}) => {
    // First convert the bit number to an object whose values true or false.
    const trueFalseObject = getObjectFromBit({
        keysCount: getSongsNotLoguesCount(),
        bit,
    })

    // Set the value in this object.
    trueFalseObject[key] = true

    // Convert object to new bit number, which is then returned.
    return getBitFromObject({
        trueFalseObject,
    })
}
