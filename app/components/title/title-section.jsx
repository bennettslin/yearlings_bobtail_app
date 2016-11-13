import React from 'react'
import { NAV_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const TitleSection = ({

    accessedOn,
    accessedSectionKey,
    accessedSongIndex,
    onTitleClick,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === NAV_SECTION,
        onClick = e => onTitleClick(e, 0),
        titleAccessHighlighted = sectionAccessHighlighted && accessedSongIndex === 0

    return (
        <TitleSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
            titleAccessHighlighted={titleAccessHighlighted}
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
    sectionAccessHighlighted,
    titleAccessHighlighted,
    onClick

}) => (
    <div className={`section title-section${sectionAccessHighlighted ? ' access-highlighted' : ''}`}>
        <h1 className={titleAccessHighlighted ? 'access-highlighted' : ''}>
            <a className="enabled" onClick={onClick}>
                {title}
            </a>
        </h1>
    </div>
)

export default TitleSection
