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

import { getMenuMarginInOverlay } from './helper'

const mapStateToProps = ({
    viewportStore: { windowWidth }
}) => ({
    windowWidth
})

class Menu extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired
    }

    render() {
        const
            { windowWidth } = this.props,
            /**
             * This is necessary because transform animation in Safari is janky.
             */
            menuMarginInOverlay = getMenuMarginInOverlay(windowWidth)

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
                        'Menu__responsive',
                        'width__mainColumn',
                        'abF'
                    )}
                    style={{
                        marginLeft: menuMarginInOverlay,
                        marginRight: menuMarginInOverlay
                    }}
                >
                    <div className={cx(
                        'MenuChild__about',
                        'MenuChild',
                        'widths__hiddenInOverlay'
                    )}>
                        <AboutToggle />
                    </div>

                    <div className={cx(
                        'MenuChild__audio',
                        'MenuChild'
                    )}>
                        <Audio />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Menu)
