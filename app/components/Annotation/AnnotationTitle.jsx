import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotAnchor from '../Anchor/DotAnchor'
import TextAnchor from '../Anchor/TextAnchor'

import { IS_DOT_STANZA } from '../../constants/lyrics'

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
        'fontSize__title'
    )}>
        {annotationTitle === IS_DOT_STANZA ? (
            <DotAnchor
                inAnnotation
                isSelected={isSelected}
                isAccessed={isAccessed}
                dotKeys={annotationDotKeys}
                handleAnchorClick={handleTitleClick}
            />
        ) : (
            <TextAnchor
                isSelected={isSelected}
                isAccessed={isAccessed}
                text={`\u201c${annotationTitle}\u201d`}
                handleAnchorClick={handleTitleClick}
            />
        )}
    </div>
)

AnnotationTitle.propTypes = annotationTitlePropTypes

export default AnnotationTitle
