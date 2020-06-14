/**
 * Field for about toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import AboutToggle from '../About/Toggle'
import Audio from '../Audio'
import BannerFilmstrip from '../BannerFilmstrip'
import Slider from '../Slider'
import { getMenuMarginInOverlay } from './helper'
import { mapIsDesktopWidth } from '../../redux/device/selector'
import {
    mapWindowWidth,
    mapIsTwoRowMenu,
    mapMenuHeight,
    mapCanSliderMount
} from '../../redux/viewport/selector'
import './style'

const Menu = () => {
    const
        canSliderMount = useSelector(mapCanSliderMount),
        isTwoRowMenu = useSelector(mapIsTwoRowMenu),
        menuHeight = useSelector(mapMenuHeight),
        windowWidth = useSelector(mapWindowWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth),

        // This is necessary because transform animation in Safari is janky.
        menuMarginInOverlay = getMenuMarginInOverlay({
            isDesktopWidth,
            windowWidth
        })

    // Prevent menu from rendering before windowWidth has been set.
    return (
        <div
            {...{
                className: cx(
                    'Menu',
                    'abF'
                ),
                style: {
                    height: `${menuHeight}px`
                }
            }}
        >
            <div
                {...{
                    className: cx(
                        'Menu__main',
                        'width__mainColumn',
                        'abF'
                    ),
                    style: {
                        marginLeft: menuMarginInOverlay,
                        marginRight: menuMarginInOverlay
                    }
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Menu__mainTop',
                            'Menu__topField',
                            'abF'
                        )
                    }}
                >
                    <BannerFilmstrip />
                    <AboutToggle />
                    {!isTwoRowMenu && (
                        <Audio />
                    )}
                </div>

                {isTwoRowMenu && (
                    <div
                        {...{
                            className: cx(
                                'Menu__mainBottom',
                                'abF'
                            )
                        }}
                    >
                        <Audio />
                    </div>
                )}
            </div>
            {canSliderMount && (
                <div
                    className={cx(
                        'Menu__lyricTop',
                        'Menu__topField',
                        'width__lyricColumn__desktop',
                        'abF'
                    )}
                >
                    <Slider />
                </div>
            )}
        </div>
    )
}

export default Menu
