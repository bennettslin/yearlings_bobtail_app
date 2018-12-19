import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
import DotSequence from '../DotSequence'
import Underline from './Underline'

import AnchorDot from './AnchorDot'
import AnchorText from './AnchorText'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'
import { getPropsAreShallowEqual } from 'helpers/general'
import { populateRefs } from 'helpers/ref'

class Anchor extends Component {

    static propTypes = {
        // From parent.
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isWikiTextAnchor: PropTypes.bool,
        sequenceDotKeys: PropTypes.object,
        stanzaDotKeys: PropTypes.object,
        text: PropTypes.any,
        handleAnchorClick: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleClick = (e) => {
        if (!this.props.isDisabled) {
            this.props.handleAnchorClick(e)
            this.dispatchStopPropagation(e)
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {

        const {
                isAccessed,
                isSelected,
                sequenceDotKeys,
                stanzaDotKeys,
                isWikiTextAnchor,
                text
            } = this.props,

            isDotAnchor = Boolean(stanzaDotKeys)

        return (
            <a
                className={cx(
                    'Anchor',

                    isAccessed && !isSelected && 'Anchor__accessed',

                    !isSelected && 'Anchor__selectable',

                    !isWikiTextAnchor && 'Anchor__noWrap',

                    // "Child anchor reference letter."
                    isWikiTextAnchor && 'ChAr',

                    sequenceDotKeys &&
                        getPrefixedDotLetterClassNames(
                            sequenceDotKeys,
                            // "Child anchor letter."
                            'ChA'
                        ),

                    /**
                     * If sequence dot keys are provided, or if it's a wiki
                     * anchor, anchor is not always visible.
                     */
                    !sequenceDotKeys &&
                    !isWikiTextAnchor &&
                        'Anchor__alwaysVisible'
                )}
                {...{
                    onClick: this._handleClick,
                    onTouchStart: this._handleClick
                }}
            >
                {!isWikiTextAnchor && (
                    <Underline
                        {...{
                            isAccessed,
                            isSelected,
                            isDotAnchor
                        }}
                    />
                )}

                {sequenceDotKeys && (
                    <DotSequence
                        inTextAnchor
                        {...{
                            isAccessed,
                            isSelected,
                            dotKeys: sequenceDotKeys
                        }}
                    />
                )}

                {isDotAnchor && (
                    <AnchorDot
                        {...{
                            isAccessed,
                            isSelected,
                            stanzaDotKeys
                        }}
                    />
                )}

                {Boolean(text) && (
                    <AnchorText
                        {...{
                            isAccessed,
                            isSelected,
                            isWikiTextAnchor,
                            text
                        }}
                    />
                )}

                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </a>
        )
    }
}

export default Anchor
