import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import AccessLetters from '../../Letters'
import { getMapCanCarouselAccessShow } from '../../../../redux/scroll/selector'
import { ARROW_LEFT, ARROW_RIGHT } from '../../../../constants/access'
import './style'

const HorizontalAccessLetters = ({ inLyric }) => {
    const canCarouselAccessShow = useSelector(
        getMapCanCarouselAccessShow(inLyric),
    )

    return (
        <AccessLetters
            {...{
                ...inLyric && { className: 'top__lyricChild' },
                accessIconsName: inLyric ? 'lyricAnnotation' : 'carousel',
                showIfAccessOn: canCarouselAccessShow,
                accessKeys: [
                    ARROW_LEFT,
                    ARROW_RIGHT,
                ],
            }}
        />
    )
}

HorizontalAccessLetters.propTypes = {
    inLyric: PropTypes.bool,
}

export default HorizontalAccessLetters
