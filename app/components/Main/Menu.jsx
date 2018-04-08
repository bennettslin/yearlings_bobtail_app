/**
 * Field for title toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Audio from '../Audio/Audio'
import ScoresTipsSection from './ScoresTipsSection'
import TitleToggle from '../Title/TitleToggle'

const menuPropTypes = {
    // From parent.
    audioSectionHandlers: PropTypes.object.isRequired,
    scoresTipsSectionHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
},

Menu = ({

    audioSectionHandlers,
    scoresTipsSectionHandlers,
    titleToggleHandlers

}) => {
    return (
        <div className="Menu__container">
            <div className={cx(
                'Menu',
                'width__mainColumn'
            )}>
            <div className={cx(
                    'Menu__childTitle',
                    'Menu__child'
                )}>
                    <TitleToggle {...titleToggleHandlers}
                        inMenu
                    />
                </div>

                <div className={cx(
                    'Menu__childAudio',
                    'Menu__child'
                )}>
                    <Audio {...audioSectionHandlers} />
                </div>

                <div className={cx(
                    'Menu__childScoresTips',
                    'Menu__child'
                )}>
                    <ScoresTipsSection {...scoresTipsSectionHandlers}
                        inMenu
                    />
                </div>
            </div>
        </div>
    )
}

Menu.propTypes = menuPropTypes

export default Menu
