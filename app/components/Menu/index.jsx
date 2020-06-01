/**
 * Field for about toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import AboutToggle from '../About/Toggle'
import Audio from '../Audio'
import BannerFilmstrip from '../BannerFilmstrip'
import Slider from '../Slider'
import { getMenuMarginInOverlay } from './helper'
import { mapCanSliderMount } from '../../redux/mount/selectors'
import {
    IS_TWO_ROW_MENU_SELECTOR,
    MENU_HEIGHT_SELECTOR
} from '../../redux/responsive/selectors'
import {
    WINDOW_WIDTH_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR
} from '../../redux/viewport/selectors'
import './style'

const mapStateToProps = state => {
    const
        canSliderMount = mapCanSliderMount(state),
        isTwoRowMenu = IS_TWO_ROW_MENU_SELECTOR(state),
        menuHeight = MENU_HEIGHT_SELECTOR(state),
        windowWidth = WINDOW_WIDTH_SELECTOR(state),
        isDesktopWidth = IS_DESKTOP_WIDTH_SELECTOR(state)

    return {
        windowWidth,
        isDesktopWidth,
        canSliderMount,
        isTwoRowMenu,
        menuHeight
    }
}

class Menu extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        canSliderMount: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        menuHeight: PropTypes.number.isRequired
    }

    render() {
        const
            {
                windowWidth,
                isDesktopWidth,
                canSliderMount,
                isTwoRowMenu,
                menuHeight
            } = this.props,

            /**
             * This is necessary because transform animation in Safari is janky.
             */
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
}

export default connect(mapStateToProps)(Menu)
