import React, { memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'
import { getArrayOfLength } from '../../../helpers/general'
import { getMaxSceneCountForAlbum } from '../../../endpoint/album/count'
import {
    SCENE_BEFORE_PREFIX,
    SCENE_AFTER_PREFIX,
    SCENE_CURSOR_CHILD_PREFIX,
} from '../../../constants/cursor'
import {
    COLOUR__PAST__MEDLIGHT,
    COLOUR__PAST__MEDIUM,
    COLOUR__PAST__DARK,
    COLOUR__PAST__DARKER,
    COLOUR__FUTURE__LIGHTER,
    COLOUR__FUTURE__LIGHT,
    COLOUR__FUTURE__DARK,
    COLOUR__FUTURE__DARKER,
} from '../../../scss/exports/style.module'

const SceneCursorStylesheets = () => (
    <>
        <Stylesheet
            {...{
                className: 'SceneCursorStylesheet__before',
                indices: getArrayOfLength(getMaxSceneCountForAlbum()),
                parentPrefix: SCENE_BEFORE_PREFIX,
                childPrefix: SCENE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__PAST__MEDLIGHT :
                        COLOUR__PAST__MEDIUM,
                }),
            }}
        />
        <Stylesheet
            {...{
                className: 'SceneCursorStylesheet__after',
                indices: getArrayOfLength(getMaxSceneCountForAlbum()),
                parentPrefix: SCENE_AFTER_PREFIX,
                childPrefix: SCENE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__FUTURE__DARK :
                        COLOUR__FUTURE__DARKER,
                }),
            }}
        />
        {/* This is redundant for now. I might change the colours later. */}
        {/* <Stylesheet
            {...{
                className: 'SceneCursorStylesheet__playingBefore',
                indices: getArrayOfLength(getMaxSceneCountForAlbum()),
                parentPrefix: `PlW__isPlaying .${SCENE_BEFORE_PREFIX}`,
                childPrefix: SCENE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__PAST__MEDLIGHT :
                        COLOUR__PAST__MEDIUM
                })
            }}
        /> */}
        <Stylesheet
            {...{
                className: 'SceneCursorStylesheet__playingAfter',
                indices: getArrayOfLength(getMaxSceneCountForAlbum()),
                parentPrefix: `PlW__isPlaying .${SCENE_AFTER_PREFIX}`,
                childPrefix: SCENE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__FUTURE__LIGHTER :
                        COLOUR__FUTURE__LIGHT,
                }),
            }}
        />
        <Stylesheet
            {...{
                className: 'SceneCursorStylesheet__lockedBefore',
                indices: getArrayOfLength(getMaxSceneCountForAlbum()),
                parentPrefix: `TW__showPastFutureLyrics .${SCENE_BEFORE_PREFIX}`,
                childPrefix: SCENE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__PAST__DARK :
                        COLOUR__PAST__DARKER,
                }),
            }}
        />
        <Stylesheet
            {...{
                className: 'SceneCursorStylesheet__lockedAfter',
                indices: getArrayOfLength(getMaxSceneCountForAlbum()),
                parentPrefix: `TW__showPastFutureLyrics .${SCENE_AFTER_PREFIX}`,
                childPrefix: SCENE_CURSOR_CHILD_PREFIX,
                getStyle: index => ({
                    'background-color': index % 2 ?
                        COLOUR__FUTURE__DARK :
                        COLOUR__FUTURE__DARKER,
                }),
            }}
        />
    </>
)

export default memo(SceneCursorStylesheets)
