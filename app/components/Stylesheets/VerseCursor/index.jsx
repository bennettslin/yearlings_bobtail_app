import React from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import { getArrayOfLength } from '../../../helpers/general'
import { getMaxVerseCountForAlbum } from '../../../api/album/count'
import {
    VERSE_BEFORE_PREFIX,
    VERSE_CURSOR_PREFIX,
    VERSE_AFTER_PREFIX,
    VERSE_CURSOR_CHILD_PREFIX
} from '../../../constants/verseCursor'

const VerseCursorStylesheets = () => (
    <>
        <Stylesheet
            {...{
                className: 'VerseCursorStylesheet__before',
                indices: getArrayOfLength(getMaxVerseCountForAlbum()),
                parentPrefix: VERSE_BEFORE_PREFIX,
                childPrefix: VERSE_CURSOR_CHILD_PREFIX,
                getStyle: () => ({
                    'background-color': 'gray'
                })
            }}
        />
        <Stylesheet
            {...{
                className: 'VerseCursorStylesheet__cursor',
                indices: getArrayOfLength(getMaxVerseCountForAlbum()),
                parentPrefix: VERSE_CURSOR_PREFIX,
                childPrefix: VERSE_CURSOR_CHILD_PREFIX,
                getStyle: () => ({
                    'background-color': 'gray'
                })
            }}
        />
        <Stylesheet
            {...{
                className: 'VerseCursorStylesheet__after',
                indices: getArrayOfLength(getMaxVerseCountForAlbum()),
                parentPrefix: VERSE_AFTER_PREFIX,
                childPrefix: VERSE_CURSOR_CHILD_PREFIX,
                getStyle: () => ({
                    'background-color': 'gray'
                })
            }}
        />
    </>
)

export default VerseCursorStylesheets
