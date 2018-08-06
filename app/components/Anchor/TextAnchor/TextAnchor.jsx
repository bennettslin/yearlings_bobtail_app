import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from 'components/Anchor/Anchor';
import Underline from '../Underline/Underline'

const textAnchorPropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired
},

TextAnchor = ({

    text,

...other }) => {

    const {
            isAccessed,
            isSelected,
            isWikiTextAnchor
        } = other,

        words = typeof text === 'string' ? [text] : text

    return (
        <Anchor {...other}>
            <span className={cx(
                'TextAnchor',

                isAccessed && !isSelected && 'TextAnchor__accessed'
            )}>
                {words.map((word, index) => {
                    return (
                        <Fragment
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
                                            isSelected,
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
                        </Fragment>
                    )
                })}
            </span>
        </Anchor>
    )
}

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
