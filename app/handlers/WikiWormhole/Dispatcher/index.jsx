import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { getWikiWormholeIndexForDirection } from './helper'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR } from '../../../redux/access/selectors'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_ANNOTATION_INDEX_SELECTOR
} from '../../../redux/selected/selectors'

const WikiWormholeDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        accessedWikiWormholeIndex = useSelector(ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR),
        dotsBitNumber = useSelector(DOTS_BIT_NUMBER_SELECTOR),
        selectedSongIndex = useSelector(SELECTED_SONG_INDEX_SELECTOR),
        selectedAnnotationIndex = useSelector(SELECTED_ANNOTATION_INDEX_SELECTOR),
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
