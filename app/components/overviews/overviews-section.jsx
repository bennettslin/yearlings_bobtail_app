import React from 'react'
import OverviewButton from './overview-button'
import TextBlock from '../text/text-block'
import { OVERVIEW_KEYS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewsSection = (props) => {

    const { selectedOverviewIndex = 0 } = props,

        selectedOverviewKey = OVERVIEW_KEYS[selectedOverviewIndex - 1]

    return (
        <OverviewsSectionView {...props}
            selectedOverviewKey={selectedOverviewKey}
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

    // From controller.
    selectedOverviewKey

}) => (

    <div className="section overviews-section">
        <div className="button-block">
            {OVERVIEW_KEYS.map((overviewKey, overviewIndex) => {
                const isDisabled = (overviewKey === selectedOverviewKey)
                return (
                    <OverviewButton
                        key={overviewIndex}
                        isDisabled={isDisabled}
                        overviewKey={overviewKey}
                        overviewIndex={overviewIndex}
                        onOverviewClick={onOverviewClick}
                    />
                )
            })}
        </div>
        <div className="overview-text">
            <TextBlock
                isLyric={false}
                text={overviewText}
            />
        </div>
    </div>
)

export default OverviewsSection
