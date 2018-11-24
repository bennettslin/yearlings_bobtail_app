import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'
import DotSequence from '../DotSequence'
import Underline from './Underline'
import AccessLetter from '../Access/Letter'

import { getPrefixedDotLetterClassNames } from 'helpers/dotHelper'

import {
    ENTER
} from 'constants/access'

class Anchor extends Component {

    static propTypes = {
        // From parent.
        className: PropTypes.any,
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isDotAnchor: PropTypes.bool,
        isWikiTextAnchor: PropTypes.bool,
        omitAccessIcon: PropTypes.bool,
        sequenceDotKeys: PropTypes.object,
        handleAnchorClick: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.element
        ])
    }

    _handleClick = (e) => {
        this.dispatchStopPropagation(e)

        const { isDisabled } = this.props

        if (!isDisabled) {
            this.props.handleAnchorClick(e)
        }
    }

    render() {

        const {
            className,
            isAccessed,
            isSelected,
            isDotAnchor,
            isWikiTextAnchor,
            omitAccessIcon,
            sequenceDotKeys,
            children
        } = this.props

        return (
            <a
                className={cx(
                    'Anchor',

                    isAccessed && !isSelected && 'Anchor__accessed',

                    // "Child accessed letter."
                    isAccessed && !isSelected && 'CaLEnter',

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
                     * If sequence dot keys are provided, or if it's a wiki anchor,
                     * anchor is not always visible.
                     */
                    !sequenceDotKeys &&
                    !isWikiTextAnchor &&
                        'Anchor__alwaysVisible',

                    className
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

                {children}

                {!omitAccessIcon && (
                    <AccessLetter
                        {...{
                            inTextAnchor: !isDotAnchor,
                            inButtonOrDotAnchor: isDotAnchor,
                            showIfAccessed: isAccessed && !isSelected,
                            accessKey: ENTER
                        }}
                    />
                )}
                <StopPropagationDispatcher {...{ getDispatch: this }} />
            </a>
        )
    }
}

export default Anchor
