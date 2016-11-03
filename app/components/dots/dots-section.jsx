import React from 'react'
import DotsBlock from './dots-block'
import { DOTS_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

 const DotsSection = ({

     accessedOn,
     accessedSectionKey,

 ...other }) => {

     const accessHighlighted = accessedOn && accessedSectionKey === DOTS_SECTION

     return (
         <DotsSectionView {...other}
             accessHighlighted={accessHighlighted}
         />
     )
 }

/****************
 * PRESENTATION *
 ****************/

const DotsSectionView = ({

    // From props.
    hoveredDotIndex,

    // From controller.
    accessHighlighted,

...other }) => (
    <div className={`section dots-section${accessHighlighted ? ' access-highlighted' : ''}`}>
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
