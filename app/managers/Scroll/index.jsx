import { useEffect, useState } from 'react'
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
        [didMount, setDidMount] = useState(false),
        isAutoScroll = useSelector(mapIsAutoScroll),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric)

    const scrollLyric = log => {
        dispatch(scrollLyricForToggle(log))
    }

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
