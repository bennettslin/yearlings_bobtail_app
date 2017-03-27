import React from 'react'
import classnames from 'classnames'

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
    <a
        className={classnames(
            'enabled',
            isNavToggle ? 'nav-toggle-button' : 'nav-button',
            { 'selected': isSelected,
              'access-highlighted': accessHighlighted }
        )}
        onClick={handleClick}
    >
        <div className="nav-icon-block">
            <div className={classnames(
                'button-icon',
                'button-animatable',
                isNavToggle ? 'large nav-toggle-icon' : 'nav-icon'
            )}>
                {iconText}
            </div>
        </div>
        <div className="nav-title-block">
            <div className="nav-title">
                {songTitle}
            </div>
        </div>
    </a>
)

export default NavButton
