import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { IS_ACTIVATED_SELECTOR } from '../../redux/activated/selectors'
import { IS_BANNER_HOVERING_SELECTOR } from '../../redux/banner/selectors'
import { IS_SCROLLING_SELECTOR } from '../../redux/scrollOverlay/selectors'
import {
    IS_SLIDER_TOUCHED_SELECTOR,
    IS_SLIDER_MOVING_SELECTOR
} from '../../redux/slider/selectors'
import { IS_AUTO_SCROLL_SELECTOR } from '../../redux/toggle/selectors'

const TouchWrapper = ({ children }) => {
    const
        isActivated = useSelector(IS_ACTIVATED_SELECTOR),
        isBannerHovering = useSelector(IS_BANNER_HOVERING_SELECTOR),
        isScrolling = useSelector(IS_SCROLLING_SELECTOR),
        isSliderTouched = useSelector(IS_SLIDER_TOUCHED_SELECTOR),
        isSliderMoving = useSelector(IS_SLIDER_MOVING_SELECTOR),
        isAutoScroll = useSelector(IS_AUTO_SCROLL_SELECTOR)

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
