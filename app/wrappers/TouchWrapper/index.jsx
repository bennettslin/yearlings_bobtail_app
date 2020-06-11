import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapIsActivated } from '../../redux/activated/selectors'
import { mapIsBannerHovering } from '../../redux/banner/selectors'
import { mapIsScrolling } from '../../redux/scrollOverlay/selectors'
import {
    mapIsSliderTouched,
    mapIsLyricsLocked
} from '../../redux/slider/selectors'

const TouchWrapper = ({ children }) => {
    const
        isActivated = useSelector(mapIsActivated),
        isBannerHovering = useSelector(mapIsBannerHovering),
        isScrolling = useSelector(mapIsScrolling),
        isSliderTouched = useSelector(mapIsSliderTouched),
        isLyricsLocked = useSelector(mapIsLyricsLocked)

    return (
        <div
            {...{
                className: cx(
                    'TouchWrapper',
                    !isScrolling && 'TW__isStationary',
                    isSliderTouched && 'TW__sliderTouched',
                    isBannerHovering && 'TW__bannerHovering',
                    isActivated ?
                        'TW__verseActive' :
                        'TW__verseInactive',
                    isLyricsLocked ?
                        'TW__lyricsLocked' :
                        'TW__lyricsUnlocked'
                )
            }}
        >
            {children}
        </div>
    )
}

TouchWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default TouchWrapper
