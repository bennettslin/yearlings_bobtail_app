import React from 'react'
import classnames from 'classnames'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

const NavButton = ({

    song,
    songIndex,
    buttonText,
    isSelected,
    handleNavSongSelect,
    handleButtonClick,

...other }) => {

    const isLogue = song ? song.logue : null,
        iconText = buttonText || (isLogue ? null : songIndex),
        songTitle = song ? song.title : null,
        handleClick = song ? e => handleNavSongSelect(e, songIndex) : handleButtonClick

    return (
        <NavButtonView {...other}
            iconText={iconText}
            isSelected={isSelected}
            songTitle={songTitle}
            handleClick={handleClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavButtonView = ({

    // From props.
    isNavToggle,
    isSelected,
    accessHighlighted,

    // From controller.
    iconText,
    songTitle,
    handleClick

}) => (
    <div
        className={classnames(
            isNavToggle ? 'nav-toggle-button-block' : 'nav-button-block'
        )}
    >
        <Button
            buttonName="nav"
            iconText={iconText}
            isLarge={isNavToggle}
            isSelected={isSelected}
            accessHighlighted={accessHighlighted}
            handleClick={handleClick}
            titleChild={!isNavToggle &&
                <div className="nav-title-block">
                    <div className="nav-title">
                        {songTitle}
                    </div>
                </div>
            }
        />
    </div>
)

export default NavButton
