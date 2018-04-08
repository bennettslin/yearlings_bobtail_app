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
import ScoresTips from './ScoresTips'
import AudioBanner from '../Audio/AudioBanner'
import AudioTimer from '../Audio/AudioTimer'

import { getIsPhone } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    deviceIndex
}) => ({
    deviceIndex
})

const menuPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,

    // From parent.
    titleToggleHandlers: PropTypes.object.isRequired,
    audioHandlers: PropTypes.object.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,
},

Menu = ({

    deviceIndex,
    titleToggleHandlers,
    audioHandlers,
    scoresTipsHandlers,
    audioBannerHandlers

}) => {
    const isPhone = getIsPhone(deviceIndex)

    return (
        <div className="Menu">

            {/* Positioned earlier in DOM to slide behind menu. */}
            <div className={cx(
                'MenuBottomRow',
                'width__mainColumn'
            )}>
                <AudioBanner {...audioBannerHandlers}
                    isBelowMenu
                />
            </div>

            <div className={cx(
                'MenuTopRow',
                'width__mainColumn'
            )}>
                <div className={cx(
                    'MenuTopRow__titleTimer',
                    'MenuTopRow__child',
                    { 'MenuTopRow____hiddenInOverlay': !isPhone }
                )}>
                    <div className={cx(
                        'MenuTopRow__titleTimer__child',
                        'absoluteFullContainer'
                    )}>
                        <TitleToggle {...titleToggleHandlers}
                            inMenu
                        />
                    </div>
                    {isPhone && (
                        <div className={cx(
                            'MenuTopRow__titleTimer__child',
                            'absoluteFullContainer'
                        )}>
                            <AudioTimer />
                        </div>
                    )}
                </div>

                <div className={cx(
                    'MenuTopRow__audio',
                    'MenuTopRow__child'
                )}>
                    <Audio {...audioHandlers} />
                </div>

                <div className={cx(
                    'MenuTopRow__scoresTips',
                    'MenuTopRow__child',
                    'MenuTopRow____hiddenInOverlay'
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
