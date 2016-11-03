import React from 'react'
import TextBlock from '../text/text-block'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { OVERVIEW_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewsSection = ({

    selectedOverviewIndex,
    accessedOn,
    accessedSectionKey,

...other }) => {

    const accessHighlighted = accessedOn && accessedSectionKey === OVERVIEW_SECTION,

        /**
         * Remember that the default to show bubble text is 0.
         */
        showBubbleText = !selectedOverviewIndex

    return (
        <OverviewsSectionView {...other}
            accessHighlighted={accessHighlighted}
            showBubbleText={showBubbleText}
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
    showBubbleText

}) => (
    <div className={`section overviews-section${accessHighlighted ? ' access-highlighted' : ''}`}>
        <h2>overview</h2>
        <div className="overview-text">
            <button onClick={onOverviewClick}>(Bennett icon)</button>
            { showBubbleText ?
                <TextBlock
                isLyric={false}
                text={overviewText}
                onAnchorClick={onWikiUrlClick}
                /> : null
            }
        </div>
    </div>
)

export default OverviewsSection
