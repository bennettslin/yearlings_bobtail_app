import React from 'react'
import { PLAYER } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const TitleSection = ({

    accessedOn,
    accessedSectionKey,
    onTitleClick,

...other }) => {

    const accessHighlighted = accessedOn && accessedSectionKey === PLAYER,
        onClick = e => onTitleClick(e, 0)

    return (
        <TitleSectionView {...other}
            accessHighlighted={accessHighlighted}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const TitleSectionView = ({

    // From props.
    title,
    accessHighlighted,
    onClick

}) => (
    <div className={`section title-section${accessHighlighted ? ' access-highlighted' : ''}`}>
        <h1 className={accessHighlighted ? 'access-highlighted' : ''}>
            <a className="enabled" onClick={onClick}>
                {title}
            </a>
        </h1>
    </div>
)

export default TitleSection
