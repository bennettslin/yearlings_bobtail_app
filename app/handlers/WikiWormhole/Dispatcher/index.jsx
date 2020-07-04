import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { getWikiWormholeIndexForDirection } from './helper'
import { getDotKeysFromBit } from '../../../helpers/dot'
import { mapAccessedWikiWormholeIndex } from '../../../redux/access/selector'
import { mapSelectedDotsBit } from '../../../redux/dots/selector'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selector'

const WikiWormholeDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        accessedWikiWormholeIndex = useSelector(mapAccessedWikiWormholeIndex),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    const dispatchWikiWormhole = ({
        annotationIndex = selectedAnnotationIndex,
        direction
    } = {}) => {
        const
            selectedDotKeys = getDotKeysFromBit(selectedDotsBit),
            initialWikiWormholeIndex =
                // If no direction is given, reset the index.
                !Number.isFinite(direction) ?
                    1 :
                    accessedWikiWormholeIndex

        dispatch(updateAccessStore({
            accessedWikiWormholeIndex: getWikiWormholeIndexForDirection({
                selectedSongIndex,
                selectedAnnotationIndex: annotationIndex,
                selectedDotKeys,
                initialWikiWormholeIndex,
                direction
            })
        }))
    }

    useImperativeHandle(ref, () => dispatchWikiWormhole)
    return null
})

export default memo(WikiWormholeDispatcher)
