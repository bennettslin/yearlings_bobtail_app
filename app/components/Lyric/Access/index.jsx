import React from 'react'
import { useSelector } from 'react-redux'
import AccessLetters from '../../Access/Letters'
import { ARROW_UP, ARROW_DOWN } from '../../../constants/access'
import { mapLyricAnnotationIndex } from '../../../redux/lyric/selector'
import { mapIsDotsSlideShown } from '../../../redux/toggle/selector'
import './style'

const LyricAccess = () => {
    const
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),

        showIfAccessOn = Boolean(
            !isDotsSlideShown &&
            !lyricAnnotationIndex
        )

    return (
        <AccessLetters
            {...{
                accessIconsName: 'lyric',
                className: 'top__lyricChild',
                showIfAccessOn,
                accessKeys: [
                    ARROW_UP,
                    ARROW_DOWN,
                ],
            }}
        />
    )
}

export default LyricAccess
