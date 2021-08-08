import { getAlbum } from '../builds'

export const getMaxSceneCountForAlbum = () => (
    getAlbum().maxSceneCount
)

export const getMaxVerseCountForAlbum = () => (
    getAlbum().maxVerseCount
)
