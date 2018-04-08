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
        <div className="Menu__container">
            <div className={cx(
                'Menu',
                'width__mainColumn'
            )}>
                <div className={cx(
                    'Menu__childTitle',
                    'Menu__child',
                    'Menu__child__hiddenInOverlay'
                )}>
                    <TitleToggle {...titleToggleHandlers}
                        inMenu
                    />
                </div>

                <div className={cx(
                    'Menu__childAudio',
                    'Menu__child'
                )}>
                    <Audio {...audioHandlers} />
                </div>

                <div className={cx(
                    'Menu__childScoresTips',
                    'Menu__child',
                    'Menu__child__hiddenInOverlay'
                )}>
                    <ScoresTips {...scoresTipsHandlers}
                        inMenu
                    />
                </div>
            </div>
            <AudioBanner {...audioBannerHandlers}
                isBelowMenu
            />
        </div>
    )
}

Menu.propTypes = menuPropTypes

export default Menu
