/**
 * Field for title toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Audio from '../../Audio'
import ScoresTips from '../../ScoresTips'
import TitleToggle from '../../Title/Toggle'

import { getMenuMarginInOverlay } from './helper'

const mapStateToProps = ({
    deviceStore: { windowWidth }
}) => ({
    windowWidth
})

const propTypes = {
    // Through Redux.
        windowWidth: PropTypes.number.isRequired
    },

    Menu = ({ windowWidth }) => {
    /**
     * This is necessary because transform animation in Safari is janky.
     */
        const menuMarginInOverlay = getMenuMarginInOverlay(windowWidth)

        // Prevent menu from rendering before windowWidth has been set.
        return windowWidth && (
            <div
                className={cx(
                    'Menu',
                    'absoluteFullContainer'
                )}
            >
                <div
                    className={cx(
                        'Menu__responsive',
                        'width__mainColumn',
                        'absoluteFullContainer'
                    )}
                    style={{
                        marginLeft: menuMarginInOverlay,
                        marginRight: menuMarginInOverlay
                    }}
                >
                    <div className={cx(
                        'MenuChild__title',
                        'MenuChild',
                        'widths__hiddenInOverlay'
                    )}>
                        <div className={cx(
                            'MenuChild__title__child',
                            'absoluteFullContainer'
                        )}>
                            <TitleToggle />
                        </div>
                    </div>

                    <div className={cx(
                        'MenuChild__audio',
                        'MenuChild'
                    )}>
                        <Audio />
                    </div>

                    <div className={cx(
                        'MenuChild__scoresTips',
                        'MenuChild',
                        'widths__hiddenInOverlay'
                    )}>
                        <ScoresTips inMenu />
                    </div>
                </div>
            </div>
        )
    }

Menu.propTypes = propTypes

export default connect(mapStateToProps)(Menu)
