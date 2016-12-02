import React from 'react'
import { getSongTitle } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const NavSong = ({

    song,
    songIndex,
    isSelected,
    onSongClick,

...other }) => {

    const isLogue = song.logue,
        songTitle = song.title,
        onClick = e => onSongClick(e, songIndex)

    return (
        <NavSongView {...other}
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

const NavSongView = ({

    // From props.
    songIndex,
    isSelected,
    accessHighlighted,
    maxTotalNeededHours,

    // From controller.
    isLogue,
    songTitle,
    onClick

}) => (
    <div className={`nav-song${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}`}>
        <div className="nav-circle-container">
            <a
                className="nav-circle enabled"
                onClick={onClick}
            >
                {isLogue ? null : songIndex}
            </a>
        </div>
        <div className="nav-title">
            {songTitle}
        </div>
    </div>
)

export default NavSong
