import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Texts from '../../Texts'
import Underline from '../Underline'

import { getSpaceIfNeeded, getWordsForWikiAnchor } from './helper'

const propTypes = {
    // From parent.
    isUserAgentDesktop: PropTypes.bool.isRequired,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    textConfig: PropTypes.shape({
        isVerseLyric: PropTypes.bool,
        isItalic: PropTypes.bool,
        isEmphasis: PropTypes.bool,
        beginsVerse: PropTypes.bool,
        endsVerse: PropTypes.bool
    })
}

const AnchorText = ({
    isUserAgentDesktop,
    isAccessed,
    isSelected,
    isWikiTextAnchor,
    text,
    textConfig

}) => {
    // Only split wiki anchor text, and only in higher processor.
    const words = isWikiTextAnchor && isUserAgentDesktop ?
        getWordsForWikiAnchor(text) : [text]

    return (
        words.map((word, index) => {

            const wordComponent = (
                <Texts {...textConfig}
                    hasRecursed
                    {...{
                        key: index,
                        text: word,
                        isWikiTextAnchor
                    }}
                />
            )

            return (
                <___ {...{ key: index }}>
                    <span className="AnchorText">
                        {/* Shown when no dot in dot sequence is selected. */}
                        <span className={cx(
                            'TextAnchor__plainText'
                        )}>
                            {wordComponent}
                        </span>

                        {/* Shown once some dot in dot sequence is selected. */}
                        <span className={cx(
                            'TextAnchor__linkText',

                            isAccessed && !isSelected ?
                                'TextAnchor__linkText__accessed' :
                                'TextAnchor__linkText__default',

                            isSelected &&
                                'TextAnchor__linkText__selected',

                            'textShadow__text'
                        )}>
                            {wordComponent}
                        </span>

                        {/* See styling comment for why this is last child. */}
                        {isUserAgentDesktop && (
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
                    </span>
                    {Boolean(isWikiTextAnchor) && getSpaceIfNeeded({
                        words,
                        word,
                        index
                    })}
                </___>
            )
        })
    )
}

AnchorText.propTypes = propTypes

export default memo(AnchorText)
