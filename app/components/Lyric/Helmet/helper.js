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
    `images/socialMedia/album/${getFullPathForSong(songIndex)}.jpg`
)

const getFacebookConfig = songIndex => ({
    'og:url': `${getSongUrl({ songIndex })}/`,
    'og:type': 'website',
    'og:title': getMetaTitle(songIndex),
    'og:description': getMetaDescription(songIndex),
    'og:image': getUrl(getImagePath(songIndex)),
})

const getTwitterConfig = songIndex => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(songIndex),
    'twitter:description': getMetaDescription(songIndex),
    'twitter:image': getUrl(getImagePath(songIndex)),
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
