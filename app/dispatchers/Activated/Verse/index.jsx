// Child that knows rules to select activated verse.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { getStartTimeForVerse } from '../../../album/api/time'
import { getSceneIndexForVerse } from '../../../album/api/verses'
import { getActivatedVerseForDirection } from './helper'
import { ACTIVATED_VERSE_INDEX_SELECTOR } from '../../../redux/activated/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_VERSE_INDEX_SELECTOR,
    IS_SELECTED_LOGUE_SELECTOR
} from '../../../redux/selected/selectors'

const ActivatedVerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        activatedVerseIndex = useSelector(ACTIVATED_VERSE_INDEX_SELECTOR),
        selectedSongIndex = useSelector(SELECTED_SONG_INDEX_SELECTOR),
        selectedVerseIndex = useSelector(SELECTED_VERSE_INDEX_SELECTOR),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        _queueScrollToActivatedVerse = nextVerseIndex => {
            dispatch(updateScrollLyricStore({
                queuedScrollLyricLog:
                    `Activate verse ${nextVerseIndex}.`,
                queuedScrollLyricByVerse: true,
                queuedScrollLyricIndex: nextVerseIndex
            }))
        },
        activateVerseIndex = (nextVerseIndex) => {
            // Do not allow selected verse to be activated.
            if (selectedVerseIndex === nextVerseIndex) {
                return
            }

            dispatch(updateActivatedStore({
                activatedSceneIndex: getSceneIndexForVerse(
                    selectedSongIndex,
                    nextVerseIndex
                ),
                activatedVerseIndex: nextVerseIndex,
                activatedTime: getStartTimeForVerse(
                    selectedSongIndex,
                    nextVerseIndex
                )
            }))

            // Turn off auto scroll once verse or scene is activated.
            dispatch(updateToggleStore({
                isAutoScroll: false
            }))
        },
        activateVerseDirection = (direction) => {
            if (isSelectedLogue) {
                return false
            }

            const nextVerseIndex = getActivatedVerseForDirection({
                selectedSongIndex,
                selectedVerseIndex,
                activatedVerseIndex,
                direction
            })

            activateVerseIndex(nextVerseIndex)
            _queueScrollToActivatedVerse(nextVerseIndex)
            return true
        }

    useImperativeHandle(ref, () => ({
        activateVerseIndex,
        activateVerseDirection
    }))
    return null
})

export default ActivatedVerseDispatcher
