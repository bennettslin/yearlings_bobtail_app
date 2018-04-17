import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from '../Anchor/Anchor'
import DotAnchor from '../Dot/DotAnchor'

import { IS_DOT_STANZA } from '../../constants/lyrics'

const annotationTitlePropTypes = {
    // From parent.
    isAccessedAnnotation: PropTypes.bool,
    showAsSelected: PropTypes.bool.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,
    annotationTitle: PropTypes.string.isRequired,
    handleTitleClick: PropTypes.func
},

AnnotationTitle = ({

    // inCarousel,
    showAsSelected,
    isAccessedAnnotation,
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
                isSmall
                isSelected={showAsSelected}
                accessHighlighted={isAccessedAnnotation}
                dotKeys={annotationDotKeys}
                handleDotButtonClick={handleTitleClick}
            />
        ) : (
            // <a className={cx(
            //         'AnchorBlock',
            //         'TextAnchorBlock',
            //         annotationDotKeys,
            //         { 'selected': showAsSelected,
            //           'accessHighlighted': isAccessedAnnotation }
            //     )}
            //     onClick={handleTitleClick}
            //     onTouchStart={handleTitleClick}
            // >
            //     <span className="underlineBar" />
            //     <span className="TextSpan">
            //         {`\u201c${annotationTitle}\u201d`}
            //     </span>
            // </a>
            <Anchor
                isSelected={showAsSelected}
                isAccessed={isAccessedAnnotation}
                // dotKeys={annotationDotKeys}
                text={`\u201c${annotationTitle}\u201d`}
                handleClick={handleTitleClick}
            />
        )}
    </div>
)

AnnotationTitle.propTypes = annotationTitlePropTypes

export default AnnotationTitle
