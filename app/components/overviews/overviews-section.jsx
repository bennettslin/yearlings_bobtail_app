import React from 'react'
import TextBlock from '../text/text-block'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { OVERVIEW } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewsSection = ({

    accessedOn,
    accessedSectionKey,

...other }) => {

    const accessHighlighted = accessedOn && accessedSectionKey === OVERVIEW

    return (
        <OverviewsSectionView {...other}
            accessHighlighted={accessHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewsSectionView = ({

    // From props.
    overviewText,
    selectedOverviewIndex,
    onOverviewClick,
    onWikiUrlClick,

    // From controller.
    accessHighlighted

}) => (
    <div className={`section overviews-section${accessHighlighted ? ' access-highlighted' : ''}`}>
        <h2>overview</h2>
        <div className="overview-text">
            <TextBlock
                isLyric={false}
                text={overviewText}
                onAnchorClick={onWikiUrlClick}
            />
        </div>
    </div>
)

export default OverviewsSection
