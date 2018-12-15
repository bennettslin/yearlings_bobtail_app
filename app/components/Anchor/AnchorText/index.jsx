import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Underline from '../Underline'

const propTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired
}

const AnchorText = memo(({
    isAccessed,
    isSelected,
    isWikiTextAnchor,
    text

}) => {
    const words = typeof text === 'string' ? [text] : text

    return (
        <span className={cx(
            'AnchorText',

            isAccessed && !isSelected && 'TextAnchor__accessed'
        )}>
            {words.map((word, index) => (
                <___
                    key={index}
                >
                    {Boolean(index) && ' '}
                    <span
                        className="TextAnchor__singleEntity"
                    >
                        {isWikiTextAnchor && (
                            <Underline
                                isWikiAnchor
                                {...{
                                    isAccessed,
                                    isSelected
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
                            'absoluteFullContainer'
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
                            'absoluteFullContainer'
                        )}>
                            {word}
                        </span>
                    </span>
                </___>
            ))}
        </span>
    )
})

AnchorText.propTypes = propTypes

export default AnchorText
