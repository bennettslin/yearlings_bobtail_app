import album from '../../../../../admin/data/album'
import { getArrayOfLength } from '../../../../helpers/general'

export default [
    {
        path: '/',
        pageSongIndex: 0,
    },

    // Pages where path is just song index.
    ...getArrayOfLength(album.songs.length).map(index => ({
        path: `${index}`,
        pageSongIndex: index,
    })),

    // Pages where path is song index with path name.
    ...album.songs.map(({ path }, index) => ({
        path: `${index}-${path}`,
        pageSongIndex: index,
    })),
]
