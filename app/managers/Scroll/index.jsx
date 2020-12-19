import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollLyricBackToSelectedVerse } from '../../redux/scrollLyric/action'
import { mapIsActivated } from '../../redux/activated/selector'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded
} from '../../redux/toggle/selector'
import { mapIsHeightlessLyric } from '../../redux/viewport/selector'

const ScrollManager = () => {
    const
        dispatch = useDispatch(),
        isActivated = useSelector(mapIsActivated),
        isAutoScroll = useSelector(mapIsAutoScroll),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        [didMount, setDidMount] = useState(false)

    const scrollLyric = log => {
        dispatch(scrollLyricBackToSelectedVerse(log))
    }

    useEffect(() => {
        if (didMount) {
            if (!isActivated) {
                scrollLyric('Deactivated')
            }
        } else {
            setDidMount(true)
        }
    }, [isActivated])

    useEffect(() => {
        if (didMount) {
            if (isAutoScroll) {
                scrollLyric('Auto scrolled')
            }
        } else {
            setDidMount(true)
        }
    }, [isAutoScroll])

    useEffect(() => {
        if (didMount) {
            scrollLyric(`Lyric ${isLyricExpanded ? 'expanded' : 'collapsed'}`)
        } else {
            setDidMount(true)
        }
    }, [isLyricExpanded])

    useEffect(() => {
        if (didMount) {
            if (!isHeightlessLyric) {
                scrollLyric('Lyric heighted')
            }
        } else {
            setDidMount(true)
        }
    }, [isHeightlessLyric])

    return null
}

export default ScrollManager
