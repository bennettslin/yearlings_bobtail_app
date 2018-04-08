/**
 * Field for title toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import TitleToggle from '../Title/TitleToggle'
import Audio from '../Audio/Audio'
import ScoresTips from './ScoresTips'
import AudioBanner from '../Audio/AudioBanner'


const menuPropTypes = {
    // From parent.
    titleToggleHandlers: PropTypes.object.isRequired,
    audioHandlers: PropTypes.object.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,
},

Menu = ({

    titleToggleHandlers,
    audioHandlers,
    scoresTipsHandlers,
    audioBannerHandlers

}) => {
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
                    'MenuTopRow__childTitle',
                    'MenuTopRow__child',
                    'MenuTopRow__child__hiddenInOverlay'
                )}>
                    <TitleToggle {...titleToggleHandlers}
                        inMenu
                    />
                </div>

                <div className={cx(
                    'MenuTopRow__childAudio',
                    'MenuTopRow__child'
                )}>
                    <Audio {...audioHandlers} />
                </div>

                <div className={cx(
                    'MenuTopRow__childScoresTips',
                    'MenuTopRow__child',
                    'MenuTopRow__child__hiddenInOverlay'
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

export default Menu
