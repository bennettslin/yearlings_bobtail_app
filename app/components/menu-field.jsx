import React from 'react'
import TitleSection from './title/title-section'

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
    accessedSongIndex,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    onSongClick,

    audioSectionChild,
    scoresTipsSectionChild

}) => {

    const titleSectionProps = {
            title,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedSongIndex,
            onTitleClick: onSongClick
        }

    return (
        <div className="field menu-field">

            {!titleInAudio &&
                <div className="menu-subfield title-menu-subfield">
                    <TitleSection {...titleSectionProps} />
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
