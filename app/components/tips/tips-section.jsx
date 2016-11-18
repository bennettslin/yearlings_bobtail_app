import React from 'react'

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
    selectedTipsIndex,
    onTipsClick

}) => (
    <div className="section tips-section">
        <h2>tips</h2>
        <button onClick={onTipsClick}>tips: {selectedTipsIndex}</button>
    </div>
)

export default TipsSection
