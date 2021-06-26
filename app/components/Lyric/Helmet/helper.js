import {
    getFullPathForSong,
    getOverviewForSong,
    getSongIsLogue,
    getTitleForSong,
} from '../../../api/album/songs'
import { getTitleForAlbum } from '../../../api/album/title'
import { getStringText } from '../../../helpers/format'
import { spreadHelmetConfig } from '../../../helpers/helmet'
import { getSongUrl, getUrl } from '../../../helpers/url'

export const getMetaTitle = songIndex => (
    `${getTitleForSong(songIndex)} | ${getTitleForAlbum()}`
)

export const getMetaDescription = songIndex => (
    getStringText(getOverviewForSong(songIndex))
)

const getDefaultConfig = songIndex => ({
    'description': getMetaDescription(songIndex),
})

const getFacebookConfig = songIndex => ({
    'og:url': `${getSongUrl({ songIndex })}/`,
    'og:type': 'website',
    'og:title': getMetaTitle(songIndex),
    'og:description': getMetaDescription(songIndex),
    'og:image':
        getUrl(`share/image/facebook_image/${
            getFullPathForSong(songIndex)
        }.jpg`),
})

const getTwitterConfig = songIndex => ({
    'twitter:card': getSongIsLogue(songIndex) ?
        'summary_large_image' :
        'player',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(songIndex),
    'twitter:description': getMetaDescription(songIndex),
    'twitter:image':
        getUrl(`share/image/twitter_thumbnail/${
            getFullPathForSong(songIndex)
        }.jpg`),

    ...!getSongIsLogue(songIndex) && {
        'twitter:player':
            getUrl(`share/entry/${getFullPathForSong(songIndex)}.html`),
        'twitter:player:width': 480,
        'twitter:player:height': 360,
    },
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
