// Child that knows rules to select activated verse.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { getVerseIndexForScene } from '../../../album/api/scenes'
import { getStartTimeForVerse } from '../../../album/api/time'
import { getActivatedSceneForDirection } from './helper'
import { ACTIVATED_SCENE_INDEX_SELECTOR } from '../../../redux/activated/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_SCENE_INDEX_SELECTOR,
    IS_SELECTED_LOGUE_SELECTOR
} from '../../../redux/selected/selectors'

const ActivatedSceneDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        activatedSceneIndex = useSelector(ACTIVATED_SCENE_INDEX_SELECTOR),
        selectedSongIndex = useSelector(SELECTED_SONG_INDEX_SELECTOR),
        selectedSceneIndex = useSelector(SELECTED_SCENE_INDEX_SELECTOR),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        _queueScrollToActivatedVerse = (
            nextSceneIndex,
            activatedVerseIndex
        ) => {
            dispatch(updateScrollLyricStore({
                queuedScrollLyricLog:
                    `Activate scene ${nextSceneIndex}, verse ${activatedVerseIndex}.`,
                queuedScrollLyricByVerse: true,
                queuedScrollLyricIndex: activatedVerseIndex
            }))
        },
        _activateSceneIndex = (nextSceneIndex) => {
            const activatedVerseIndex = getVerseIndexForScene(
                selectedSongIndex,
                nextSceneIndex
            )

            dispatch(updateActivatedStore({
                activatedSceneIndex: nextSceneIndex,
                activatedVerseIndex,
                activatedTime: getStartTimeForVerse(
                    selectedSongIndex,
                    activatedVerseIndex
                )
            }))

            // Turn off auto scroll once verse or scene is activated.
            dispatch(updateToggleStore({
                isAutoScroll: false
            }))

            _queueScrollToActivatedVerse(
                nextSceneIndex,
                activatedVerseIndex
            )
        },
        activateSceneDirection = (direction) => {
            if (isSelectedLogue) {
                return false
            }

            _activateSceneIndex(getActivatedSceneForDirection({
                selectedSongIndex,
                selectedSceneIndex,
                activatedSceneIndex,
                direction
            }))
            return true
        }

    useImperativeHandle(ref, () => activateSceneDirection)
    return null
})

export default ActivatedSceneDispatcher
