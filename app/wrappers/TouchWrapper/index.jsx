import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../components/DidMountHoc'
import { mapIsActivated } from '../../redux/activated/selector'
import { mapIsBannerHovering } from '../../redux/banner/selector'
import {
    mapIsAnchorMoused,
    mapIsScrolling
} from '../../redux/hover/selector'
import {
    mapIsSliderTouched,
    mapIsLyricsLocked
} from '../../redux/slider/selector'

const TouchWrapper = ({ didMount, children }) => {
    const
        isActivated = useSelector(mapIsActivated),
        isBannerHovering = useSelector(mapIsBannerHovering),
        isAnchorMoused = useSelector(mapIsAnchorMoused),
        isScrolling = useSelector(mapIsScrolling),
        isSliderTouched = useSelector(mapIsSliderTouched),
        isLyricsLocked = useSelector(mapIsLyricsLocked)

    return (
        <div
            {...{
                className: cx(
                    'TouchWrapper',
                    didMount && [
                        !isAnchorMoused && 'TW__isAnchorUnmoused',
                        isScrolling ?
                            'TW__isScrolling' :
                            'TW__isStationary',
                        isSliderTouched && 'TW__sliderTouched',
                        isBannerHovering && 'TW__bannerHovering',
                        isActivated ?
                            'TW__verseActive' :
                            'TW__verseInactive',
                        isLyricsLocked ?
                            'TW__lyricsLocked' :
                            'TW__lyricsUnlocked',
                        'abF'
                    ]
                )
            }}
        >
            {children}
        </div>
    )
}

TouchWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}

export default memo(getDidMountHoc(TouchWrapper))
