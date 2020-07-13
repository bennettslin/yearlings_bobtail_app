/**
 * Field for about toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import getDidMountHoc from '../DidMountHoc'
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

const Menu = ({ didMount }) => {
    const
        canSliderMount = useSelector(mapCanSliderMount),
        isTwoRowMenu = useSelector(mapIsTwoRowMenu),
        menuHeight = useSelector(mapMenuHeight),
        windowWidth = useSelector(mapWindowWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        menuMarginInOverlay = getMenuMarginInOverlay({
            isDesktopWidth,
            windowWidth
        })

    // Prevent menu from rendering before windowWidth has been set.
    return didMount && (
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
                        /**
                         * This is necessary because transform animation in
                         * Safari is janky.
                         */
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

Menu.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(Menu))
