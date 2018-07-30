import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotAnchor from '../../Anchor/DotAnchor/DotAnchor'
import TextAnchor from '../../Anchor/TextAnchor/TextAnchor'

import { IS_DOT_CARD } from '../../../constants/lyrics'

const annotationTitlePropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,
    annotationTitle: PropTypes.string.isRequired,
    handleTitleClick: PropTypes.func
},

AnnotationTitle = ({

    // inCarousel,
    isSelected,
    isAccessed,
    annotationDotKeys,
    annotationTitle,
    handleTitleClick

}) => (
    <div className={cx(
        'AnnotationTitle',

        'bgColour__annotation',

        isSelected &&
            'bgColour__annotation__selected',

        'fontSize__title',
        'flexCentreContainer'
    )}>
        {annotationTitle === IS_DOT_CARD ? (
            <DotAnchor
                inAnnotation
                isSelected={isSelected}
                isAccessed={isAccessed}
                stanzaDotKeys={annotationDotKeys}
                handleAnchorClick={handleTitleClick}
            />
        ) : (
            <TextAnchor
                isSelected={isSelected}
                isAccessed={isAccessed}
                text={`\u201c${annotationTitle}\u201d`}
                sequenceDotKeys={annotationDotKeys}
                handleAnchorClick={handleTitleClick}
            />
        )}
    </div>
)

AnnotationTitle.propTypes = annotationTitlePropTypes

export default AnnotationTitle
