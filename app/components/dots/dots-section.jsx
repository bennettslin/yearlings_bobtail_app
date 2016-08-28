import React from 'react'
import DotsBlock from './dots-block'

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
    showUnpresent,
    activeDotKeys,
    presentDotKeys,
    onDotClick

}) => (

    <div className="section dots-section">
        <h2>dots</h2>
        <DotsBlock
            showUnpresent={showUnpresent}
            activeDotKeys={activeDotKeys}
            presentDotKeys={presentDotKeys}
            onDotClick={onDotClick}
        />
    </div>
)

export default DotsSection
