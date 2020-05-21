import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
    SELECTED_SONG_INDEX_SELECTOR,
    SELECTED_VERSE_INDEX_SELECTOR,
    SELECTED_ANNOTATION_INDEX_SELECTOR
} from '../../redux/selected/selectors'
import { getPathForIndices } from './helper'

const RoutingListener = () => {
    const
        selectedSongIndex = useSelector(SELECTED_SONG_INDEX_SELECTOR),
        selectedVerseIndex = useSelector(SELECTED_VERSE_INDEX_SELECTOR),
        selectedAnnotationIndex = useSelector(
            SELECTED_ANNOTATION_INDEX_SELECTOR
        ),
        history = useHistory()

    useEffect(() => {
        history.replace(
            getPathForIndices(
                selectedSongIndex, selectedVerseIndex, selectedAnnotationIndex
            )
        )
    }, [selectedSongIndex, selectedVerseIndex, selectedAnnotationIndex])

    return null
}

export default RoutingListener
