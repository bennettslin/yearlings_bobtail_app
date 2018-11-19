/**
 * Field for title toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TitleToggle from 'components/Title/Toggle'
import Audio from 'components/Audio'
import ScoresTips from 'components/ScoresTips/ScoresTips'

import { getMenuMarginInOverlay } from 'helpers/responsiveHelper'

const mapStateToProps = ({
    deviceStore: { windowWidth }
}) => ({
    windowWidth
})

const menuPropTypes = {
    // Through Redux.
    windowWidth: PropTypes.number.isRequired,

    // From parent.
    titleToggleHandlers: PropTypes.object.isRequired,
    audioHandlers: PropTypes.object.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired,

    verseDidRender: PropTypes.func.isRequired
},

Menu = ({
    windowWidth,
    titleToggleHandlers,
    audioHandlers,
    scoresTipsHandlers,
    verseDidRender
}) => {
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
                        <TitleToggle {...titleToggleHandlers} />
                    </div>
                </div>

                <div className={cx(
                    'MenuChild__audio',
                    'MenuChild'
                )}>
                    <Audio {...audioHandlers}
                        verseDidRender={verseDidRender}
                    />
                </div>

                <div className={cx(
                    'MenuChild__scoresTips',
                    'MenuChild',
                    'widths__hiddenInOverlay'
                )}>
                    <ScoresTips {...scoresTipsHandlers}
                        inMenu
                    />
                </div>
            </div>
        </div>
    )
}

Menu.propTypes = menuPropTypes

export default connect(mapStateToProps)(Menu)
