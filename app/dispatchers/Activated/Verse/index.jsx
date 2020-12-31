// Child that knows rules to select activated verse.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollLyricToVerse } from '../../../redux/scrollLyric/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateIsAutoScroll } from '../../../redux/toggle/action'
import { getActivatedVerseForDirection } from './helper'
import { mapActivatedVerseIndex } from '../../../redux/activated/selector'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapIsSelectedLogue,
} from '../../../redux/selected/selector'

const ActivatedVerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const _queueScrollToActivatedVerse = nextVerseIndex => {
        if (nextVerseIndex !== -1) {
            dispatch(scrollLyricToVerse(
                'Activated',
                nextVerseIndex
            ))
        }
    }

    const activateVerseIndex = nextVerseIndex => {
        // Do not allow selected verse to be activated.
        if (selectedVerseIndex === nextVerseIndex) {
            return
        }

        dispatch(updateActivatedStore({
            activatedVerseIndex: nextVerseIndex,
        }))

        // Turn off auto scroll once verse or scene is activated.
        dispatch(updateIsAutoScroll())
    }

    const activateVerseDirection = direction => {
        if (isSelectedLogue) {
            return false
        }

        const nextVerseIndex = getActivatedVerseForDirection({
            selectedSongIndex,
            selectedVerseIndex,
            activatedVerseIndex,
            direction,
        })

        activateVerseIndex(nextVerseIndex)
        _queueScrollToActivatedVerse(nextVerseIndex)
        return true
    }

    useImperativeHandle(ref, () => ({
        index: activateVerseIndex,
        direction: activateVerseDirection,
    }))
    return null
})

export default ActivatedVerseDispatcher
