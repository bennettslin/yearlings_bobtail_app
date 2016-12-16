import React from 'react'
import TextBlock from '../text/text-block'
import OverviewToggleSection from './overview-toggle-section'

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
    isPhone,
    isAdmin,
    inPopup,
    isLogue,
    overviewText,

...other }) => (
    <div
        className={`section overview-section${inPopup ? ' in-popup' : ''}`}
    >
        {isAdmin ? <h2>overview</h2> : null}
        <div className="overview-text">
        {!isLogue && !isAdmin && isPhone ?
            <OverviewToggleSection {...other}
            inPopup={true}
            /> : null
        }
            <TextBlock
                isLyric={false}
                text={overviewText}
            />
        </div>
    </div>
)

export default OverviewSection
