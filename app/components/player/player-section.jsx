import React from 'react'
import { PLAYER_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const PlayerSection = ({

    accessedOn,
    accessedSectionKey,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === PLAYER_SECTION

    return (
        <PlayerSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const PlayerSectionView = ({

    // From props.
    isPlaying,
    selectedPlayerOptionIndex,
    onPlayButtonClick,
    onPlayerOptionClick,

    // From controller.
    sectionAccessHighlighted

}) => (
    <div className={`section player-section${sectionAccessHighlighted ? ' access-highlighted' : ''}`}>
        <h2>player</h2>
            <button onClick={onPlayButtonClick}>{isPlaying ? 'Playing' : 'Paused' }</button>
            <button onClick={onPlayerOptionClick}>player option: {selectedPlayerOptionIndex}</button>
    </div>
)

export default PlayerSection
