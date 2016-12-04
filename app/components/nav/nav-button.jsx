import React from 'react'

/*************
 * CONTAINER *
 *************/

const NavButton = ({

    song,
    songIndex,
    isSelected,
    onSongClick,

...other }) => {

    const isLogue = song.logue,
        songTitle = song.title,
        onClick = e => onSongClick(e, songIndex)

    return (
        <NavButtonView {...other}
            isLogue={isLogue}
            songIndex={songIndex}
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
    songIndex,
    isSelected,
    accessHighlighted,

    // From controller.
    isLogue,
    songTitle,
    onClick

}) => (
    <a
        className={`enabled nav-button${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}`}
        onClick={onClick}
    >
        <div className="nav-icon-block">
            <div className="nav-icon">
                {isLogue ? null : songIndex}
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
