import React from 'react'
import TextBlock from '../text/text-block'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { OVERVIEW } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewsSection = ({

    selectedOverviewIndex,
    accessedOn,
    accessedSectionKey,

...other }) => {

    const accessHighlighted = accessedOn && accessedSectionKey === OVERVIEW,

        /**
         * Remember that the default to auto show bubble is 0.
         */
        autoShowBubble = !selectedOverviewIndex

    return (
        <OverviewsSectionView {...other}
            accessHighlighted={accessHighlighted}
            autoShowBubble={autoShowBubble}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewsSectionView = ({

    // From props.
    overviewText,
    onOverviewClick,
    onWikiUrlClick,

    // From controller.
    accessHighlighted,
    autoShowBubble

}) => (
    <div className={`section overviews-section${accessHighlighted ? ' access-highlighted' : ''}`}>
        <h2>overview</h2>
        <div className="overview-text">
            {/* Temporary button. */}
            <button onClick={onOverviewClick}>
                {autoShowBubble ? 'auto show' : 'sleep'}
            </button>
            <TextBlock
                isLyric={false}
                text={overviewText}
                onAnchorClick={onWikiUrlClick}
            />
        </div>
    </div>
)

export default OverviewsSection
