import React from 'react'
import { NAV_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const TitleSection = ({

    accessedOn,
    accessedSongIndex,

...other }) => {

    const titleAccessHighlighted = accessedSongIndex === 0

    return (
        <TitleSectionView {...other}
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
    titleAccessHighlighted,
    handleTitleSelect

}) => (
    <div className="section title-section">
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
