// Child that knows rules to select activated verse.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { getVerseIndexForScene } from '../../../api/album/scenes'
import { getStartTimeForVerse } from '../../../api/album/time'
import { getActivatedSceneForDirection } from './helper'
import { mapActivatedSceneIndex } from '../../../redux/activated/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selectors'

const ActivatedSceneDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        activatedSceneIndex = useSelector(mapActivatedSceneIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const _queueScrollToActivatedVerse = (
        nextSceneIndex,
        activatedVerseIndex
    ) => {
        dispatch(updateScrollLyricStore({
            scrollLyricLog:
                    `Activate scene ${nextSceneIndex}, verse ${activatedVerseIndex}.`,
            scrollLyricByVerse: true,
            scrollLyricIndex: activatedVerseIndex
        }))
    }

    const _activateSceneIndex = (nextSceneIndex) => {
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
    }

    const activateSceneDirection = (direction) => {
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
