// Component to show all portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnnotationPortal from './annotation-portal'
import { SOURCE_PORTAL_INDEX } from '../../constants/lyrics'

const AnnotationPortalsBlock = ({

    accessedAnnotationAnchorIndex,
    portalLinks,

...other }) => (

    <div className="portals-block">
        {portalLinks.map((portalObject, index) => {

            const { [SOURCE_PORTAL_INDEX]: portalIndex } = portalObject,
                isAccessedPortal = accessedAnnotationAnchorIndex === portalIndex

            return (
                <AnnotationPortal {...other}
                    key={index}
                    portalObject={portalObject}
                    isAccessedPortal={isAccessedPortal}
                />
            )
        })}
    </div>
)

AnnotationPortalsBlock.propTypes = {
    // Through Redux.
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

    // From parent.
    portalLinks: PropTypes.array.isRequired
}

export default connect(({
    accessedAnnotationAnchorIndex
}) => ({
    accessedAnnotationAnchorIndex
}))(AnnotationPortalsBlock)
