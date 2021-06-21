import {
    getOverviewForSong,
    getTitleForSong,
} from '../../../api/album/songs'
import { getTitleForAlbum } from '../../../api/album/title'
import { getUrl } from '../../../helpers/url'

export const getMetaTitle = songIndex => (
    `${getTitleForSong(songIndex)} | ${getTitleForAlbum()}`
)

export const getMetaDescription = songIndex => (
    getOverviewForSong(songIndex)
)

const getFacebookConfig = songIndex => ({
    'og:url': getUrl({ songIndex }),
    'og:type': 'website',
    'og:title': getMetaTitle(songIndex),
    'og:description': getMetaDescription(songIndex),
    'og:image': 'https://www.yearlingsbobtail.com/test.jpg',
})

const getTwitterConfig = songIndex => ({
    'twitter:card': 'summary',
    'twitter:site': '@BobtailYearling',
    'twitter:title': getMetaTitle(songIndex),
    'twitter:description': getMetaDescription(songIndex),
    'twitter:image': 'https://www.yearlingsbobtail.com/test.jpg',
})

export const getMetaTags = songIndex => {
    const config = {
        ...getFacebookConfig(songIndex),
        ...getTwitterConfig(songIndex),
    }

    return Object.keys(config).map(metaTagKey => ({
        name: metaTagKey,
        content: config[metaTagKey],
    }))
}
