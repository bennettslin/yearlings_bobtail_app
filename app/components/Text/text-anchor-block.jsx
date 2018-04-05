// Container for text anchor.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextAnchor from './text-anchor'
import { WIKI_INDEX } from '../../constants/lyrics'

const mapStateToProps = ({
    selectedAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
}) => ({
    selectedAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex
})

const textAnchorBlockPropTypes = {
    // Through Redux.
    selectedAnnotationIndex: PropTypes.number.isRequired,
    accessedAnnotationIndex: PropTypes.number.isRequired,
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

    // From parent.
    portalAnnotationIndex: PropTypes.number,
    text: PropTypes.object.isRequired
},

TextAnchorBlock = ({

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
            [WIKI_INDEX]: wikiIndex } = text,

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

TextAnchorBlock.propTypes = textAnchorBlockPropTypes

export default connect(mapStateToProps)(TextAnchorBlock)
