import { TWITTER_ACCOUNT } from '../../../constants/socialMedia'
import { getFullPathForSong, getOverviewForSong, getSongIsLogue, getTitleForSong } from '../../../endpoint/album/songs'
import { getTitleForAlbum } from '../../../endpoint/album/title'
import { getTruncatedStringText } from '../../../helpers/format'
import { spreadHelmetConfig } from '../../../helpers/helmet'
import { getSongUrl } from '../../../helpers/url'
import { getUrl } from '../../gatsby/path'

export const getAlbumMetaTitle = songIndex => (
    `${getTitleForSong(songIndex)} | ${getTitleForAlbum()}`
)

const _getAlbumMetaDescription = songIndex => (
    getTruncatedStringText(getOverviewForSong(songIndex))
)

const _getAlbumDefaultConfig = songIndex => ({
    description: _getAlbumMetaDescription(songIndex),
})

const _getAlbumFacebookConfig = songIndex => ({
    'og:url': `${getSongUrl({ songIndex })}/`,
    'og:type': 'website',
    'og:title': getAlbumMetaTitle(songIndex),
    'og:description': _getAlbumMetaDescription(songIndex),
    'og:image':
        getUrl(`share/image/facebook/${
            getFullPathForSong(songIndex)
        }.png`),
})

const _getAlbumTwitterConfig = songIndex => ({
    'twitter:card': getSongIsLogue(songIndex) ?
        'summary' :
        'player',
    'twitter:site': `@${TWITTER_ACCOUNT}`,
    'twitter:title': getAlbumMetaTitle(songIndex),
    'twitter:description': _getAlbumMetaDescription(songIndex),
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

export const getAlbumMetaTags = songIndex => ([
    ...spreadHelmetConfig({
        config: {
            ..._getAlbumDefaultConfig(songIndex),
            ..._getAlbumTwitterConfig(songIndex),
        },
        nameKey: 'name',
    }),
    ...spreadHelmetConfig({
        config: _getAlbumFacebookConfig(songIndex),
        nameKey: 'property',
    }),
])
