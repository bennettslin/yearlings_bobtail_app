import React from 'react'
import TextBlock from '../text/text-block'
import RadioButtonBlock from '../superclasses/radio-button-block'

/*************
 * CONTAINER *
 *************/

const OverviewsSection = (props) => (
    <OverviewsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const OverviewsSectionView = ({

    // From props.
    overviewText,
    selectedOverviewIndex,
    onOverviewClick,
    onWikiUrlClick

}) => (
    <div className="section overviews-section">
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
