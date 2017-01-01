import React from 'react'
import { TIPS_OPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const TipsSection = (props) => (
    <TipsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const TipsSectionView = ({

    // From props.
    isAdmin,
    selectedTipsIndex,
    onTipsClick

}) => (
    <div className={`section tips-section`}>
        {isAdmin &&
            <h2>tips</h2>
        }
        <button onClick={onTipsClick}>tips: {TIPS_OPTIONS[selectedTipsIndex]}</button>
    </div>
)

export default TipsSection
