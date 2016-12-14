import React from 'react'
import { NAV_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const TitleSection = ({

    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedSongIndex,
    onTitleClick,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === NAV_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === NAV_SECTION,
        onClick = e => onTitleClick(e, 0),
        titleAccessHighlighted = sectionAccessHighlighted && accessedSongIndex === 0

    return (
        <TitleSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
            sectionNextHighlighted={sectionNextHighlighted}
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
    sectionNextHighlighted,
    titleAccessHighlighted,
    onClick

}) => (
    <div className={`section title-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}>
        <a
            className={`title-button enabled ${titleAccessHighlighted ? 'access-highlighted' : ''}`}
            onClick={onClick}
        >
            <div className="title-image">
                {title}
            </div>
        </a>
    </div>
)

export default TitleSection
