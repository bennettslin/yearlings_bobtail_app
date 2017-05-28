import React from 'react'
import PropTypes from 'prop-types'

/*************
 * CONTAINER *
 *************/

const MenuField = (props) => (
    <MenuFieldView {...props} />
)

MenuField.propTypes = {
    titleInAudio: PropTypes.bool.isRequired,
    scoresTipsOutsideMenu: PropTypes.bool.isRequired,
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

    audioSectionChild,
    scoresTipsSectionChild,
    titleToggleChild

}) => (
    <div className="field menu-field">

        {!titleInAudio &&
            <div className="menu-subfield title-menu-subfield">
                {titleToggleChild}
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

export default MenuField
