import React from 'react'
import { NAV_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const TitleSection = ({

    accessedOn,
    accessedSectionKey,
    accessedSongIndex,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === NAV_SECTION,
        titleAccessHighlighted = sectionAccessHighlighted && accessedSongIndex === 0

    return (
        <TitleSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
            titleAccessHighlighted={titleAccessHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const TitleSectionView = ({

    // From props.
    titleInAudio,
    title,
    sectionAccessHighlighted,
    titleAccessHighlighted,
    handleTitleSelect

}) => (
    <div className={`section title-section${sectionAccessHighlighted ? ' access-highlighted' : ''}`}>
        <a
            className={`title-button enabled${titleAccessHighlighted ? ' access-highlighted' : ''}`}
            onClick={handleTitleSelect}
        >
            {titleInAudio ?
                <div className="title-icon button-icon large">
                    {title}
                </div> :
                <div className="title-image">
                    {title}
                </div>
            }
        </a>
    </div>
)

export default TitleSection
