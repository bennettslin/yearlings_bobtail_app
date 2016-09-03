import React from 'react'

/*************
 * CONTAINER *
 *************/

const LyricsPlayButton = ({

    time,
    isEnabled,
    onClick

}) => (

    <div className="play-button-container">
        <div className="play-button-block">
            <a className={`play-button${isEnabled ? ' enabled' : ''}`}
                onClick={onClick}
            >
                {/* TODO: When playing, show playing instead, and make it not selectable. */}
                {time}
            </a>
        </div>
    </div>
)

export default LyricsPlayButton
