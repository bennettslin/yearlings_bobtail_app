import { getArrayOfLength } from '../../helpers/general'
import { getMaxVerseCountForAlbum } from '../../api/album/count'
import {
    VERSE_BEFORE_PREFIX,
    VERSE_CURSOR_PREFIX,
    VERSE_AFTER_PREFIX
} from '../../constants/verseCursor'

export const getPrefixedVerseClassNames = verseCursorIndex => (
    getArrayOfLength(getMaxVerseCountForAlbum()).map(index => {
        let prefix = VERSE_CURSOR_PREFIX

        if (index < verseCursorIndex) {
            prefix = VERSE_BEFORE_PREFIX

        } else if (index > verseCursorIndex) {
            prefix = VERSE_AFTER_PREFIX
        }

        return `${prefix}${index}`
    })
)
