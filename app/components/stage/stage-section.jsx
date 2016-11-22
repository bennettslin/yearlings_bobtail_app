import React from 'react'

/*************
 * CONTAINER *
 *************/

const StageSection = (props) => (
    <StageSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const StageSectionView = ({

    // From props.
    isAdmin

}) => (
    <div className={`section stage-section ${isAdmin ? 'admin' : 'live'}`}>
        <h2>stage</h2>
    </div>
)

export default StageSection
