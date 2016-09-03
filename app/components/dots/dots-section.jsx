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
    hoveredDotIndex,
    onDotClick,
    onDotHover

}) => (

    <div className="section dots-section">
        <h2>dots</h2>
        {showUnpresent ?
            <div className="tooltip-container">
                <div className={`tooltip-block ${hoveredDotIndex}`}>
                    {hoveredDotIndex ?
                        <div className="tooltip">
                            hello hello test
                        </div> : null
                    }
                </div>
            </div> : null
        }
        <DotsBlock
            showUnpresent={showUnpresent}
            activeDotKeys={activeDotKeys}
            presentDotKeys={presentDotKeys}
            onDotClick={onDotClick}
            onDotHover={onDotHover}
        />
    </div>
)

export default DotsSection
