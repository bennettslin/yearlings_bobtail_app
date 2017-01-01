import React from 'react'

/*************
 * CONTAINER *
 *************/

// TODO: Make play button take up width of line.

const LyricsPlayButton = ({

    isSelected,
    onClick

}) => (
    <div className="play-button-block">
        {!isSelected &&
            <a className="play-child small-play-button enabled">
                <div>{`\u2022`}</div>
            </a>
        }
        {!isSelected ?
            <a className={`play-child play-button${isSelected ? '' : ' enabled'}`}
                onClick={onClick}
            >
                {`\u25B6`}
            </a> :
            <div className="play-child play-icon">
                {`\u25B6`}
            </div>
        }
    </div>
)

export default LyricsPlayButton
