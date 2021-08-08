import {
    getFullPathForSong,
    getOverviewForSong,
    getSongIsLogue,
    getTitleForSong,
} from '../../../endpoint/album/songs'
import { getTitleForAlbum } from '../../../endpoint/album/title'
import { getTruncatedStringText } from '../../../helpers/format'
import { spreadHelmetConfig } from '../../../helpers/helmet'
import { getSongUrl, getUrl } from '../../../helpers/url'

export const getMetaTitle = songIndex => (
    `${getTitleForSong(songIndex)} | ${getTitleForAlbum()}`
)

export const getMetaDescription = songIndex => (
    getTruncatedStringText(getOverviewForSong(songIndex))
)

const getDefaultConfig = songIndex => ({
    description: getMetaDescription(songIndex),
})

const getFacebookConfig = songIndex => ({
    'og:url': `${getSongUrl({ songIndex })}/`,
    'og:type': 'website',
    'og:title': getMetaTitle(songIndex),
    'og:description': getMetaDescription(songIndex),
    'og:image':
        getUrl(`share/image/facebook/${
            getFullPathForSong(songIndex)
        }.png`),
})

const getTwitterConfig = songIndex => ({
    'twitter:card': getSongIsLogue(songIndex) ?
        'summary' :
        'player',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(songIndex),
    'twitter:description': getMetaDescription(songIndex),
    'twitter:image':
        getUrl(`share/image/twitter/${
            getFullPathForSong(songIndex)
        }.png`),

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
