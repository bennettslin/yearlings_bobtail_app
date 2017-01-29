import React from 'react'
import DotBlock from '../dot/dot-block'
import { DOTS_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

 const DotsSection = ({

     accessedOn,
     accessedSectionKey,
     nextSectionKey,

 ...other }) => {

     const sectionAccessHighlighted = accessedOn && accessedSectionKey === DOTS_SECTION,
         sectionNextHighlighted = accessedOn && nextSectionKey === DOTS_SECTION

     return (
         <DotsSectionView {...other}
             sectionAccessHighlighted={sectionAccessHighlighted}
             sectionNextHighlighted={sectionNextHighlighted}
         />
     )
 }

/****************
 * PRESENTATION *
 ****************/

const DotsSectionView = ({

    // From controller.
    sectionAccessHighlighted,
    sectionNextHighlighted,

...other }) => (
    <div
        className={`section dots-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
    >
        <DotBlock {...other}
            inDotsSection={true}
            sectionAccessHighlighted={sectionAccessHighlighted}
        />
    </div>
)

export default DotsSection
