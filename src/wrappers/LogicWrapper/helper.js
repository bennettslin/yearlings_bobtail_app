import { getArrayOfLength } from '../../helpers/general'
import {
    getMaxSceneCountForAlbum,
    getMaxVerseCountForAlbum,
} from '../../endpoint/album/count'
import {
    SCENE_BEFORE_PREFIX,
    SCENE_CURSOR_PREFIX,
    SCENE_AFTER_PREFIX,
    VERSE_BEFORE_PREFIX,
    VERSE_CURSOR_PREFIX,
    VERSE_AFTER_PREFIX,
} from '../../constants/cursor'

export const getPrefixedSceneClassNames = sceneCursorIndex => (
    getArrayOfLength(getMaxSceneCountForAlbum()).map(index => {
        let prefix = SCENE_CURSOR_PREFIX

        if (index < sceneCursorIndex) {
            prefix = SCENE_BEFORE_PREFIX

        } else if (index > sceneCursorIndex) {
            prefix = SCENE_AFTER_PREFIX
        }

        return `${prefix}${index}`
    })
)

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
