import React from 'react'
import OverviewButton from './overview-button.jsx'
import { OVERVIEW_KEYS } from '../../helpers/constants.js'
import TextBlock from '../text/text-block.jsx'

/*************
 * CONTAINER *
 *************/

const OverviewsSection = (props) => {

    const { activeOverviewIndex = 0 } = props,

        activeOverviewKey = OVERVIEW_KEYS[activeOverviewIndex - 1]

    return (
        <OverviewsSectionView {...props}
            activeOverviewKey={activeOverviewKey}
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
    activeOverviewKey

}) => (

    <div className="section overviews-section">
        <div className="button-block">
            {OVERVIEW_KEYS.map((overviewKey, overviewIndex) => {
                const isDisabled = (overviewKey === activeOverviewKey)
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
