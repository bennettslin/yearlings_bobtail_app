import { getArrayOfLength } from '../../helpers/general'
import { getMaxVerseCountForAlbum } from '../../api/album/count'

export const getPrefixedVerseClassNames = verseCursorIndex => (
    getArrayOfLength(getMaxVerseCountForAlbum()).map(index => {
        // "Cursor."
        let prefix = 'c'

        if (index < verseCursorIndex) {
            // "Before."
            prefix = 'b'

        } else if (index > verseCursorIndex) {
            // "After."
            prefix = 'a'
        }

        return `${prefix}${index}`
    })
)
