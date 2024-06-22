import React, { memo, Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Texts from '../../Texts'
import Underline from '../Underline'
import { getSpaceForWikiAnchorIfNeeded, getWordsForWikiAnchor } from './helper'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import './style'

const AnchorText = ({
    didMount,
    isAccessed,
    isSelected,
    isWikiAnchor,
    canBePlainText,
    text,
    textConfig,

}) => {
    // Only split wiki anchor text, and only in higher processor.
    const words = isWikiAnchor && IS_USER_AGENT_DESKTOP ?
        getWordsForWikiAnchor(text) : [text]

    return (
        words.map((word, index) => {
            const wordElement = (
                <Texts {...textConfig}
                    hasRecursed
                    {...{
                        key: index,
                        text: word,
                        isWikiAnchor,
                    }}
                />
            )

            return didMount ? (
                <Fragment {...{ key: index }}>
                    <span
                        {...{
                            className: 'AnchorText',
                        }}
                    >
                        {/* Shown when no dot in dot sequence is selected. */}
                        {canBePlainText && (
                            <span
                                {...{
                                    className: cx(
                                        'TextAnchor__plainText',
                                    ),
                                }}
                            >
                                {wordElement}
                            </span>
                        )}

                        {/* Shown once some dot in dot sequence is selected. */}
                        <span
                            {...{
                                className: cx(
                                    'TextAnchor__linkText',

                                    isAccessed && !isSelected ?
                                        'TextAnchor__linkText__accessed' :
                                        'TextAnchor__linkText__default',

                                    isSelected &&
                                        'TextAnchor__linkText__selected',
                                ),
                            }}
                        >
                            {wordElement}
                        </span>
                        {/* See styling comment for why this is last child. */}
                        {IS_USER_AGENT_DESKTOP && (
                            <Underline
                                {...{
                                    isAccessed,
                                    isSelected,
                                }}
                                {...isWikiAnchor && {
                                    isWikiAnchor: true,
                                    isWikiFirstChild: index === 0,
                                    isWikiLastChild: index === words.length - 1,
                                }}
                            />
                        )}
                    </span>
                    {getSpaceForWikiAnchorIfNeeded({
                        isWikiAnchor,
                        words,
                        word,
                        index,
                    })}
                </Fragment>
            ) : wordElement
        })
    )
}

AnchorText.propTypes = {
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiAnchor: PropTypes.bool,
    canBePlainText: PropTypes.bool,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    textConfig: PropTypes.shape({
        isVerseLyric: PropTypes.bool,
        isItalic: PropTypes.bool,
        isEmphasis: PropTypes.bool,
        beginsVerse: PropTypes.bool,
        endsVerse: PropTypes.bool,
    }),
}

export default memo(getDidMountHoc(AnchorText))
