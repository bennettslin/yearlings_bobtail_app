// Container for text anchor.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextAnchor from './text-anchor'

const TextAnchorBlock = ({

    selectedAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex,
    portalAnnotationIndex,
    text,

...other }) => {

    const { annotationIndex,
            anchor,
            todo,
            dotKeys: annotationDotKeys,
            wikiIndex } = text,

        isSelected = annotationIndex === selectedAnnotationIndex,

        accessHighlighted =
            accessedAnnotationIndex === annotationIndex ||
            accessedAnnotationAnchorIndex === wikiIndex,

        isPortalAnchor = !!portalAnnotationIndex && annotationIndex === portalAnnotationIndex

    return (
        <TextAnchor {...other}
            anchorText={anchor}
            annotationIndex={annotationIndex}
            annotationDotKeys={annotationDotKeys}
            isPortalAnchor={isPortalAnchor}
            wikiIndex={wikiIndex}
            hasTodo={todo}
            isSelected={isSelected}
            accessHighlighted={accessHighlighted}
        />
    )
}

TextAnchorBlock.propTypes = {
    // Through Redux.
    selectedAnnotationIndex: PropTypes.number.isRequired,
    accessedAnnotationIndex: PropTypes.number.isRequired,
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

    // From parent.
    portalAnnotationIndex: PropTypes.number,
    text: PropTypes.object.isRequired
}

export default connect(({
    selectedAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    selectedAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
}))(TextAnchorBlock)
