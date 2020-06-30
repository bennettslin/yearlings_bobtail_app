import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollLyricForToggle } from '../../redux/scrollLyric/action'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded
} from '../../redux/toggle/selector'
import { mapIsHeightlessLyric } from '../../redux/viewport/selector'

const ScrollManager = () => {
    const
        dispatch = useDispatch(),
        isAutoScroll = useSelector(mapIsAutoScroll),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric)

    const scrollLyric = log => {
        dispatch(scrollLyricForToggle(log))
    }

    useEffect(() => {
        if (isAutoScroll) {
            scrollLyric('Auto scrolled')
        }
    }, [isAutoScroll])

    useEffect(() => {
        scrollLyric(`Lyric ${isLyricExpanded ? 'expanded' : 'collapsed'}`)
    }, [isLyricExpanded])

    useEffect(() => {
        if (!isHeightlessLyric) {
            scrollLyric('Lyric heighted')
        }
    }, [isHeightlessLyric])

    return null
}

export default ScrollManager
