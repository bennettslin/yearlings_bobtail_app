import {
    getFullPathForSong,
    getOverviewForSong,
    getTitleForSong,
} from '../../../api/album/songs'
import { getTitleForAlbum } from '../../../api/album/title'
import { getSongUrl, getUrl } from '../../../helpers/url'

export const getMetaTitle = songIndex => (
    `${getTitleForSong(songIndex)} | ${getTitleForAlbum()}`
)

export const getMetaDescription = songIndex => (
    getOverviewForSong(songIndex)
)

const getDefaultConfig = songIndex => ({
    'description': getMetaDescription(songIndex),
})

const getFacebookConfig = songIndex => ({
    'og:url': getSongUrl({ songIndex }),
    'og:type': 'website',
    'og:title': getMetaTitle(songIndex),
    'og:description': getMetaDescription(songIndex),
    'og:image': getUrl(`${getFullPathForSong(songIndex)}.jpg`),
})

const getTwitterConfig = songIndex => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(songIndex),
    'twitter:description': getMetaDescription(songIndex),
    'twitter:image': getUrl(`${getFullPathForSong(songIndex)}.jpg`),
})

// TODO: This is duplicated.
const spreadConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

export const getMetaTags = songIndex => ([
    ...spreadConfig({
        config: {
            ...getDefaultConfig(songIndex),
            ...getTwitterConfig(songIndex),
        },
        nameKey: 'name',
    }),
    ...spreadConfig({
        config: getFacebookConfig(songIndex),
        nameKey: 'property',
    }),
])
