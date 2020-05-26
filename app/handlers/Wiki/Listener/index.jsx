// Singleton to listen for changes that determine a new wiki url.

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSessionStore } from '../../../redux/session/action'
import { getWikiUrl } from './helper'

const WikiListener = () => {
    const
        dispatch = useDispatch(),
        {
            isMobileWiki,
            selectedSongIndex,
            selectedWikiIndex,
            selectedAnnotationIndex,
            carouselAnnotationIndex
        } = useSelector(mapStateToProps)

    useEffect(() => {
        const selectedWikiUrl = getWikiUrl({
            selectedSongIndex,
            selectedWikiIndex,
            selectedAnnotationIndex,
            carouselAnnotationIndex,
            isMobileWiki
        })

        dispatch(updateSessionStore({ selectedWikiUrl }))
    }, [selectedWikiIndex, isMobileWiki])

    return null
}

const mapStateToProps = ({
    responsiveStore: { isMobileWiki },
    selectedStore: {
        selectedAnnotationIndex,
        selectedSongIndex
    },
    sessionStore: {
        selectedWikiIndex,
        carouselAnnotationIndex
    }
}) => ({
    isMobileWiki,
    selectedSongIndex,
    selectedWikiIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex
})

export default WikiListener
