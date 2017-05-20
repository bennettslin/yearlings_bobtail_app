import React from 'react'
import TitleToggle from './title/title-toggle'

/*************
 * CONTAINER *
 *************/

const MenuField = (props) => {

    return (
        <MenuFieldView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const MenuFieldView = ({

    // From props.
    titleInAudio,
    scoresTipsOutsideMenu,

    title,

    handleTitleSelect,

    audioSectionChild,
    scoresTipsSectionChild

}) => {

    const titleToggleProps = {
            title,
            handleTitleSelect
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
