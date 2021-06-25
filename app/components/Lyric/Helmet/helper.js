import {
    getFullPathForSong,
    getOverviewForSong,
    getTitleForSong,
} from '../../../api/album/songs'
import { getTitleForAlbum } from '../../../api/album/title'
import { spreadHelmetConfig } from '../../../helpers/helmet'
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

const getImagePath = songIndex => (
    `share/image/${getFullPathForSong(songIndex)}.jpg`
)

const getPlayerPath = songIndex => (
    `share/template/${getFullPathForSong(songIndex)}.html`
)

const getFacebookConfig = songIndex => ({
    'og:url': `${getSongUrl({ songIndex })}/`,
    'og:type': 'website',
    'og:title': getMetaTitle(songIndex),
    'og:description': getMetaDescription(songIndex),
    'og:image': getUrl(getImagePath(songIndex)),
})

const getTwitterConfig = songIndex => ({
    'twitter:card': 'player',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(songIndex),
    'twitter:description': getMetaDescription(songIndex),
    'twitter:image': getUrl(getImagePath(songIndex)),
    'twitter:player': getUrl(getPlayerPath(songIndex)),
    'twitter:player:width': 480,
    'twitter:player:height': 480,
})

export const getMetaTags = songIndex => ([
    ...spreadHelmetConfig({
        config: {
            ...getDefaultConfig(songIndex),
            ...getTwitterConfig(songIndex),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: getFacebookConfig(songIndex),
        nameKey: 'property',
    }),
])
