import React from 'react';
import DotsBlock from './dots-block.jsx';

/*************
 * CONTAINER *
 *************/

const DotsSection = (props) => (
    <DotsSectionView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const DotsSectionView = ({

    // From props.
    dotKeys

}) => (

    <div className="section dots-section">
        <h2>dots</h2>
        <DotsBlock
            dotKeys={dotKeys}
            interactable={true}
        />
    </div>
);

export default DotsSection;