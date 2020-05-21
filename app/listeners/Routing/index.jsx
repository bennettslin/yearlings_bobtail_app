import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getPathForIndices } from './helper'

const RoutingListener = () => {
    const
        selectedSongIndex = useSelector(
            state => state.selectedStore.selectedSongIndex
        ),
        selectedVerseIndex = useSelector(
            state => state.selectedStore.selectedVerseIndex
        ),
        selectedAnnotationIndex = useSelector(
            state => state.selectedStore.selectedAnnotationIndex
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
