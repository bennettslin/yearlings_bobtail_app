import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

const TouchWrapper = ({ children }) => {
    const {
        isAutoScroll,
        isScrolling,
        isSliderTouched,
        isSliderMoving,
        isActivated,
        isBannerHovering
    } = useSelector(mapStateToProps)

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

const mapStateToProps = ({
    activatedStore: { isActivated },
    scrollOverlayStore: { isScrolling },
    toggleStore: { isAutoScroll },
    sliderStore: {
        isSliderTouched,
        isSliderMoving
    },
    bannerStore: { isBannerHovering }
}) => {
    return {
        isAutoScroll,
        isScrolling,
        isSliderTouched,
        isSliderMoving,
        isActivated,
        isBannerHovering
    }
}

TouchWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default TouchWrapper
