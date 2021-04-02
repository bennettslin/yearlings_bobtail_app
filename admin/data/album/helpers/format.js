import albumLyrics from '../lyrics'
import { isString } from '../../../../app/helpers/general'

const _formatLyricString = lyric => (
    // TODO: Replace straight with smart quotes.
    lyric
)

export const _recurseForFormat = lyricEntity => {
    // Null is an object.
    if (!lyricEntity) {
        return lyricEntity

    } else if (isString(lyricEntity)) {
        return _formatLyricString(lyricEntity)

    // Array is an object.
    } else if (Array.isArray(lyricEntity)) {
        return lyricEntity.map(lyric => (
            _recurseForFormat(lyric)
        ))

    } else if (typeof lyricEntity === 'object') {
        const newEntity = {}

        // TODO: Be smarter about only formatting certain strings?
        for (const key in lyricEntity) {
            newEntity[key] = _recurseForFormat(lyricEntity[key])
        }

        return newEntity

    // It's a number.
    } else {
        return lyricEntity
    }
}

// TODO: Include overview, album title, song titles.
export const formatLyricMetadata = songIndex => {
    const { lyricUnits } = albumLyrics[songIndex]
    albumLyrics[songIndex].lyricUnits = _recurseForFormat(lyricUnits)
}
