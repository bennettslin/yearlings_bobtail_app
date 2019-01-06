import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Underline from '../Underline'

const propTypes = {
    // From parent.
    isDesktop: PropTypes.bool.isRequired,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired
}

const AnchorText = memo(({
    isDesktop,
    isAccessed,
    isSelected,
    isWikiTextAnchor,
    text

}) => {
    const
        words = typeof text === 'string' ? [text] : text,
        isTextAnchorAccessed = isAccessed && !isSelected

    return (
        words.map((word, index) => {
            return (
                <___
                    key={index}
                >
                    {Boolean(index) && ' '}
                    <span
                        {...{
                            className: cx(
                                'AnchorText',
                                isTextAnchorAccessed && 'AnchorText__accessed'
                            )
                        }}
                    >
                        {isDesktop && (
                            <Underline
                                {...{
                                    isAccessed,
                                    isSelected
                                }}
                                {...isWikiTextAnchor && {
                                    isWikiAnchor: true,
                                    isWikiFirstChild: index === 0,
                                    isWikiLastChild: index === words.length - 1
                                }}
                            />
                        )}

                        {/* Shown when no dot in dot sequence is selected. */}
                        <span className={cx(
                            'TextAnchor__plainText'
                        )}>
                            {word}
                        </span>

                        {/* Shown once some dot in dot sequence is selected. */}
                        <span className={cx(
                            'TextAnchor__linkText',
                            'TextAnchor__linkText__default',

                            isSelected &&
                            'TextAnchor__linkText__selected',

                            'textShadow__text',
                            'abF'
                        )}>
                            {word}
                        </span>

                        {/* Shown instead when access is on. */}
                        <span className={cx(
                            'TextAnchor__linkText',
                            'TextAnchor__linkText__accessed',

                            isSelected &&
                            'TextAnchor__linkText__selected',

                            'textShadow__text',
                            'abF'
                        )}>
                            {word}
                        </span>
                    </span>
                </___>
            )
        })
    )
})

AnchorText.propTypes = propTypes

export default AnchorText
