import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnchorDot from '../../../Anchor/AnchorDot'
import AnchorText from '../../../Anchor/AnchorText'

import AnnotationAccess from './Access'

import { IS_DOT_CARD } from 'constants/lyrics'

const annotationTitlePropTypes = {
    // From parent.
    isShadow: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,
    annotationTitle: PropTypes.string.isRequired,
    accessibleAnnotationAnchorsLength: PropTypes.number,
    handleTitleClick: PropTypes.func
},

AnnotationTitle = ({

    // TODO: Make sure this is necessary.
    isShadow,

    isSelected,
    isAccessed,
    annotationDotKeys,
    annotationTitle,
    accessibleAnnotationAnchorsLength,
    handleTitleClick

}) => (
    <div className={cx(
        'AnnotationTitle',

        isShadow && 'AnnotationTitle__shadow',

        {
            ...!isShadow && {
                // This includes transition animation, so it's always applied.
                'bgColour__annotation': true,
                'bgColour__annotation__selected': isSelected
            },

            ...isShadow && {
                'boxShadow__annotation': !isSelected,
                'boxShadow__annotation__selected': isSelected
            }
        },

        'fontSize__title'
    )}>
        {annotationTitle === IS_DOT_CARD ? (
            <AnchorDot
                inAnnotation
                {...{
                    isSelected,
                    isAccessed,
                    stanzaDotKeys: annotationDotKeys,
                    handleAnchorClick: handleTitleClick
                }}
            />
        ) : (
            <AnchorText
                {...{
                    isSelected,
                    isAccessed,
                    text: `\u201c${annotationTitle}\u201d`,
                    sequenceDotKeys: annotationDotKeys,
                    handleAnchorClick: handleTitleClick
                }}
            />
        )}
        <AnnotationAccess
            {...{
                isSelected,
                accessibleAnnotationAnchorsLength
            }}
        />
    </div>
)

AnnotationTitle.propTypes = annotationTitlePropTypes

export default AnnotationTitle
