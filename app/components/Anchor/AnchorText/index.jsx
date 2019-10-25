import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Texts from '../../Texts'
import Underline from '../Underline'

import { getSpaceIfNeeded, getWordsForWikiAnchor } from './helper'

const propTypes = {
    // From parent.
    isHigherProcessor: PropTypes.bool.isRequired,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
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
    isHigherProcessor,
    isAccessed,
    isSelected,
    isWikiTextAnchor,
    text,
    textConfig

}) => {
    // Only split wiki anchor text, and only in higher processor.
    const words = isWikiTextAnchor && isHigherProcessor ?
        getWordsForWikiAnchor(text) : [text]

    const wordsMap = words.map((word, index) => (
        <Texts {...textConfig}
            hasRecursed
            {...{
                key: index,
                text: word,
                isWikiTextAnchor
            }}
        />
    ))

    return (
        wordsMap.map((word, index) => {
            return (
                <___ {...{ key: index }}>
                    <span className="AnchorText">
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

                            'textShadow__text'
                        )}>
                            {word}
                        </span>

                        {/* See styling comment for why this is last child. */}
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
