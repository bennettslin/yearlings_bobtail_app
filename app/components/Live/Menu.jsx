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

import { getMenuMarginInOverlay } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    appMounted,
    windowWidth
}) => ({
    appMounted,
    windowWidth
})

const menuPropTypes = {
    // Through Redux.
    appMounted: PropTypes.bool.isRequired,
    windowWidth: PropTypes.number.isRequired,

    // From parent.
    titleToggleHandlers: PropTypes.object.isRequired,
    audioHandlers: PropTypes.object.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,

    sliderDidRender: PropTypes.func.isRequired
},

Menu = ({

    appMounted,
    windowWidth,

    titleToggleHandlers,
    audioHandlers,
    scoresTipsHandlers,
    audioBannerHandlers,

    sliderDidRender

}) => {

    /**
     * This is necessary because transform animation in Safari is janky.
     */
    const menuMarginInOverlay = getMenuMarginInOverlay(windowWidth)

    return appMounted && (
        <div className="Menu">

            <div
                className={cx(
                    'MenuRows',
                    'width__mainColumn',
                    'absoluteFullContainer'
                )}
                style={{
                    marginLeft: menuMarginInOverlay,
                    marginRight: menuMarginInOverlay
                }}
            >
                {/* Positioned earlier in DOM to slide behind menu. */}
                <div className={cx(
                    'MenuRow',
                    'MenuBottomRow'
                )}>
                    <AudioBanner {...audioBannerHandlers}
                        isMenuBottomRow
                        sliderDidRender={sliderDidRender}
                    />
                </div>

                <div
                    className={cx(
                        'MenuRow',
                        'MenuTopRow',
                        'boxShadow__popupView'
                    )}
                >
                    <div className={cx(
                        'MenuRowChild__title',
                        'MenuRowChild',
                        'widths__hiddenInOverlay'
                    )}>
                        <div className={cx(
                            'MenuRowChild__title__child',
                            'absoluteFullContainer'
                        )}>
                            <TitleToggle {...titleToggleHandlers} />
                        </div>
                    </div>

                    <div className={cx(
                        'MenuRowChild__audio',
                        'MenuRowChild'
                    )}>
                        <Audio {...audioHandlers}
                            sliderDidRender={sliderDidRender}
                        />
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
        </div>
    )
}

Menu.propTypes = menuPropTypes

export default connect(mapStateToProps)(Menu)
