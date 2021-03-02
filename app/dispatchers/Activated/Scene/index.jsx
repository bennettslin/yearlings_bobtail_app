// Child that knows rules to select activated verse.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollLyricToVerse } from '../../../redux/scrollLyric/action'
import { updateActivatedVerseIndex } from '../../../redux/activated/action'
import { updateIsAutoScroll } from '../../../redux/toggle/action'
import { getVerseIndexForScene } from '../../../api/album/scenes'
import { getActivatedSceneForDirection } from './helper'
import { mapActivatedSceneIndex } from '../../../redux/activated/selector'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex,
    mapIsSelectedLogue,
} from '../../../redux/selected/selector'

const ActivatedSceneDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        activatedSceneIndex = useSelector(mapActivatedSceneIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const _queueScrollToActivatedVerse = (
        nextSceneIndex,
        activatedVerseIndex,
    ) => {
        dispatch(scrollLyricToVerse(
            `Filmstrip scene ${nextSceneIndex} activated`,
            activatedVerseIndex,
        ))
    }

    const _activateSceneIndex = nextSceneIndex => {
        const activatedVerseIndex = getVerseIndexForScene(
            selectedSongIndex,
            nextSceneIndex,
        )

        dispatch(updateActivatedVerseIndex(activatedVerseIndex))

        // Turn off auto scroll once verse or scene is activated.
        dispatch(updateIsAutoScroll())

        _queueScrollToActivatedVerse(
            nextSceneIndex,
            activatedVerseIndex,
        )
    }

    const activateSceneDirection = direction => {
        if (isSelectedLogue) {
            return false
        }

        _activateSceneIndex(getActivatedSceneForDirection({
            selectedSongIndex,
            selectedSceneIndex,
            activatedSceneIndex,
            direction,
        }))
        return true
    }

    useImperativeHandle(ref, () => activateSceneDirection)
    return null
})

export default ActivatedSceneDispatcher
