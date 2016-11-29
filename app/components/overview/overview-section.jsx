import React from 'react'
import TextBlock from '../text/text-block'
import OverviewToggleSection from './overview-toggle-section'
import { PHONE_WIDTH_OBJECT } from 'helpers/constants'

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
    deviceWidth,
    inPopup,
    isLogue,
    overviewText,

...other }) => (
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
        {!isLogue && !isAdmin && deviceWidth === PHONE_WIDTH_OBJECT.className ?
            <OverviewToggleSection {...other}
                inPopup={true}
            /> : null
        }
    </div>
)

export default OverviewSection
