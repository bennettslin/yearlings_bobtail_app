import React from 'react'
import TextBlock from '../text/text-block'
import { OVERVIEW_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewSection = (props) => {
    return (
        <OverviewSectionView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewSectionView = ({

    // From props.
    isAdmin,
    inPopup,
    overviewText

}) => (
    <div
        className={`section overview-section${inPopup ? ' in-popup' : ''}`}
    >
        {isAdmin ? <h2>overview</h2> : null}
        <div className="overview-text">
            <TextBlock
                isLyric={false}
                text={overviewText}
            />
        </div>
    </div>
)

export default OverviewSection
