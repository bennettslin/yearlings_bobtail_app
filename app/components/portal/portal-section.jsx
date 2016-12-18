import React from 'react'

/*************
 * CONTAINER *
 *************/

const PortalSection = (props) => {

    return (
        <PortalSectionView {...props}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const PortalSectionView = ({

    // From props.
    songIndex,
    annotationIndex,
    selectedPortalsIndex

    // From controller.

}) => (
    <div
        className="section portal-section"
    >
        <h2>portal</h2>
        <div>
            {songIndex}
            {annotationIndex}
            {selectedPortalsIndex}
        </div>
    </div>
)

export default PortalSection
