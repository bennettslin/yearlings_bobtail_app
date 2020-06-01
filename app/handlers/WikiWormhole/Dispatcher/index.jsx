import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { getWikiWormholeIndexForDirection } from './helper'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { mapAccessedWikiWormholeIndex } from '../../../redux/access/selectors'
import { mapDotsBitNumber } from '../../../redux/dots/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selectors'

const WikiWormholeDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        accessedWikiWormholeIndex = useSelector(mapAccessedWikiWormholeIndex),
        dotsBitNumber = useSelector(mapDotsBitNumber),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        dispatchAccessedWikiWormhole = ({
            annotationIndex = selectedAnnotationIndex,
            direction
        } = {}) => {
            const
                selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),
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

    useImperativeHandle(ref, () => dispatchAccessedWikiWormhole)
    return null
})

export default WikiWormholeDispatcher
