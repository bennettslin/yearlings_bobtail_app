/**
 * Field for about toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AboutToggle from '../../About/Toggle'
import Audio from '../../Audio'
import Banner from '../../Banner'
import Slider from '../../Slider'

import { getMenuMarginInOverlay } from './helper'

const mapStateToProps = ({
    viewportStore: {
        windowWidth,
        isDesktopWidth
    },
    mobileStore: { isHigherProcessor }
}) => ({
    windowWidth,
    isDesktopWidth,
    isHigherProcessor
})

class Menu extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        isHigherProcessor: PropTypes.bool.isRequired
    }

    render() {
        const
            {
                windowWidth,
                isDesktopWidth,
                isHigherProcessor
            } = this.props,
            /**
             * This is necessary because transform animation in Safari is janky.
             */
            menuMarginInOverlay = getMenuMarginInOverlay({
                isDesktopWidth,
                windowWidth
            })

        // Prevent menu from rendering before windowWidth has been set.
        return windowWidth && (
            <div
                className={cx(
                    'Menu',
                    'abF'
                )}
            >
                <div
                    className={cx(
                        'Menu__mainTop',
                        'Menu__field',
                        'width__mainColumn',
                        'abF'
                    )}
                    style={{
                        marginLeft: menuMarginInOverlay,
                        marginRight: menuMarginInOverlay
                    }}
                >
                    <AboutToggle />
                    <Banner />
                    <Audio />
                </div>

                {isHigherProcessor && isDesktopWidth && (
                    <div
                        className={cx(
                            'Menu__lyricTop',
                            'Menu__field',
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
