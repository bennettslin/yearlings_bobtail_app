import React from 'react'
import PropTypes from 'prop-types'
import TitleToggle from '../title/title-toggle'

/*************
 * CONTAINER *
 *************/

const MenuField = (props) => (
    <MenuFieldView {...props} />
)

MenuField.propTypes = {
    titleInAudio: PropTypes.bool.isRequired,
    scoresTipsOutsideMenu: PropTypes.bool.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    handleTitleToggle: PropTypes.func.isRequired,
    audioSectionChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const MenuFieldView = ({

    // From props.
    titleInAudio,
    scoresTipsOutsideMenu,
    selectedTitleIndex,

    handleTitleToggle,

    audioSectionChild,
    scoresTipsSectionChild

}) => {

    const titleToggleProps = {
            selectedTitleIndex,
            handleTitleToggle
        }

    return (
        <div className="field menu-field">

            {!titleInAudio &&
                <div className="menu-subfield title-menu-subfield">
                    <TitleToggle {...titleToggleProps} />
                </div>
            }
            <div className="menu-subfield audio-subfield">
                {audioSectionChild}
            </div>
            {!scoresTipsOutsideMenu &&
                <div className="menu-subfield scores-tips-menu-subfield">
                    {scoresTipsSectionChild}
                </div>
            }
        </div>
    )
}

export default MenuField
