import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { mapIsLyricLogue } from '../../../redux/lyric/selectors'
import { mapIsLyricExpanded } from '../../../redux/toggle/selectors'
import { mapIsHeightlessLyric } from '../../../redux/viewport/selectors'

const LyricListener = () => {
    const
        dispatch = useDispatch(),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric)

    const dispatchScrollLyric = scrollLyricLog => {
        if (!isLyricLogue) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog,
                scrollLyricByVerse: true,
                scrollLyricAlways: true
            }))
        }
    }

    useEffect(() => {
        dispatchScrollLyric(
            `Lyric ${isLyricExpanded ? 'expanded' : 'collapsed'}.`
        )
    }, [isLyricExpanded])

    useEffect(() => {
        if (!isHeightlessLyric) {
            dispatchScrollLyric(`Lyric heighted.`)
        }
    }, [isHeightlessLyric])

    return null
}

export default LyricListener
