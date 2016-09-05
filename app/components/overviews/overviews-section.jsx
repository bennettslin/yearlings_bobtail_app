import React from 'react'
import TextBlock from '../text/text-block'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { OVERVIEW_KEYS } from 'helpers/constants'

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
    onOverviewClick

}) => (

    <div className="section overviews-section">
        <RadioButtonBlock
            selectedButtonIndex={selectedOverviewIndex}
            buttonKeys={OVERVIEW_KEYS}
            onButtonClick={onOverviewClick}
        />
        <div className="overview-text">
            <TextBlock
                isLyric={false}
                text={overviewText}
            />
        </div>
    </div>
)

export default OverviewsSection
