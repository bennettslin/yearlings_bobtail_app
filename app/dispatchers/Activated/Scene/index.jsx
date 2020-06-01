// Child that knows rules to select activated verse.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { getVerseIndexForScene } from '../../../album/api/scenes'
import { getStartTimeForVerse } from '../../../album/api/time'
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
        isSelectedLogue = useSelector(mapIsSelectedLogue),
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
