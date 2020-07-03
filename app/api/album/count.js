import { getAlbum } from '../builds'

export const getMaxVerseCountForAlbum = () => (
    getAlbum().maxVerseCount
)
