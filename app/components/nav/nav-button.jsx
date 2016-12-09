import React from 'react'

/*************
 * CONTAINER *
 *************/

const NavButton = ({

    song,
    songIndex,
    buttonText,
    isSelected,
    onSongClick,
    onButtonClick,

...other }) => {

    const isLogue = song ? song.logue : null,
        iconText = buttonText || (isLogue ? null : songIndex),
        songTitle = song ? song.title : null,
        onClick = song ? e => onSongClick(e, songIndex) : onButtonClick

    return (
        <NavButtonView {...other}
            iconText={iconText}
            isSelected={isSelected}
            songTitle={songTitle}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavButtonView = ({

    // From props.
    isSelected,
    accessHighlighted,

    // From controller.
    iconText,
    songTitle,
    onClick

}) => (
    <a
        className={`enabled nav-button${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}`}
        onClick={onClick}
    >
        <div className="nav-icon-block">
            <div className="button-icon nav-icon">
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
