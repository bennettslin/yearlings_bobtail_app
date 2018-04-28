/**
 * Field for title toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TitleToggle from '../Title/TitleToggle'
import Audio from '../Audio/Audio'
import ScoresTips from '../ScoresTips/ScoresTips'
import AudioBanner from '../Audio/AudioBanner'
import AudioTimer from '../Audio/AudioTimer'

import { getIsPhone, getMenuMarginInOverlay } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    deviceIndex,
    windowWidth
}) => ({
    deviceIndex,
    windowWidth
})

const menuPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    windowWidth: PropTypes.number.isRequired,

    // From parent.
    titleToggleHandlers: PropTypes.object.isRequired,
    audioHandlers: PropTypes.object.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,
},

Menu = ({

    deviceIndex,
    windowWidth,
    titleToggleHandlers,
    audioHandlers,
    scoresTipsHandlers,
    audioBannerHandlers

}) => {
    const isPhone = getIsPhone(deviceIndex),

        /**
         * This is necessary because transform animation in Safari is janky.
         */
        menuMarginInOverlay = getMenuMarginInOverlay(windowWidth)

    return (
        <div className="Menu">

            {/* Positioned earlier in DOM to slide behind menu. */}
            <div className={cx(
                'MenuRow',
                'MenuBottomRow',
                'width__mainColumn'
            )}>
                <AudioBanner {...audioBannerHandlers}
                    isBelowMenu
                />
            </div>

            <div
                className={cx(
                    'MenuRow',
                    'MenuTopRow',
                    'width__mainColumn',
                    'boxShadow__popupView'
                )}
                style={{
                    marginLeft: menuMarginInOverlay,
                    marginRight: menuMarginInOverlay
                }}
            >
                <div className={cx(
                    'MenuRowChild__titleTimer',
                    'MenuRowChild',
                    { 'widths__hiddenInOverlay': !isPhone }
                )}>
                    <div className={cx(
                        'MenuRowChild__titleTimer__child',
                        'absoluteFullContainer'
                    )}>
                        <TitleToggle {...titleToggleHandlers} />
                    </div>
                    {isPhone && (
                        <div className={cx(
                            'MenuRowChild__titleTimer__child',
                            'absoluteFullContainer'
                        )}>
                            <AudioTimer
                                isTitleTimer
                            />
                        </div>
                    )}
                </div>

                <div className={cx(
                    'MenuRowChild__audio',
                    'MenuRowChild'
                )}>
                    <Audio {...audioHandlers} />
                </div>

                <div className={cx(
                    'MenuRowChild__scoresTips',
                    'MenuRowChild',
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
