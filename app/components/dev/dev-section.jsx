import React from 'react'

/*************
 * CONTAINER *
 *************/

const DevSection = (props) => (
    <DevSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DevSectionView = ({

    // From props.
    activeTime

}) => (

    <div className="section dev-section">
        <h2>dev</h2>
        <div className="row">
            Active Time: {activeTime}
        </div>
    </div>
)

export default DevSection
