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
    hoveredDotIndex,

...other }) => (
    <div className="section dots-section">
        <h2>dots</h2>
        <div className="tooltip-container">
            <div className={`tooltip-block ${hoveredDotIndex}`}>
                {hoveredDotIndex ?
                    <div className="tooltip">
                        hello hello test
                    </div> : null
                }
            </div>
        </div>
        <DotsBlock {...other}
            inDotsSection={true}
        />
    </div>
)

export default DotsSection
