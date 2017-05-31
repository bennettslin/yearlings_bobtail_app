import React from 'react'
import { TIPS_OPTIONS } from 'constants/options'

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
    selectedAdminIndex,
    selectedTipsIndex,
    handleTipsToggle

}) => (
    <div className="section tips-section">
        {selectedAdminIndex &&
            <h2>tips</h2>
        }
        <button
            onClick={e => handleTipsToggle(e)}
        >
            tips: {TIPS_OPTIONS[selectedTipsIndex]}
        </button>
    </div>
)

export default TipsSection
