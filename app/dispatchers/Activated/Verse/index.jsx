// Child that knows rules to select activated verse.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { getStartTimeForVerse } from '../../../api/album/time'
import { getSceneIndexForVerse } from '../../../api/album/verses'
import { getActivatedVerseForDirection } from './helper'
import { mapActivatedVerseIndex } from '../../../redux/activated/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selectors'

const ActivatedVerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const _queueScrollToActivatedVerse = nextVerseIndex => {
        dispatch(updateScrollLyricStore({
            queuedScrollLyricLog:
                    `Activate verse ${nextVerseIndex}.`,
            queuedScrollLyricByVerse: true,
            queuedScrollLyricIndex: nextVerseIndex
        }))
    }

    const activateVerseIndex = (nextVerseIndex) => {
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
    }

    const activateVerseDirection = (direction) => {
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
