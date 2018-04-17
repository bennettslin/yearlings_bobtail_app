import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
// import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

const anchorPropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    // dotKeys: PropTypes.object,
    text: PropTypes.string,
    handleClick: PropTypes.func,

    // TODO: Pass DotSequence in this manner, if needed. If not, remove.
    children: PropTypes.element
},

Anchor = ({

    isAccessed,
    isSelected,
    // dotKeys,
    text,
    handleClick,
    children

}) => (
    <a className={cx(
            'Anchor',
            isSelected ? 'Anchor__selected' : 'Anchor__selectable',
            { 'Anchor__highlighted': isAccessed }
            // getPrefixPrependedClassNames(dotKeys, 'Anchor')
        )}
        onClick={handleClick}
        onTouchStart={handleClick}
    >
        <span className={cx(
            'Anchor__underline',
            isSelected ?
                'Anchor__underline__selected' :
                'Anchor__underline__selectable'
        )} />

        {children}

        {text && (
            <span className={cx(
                'Anchor__text',
                isSelected ?
                    'Anchor__text__selected' :
                    'Anchor__text__selectable'
            )}>
                {text}
            </span>
        )}
    </a>
)

Anchor.propTypes = anchorPropTypes

export default Anchor
