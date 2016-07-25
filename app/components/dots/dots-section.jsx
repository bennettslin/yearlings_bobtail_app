import React from 'react'
import DotsBlock from './dots-block.jsx'

/*************
 * CONTAINER *
 *************/

const DotsSection = (props) => (
    <DotsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DotsSectionView = ({

    // From props.
    dotKeys,
    onDotClick

}) => (

    <div className="section dots-section">
        <h2>dots</h2>
        <DotsBlock
            dotKeys={dotKeys}
            onDotClick={onDotClick}
        />
    </div>
)

export default DotsSection
