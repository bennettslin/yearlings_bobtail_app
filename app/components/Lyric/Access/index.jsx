import React from 'react'
import { useSelector } from 'react-redux'
import AccessLetters from '../../Access/Letters'
import { ARROW_UP, ARROW_DOWN } from '../../../constants/access'
import { LYRIC_ANNOTATION_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import { IS_DOTS_SLIDE_SHOWN_SELECTOR } from '../../../redux/toggle/selectors'
import './style'

const LyricAccess = () => {
    const
        lyricAnnotationIndex = useSelector(LYRIC_ANNOTATION_INDEX_SELECTOR),
        isDotsSlideShown = useSelector(IS_DOTS_SLIDE_SHOWN_SELECTOR),

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
                    ARROW_DOWN
                ]
            }}
        />
    )
}

export default LyricAccess
