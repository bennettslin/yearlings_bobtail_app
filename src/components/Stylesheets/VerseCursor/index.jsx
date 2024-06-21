import React, { memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import { getArrayOfLength } from '../../../helpers/general'
import { getMaxVerseCountForAlbum } from '../../../endpoint/album/count'
import {
    VERSE_BEFORE_PREFIX,
    VERSE_AFTER_PREFIX,
    VERSE_CURSOR_CHILD_PREFIX,
} from '../../../constants/cursor'
import {
    COLOUR__PAST__LIGHTER,
    COLOUR__PAST__LIGHT,
    COLOUR__PAST__DARK,
    COLOUR__PAST__DARKER,
    COLOUR__FUTURE__LIGHTER,
    COLOUR__FUTURE__LIGHT,
    COLOUR__FUTURE__DARK,
    COLOUR__FUTURE__DARKER,
} from '../../../scss/exports/style.module'

const VerseCursorStylesheets = () => (
    <>
        <Stylesheet
            {...{
                className: 'VerseCursorStylesheet__before',
                indices: getArrayOfLength(getMaxVerseCountForAlbum()),
                parentPrefix: VERSE_BEFORE_PREFIX,
                childPrefix: VERSE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__PAST__LIGHTER :
                        COLOUR__PAST__LIGHT,
                }),
            }}
        />
        <Stylesheet
            {...{
                className: 'VerseCursorStylesheet__after',
                indices: getArrayOfLength(getMaxVerseCountForAlbum()),
                parentPrefix: VERSE_AFTER_PREFIX,
                childPrefix: VERSE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__FUTURE__LIGHTER :
                        COLOUR__FUTURE__LIGHT,
                }),
            }}
        />
        <Stylesheet
            {...{
                className: 'VerseCursorStylesheet__lockedBefore',
                indices: getArrayOfLength(getMaxVerseCountForAlbum()),
                parentPrefix: `TW__showPastFutureLyrics .${VERSE_BEFORE_PREFIX}`,
                childPrefix: VERSE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__PAST__DARK :
                        COLOUR__PAST__DARKER,
                }),
            }}
        />
        <Stylesheet
            {...{
                className: 'VerseCursorStylesheet__lockedAfter',
                indices: getArrayOfLength(getMaxVerseCountForAlbum()),
                parentPrefix: `TW__showPastFutureLyrics .${VERSE_AFTER_PREFIX}`,
                childPrefix: VERSE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__FUTURE__DARK :
                        COLOUR__FUTURE__DARKER,
                }),
            }}
        />
    </>
)

export default memo(VerseCursorStylesheets)
