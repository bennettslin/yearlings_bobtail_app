import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isString from 'lodash.isstring'

import Underline from '../Underline'

const propTypes = {
    // From parent.
    isHigherProcessor: PropTypes.bool.isRequired,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired
}

const AnchorText = ({
    isHigherProcessor,
    isAccessed,
    isSelected,
    isWikiTextAnchor,
    text

}) => {
    const words = isString(text) ? [text] : text

    return (
        words.map((word, index) => {
            return (
                <___ {...{ key: index }}>
                    {Boolean(index) && ' '}
                    <span className="AnchorText">
                        {isHigherProcessor && (
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

                            isAccessed && !isSelected ?
                                'TextAnchor__linkText__accessed' :
                                'TextAnchor__linkText__default',

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
}

AnchorText.propTypes = propTypes

export default memo(AnchorText)
