import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapIsActivated } from '../../redux/activated/selectors'
import { mapIsBannerHovering } from '../../redux/banner/selectors'
import { mapIsScrolling } from '../../redux/scrollOverlay/selectors'
import {
    mapIsSliderTouched,
    mapIsSliderMoving
} from '../../redux/slider/selectors'
import { mapIsAutoScroll } from '../../redux/toggle/selectors'

const TouchWrapper = ({ children }) => {
    const
        isActivated = useSelector(mapIsActivated),
        isBannerHovering = useSelector(mapIsBannerHovering),
        isScrolling = useSelector(mapIsScrolling),
        isSliderTouched = useSelector(mapIsSliderTouched),
        isSliderMoving = useSelector(mapIsSliderMoving),
        isAutoScroll = useSelector(mapIsAutoScroll)

    return (
        <div
            {...{
                className: cx(
                    'TouchWrapper',

                    !isAutoScroll && 'TW__manualScroll',
                    isScrolling ? 'TW__isScrolling' : 'TW__isStationary',
                    isSliderTouched && 'TW__sliderTouched',
                    isSliderMoving && 'TW__sliderMoving',
                    isActivated && 'TW__verseActive',
                    isBannerHovering && 'TW__bannerHovering',

                    (isSliderMoving || isActivated) ?
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
