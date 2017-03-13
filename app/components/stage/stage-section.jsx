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
    selectedAdminIndex

}) => (
    <div className={`section stage-section`}>
        {selectedAdminIndex &&
            <h2>stage</h2>
        }
    </div>
)

export default StageSection
