import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSequence from '../DotSequence'
import AnchorDot from './AnchorDot'
import AnchorText from './AnchorText'

import { getPrefixedDotLetterClassNames } from '../../helpers/dot'

import { IS_USER_AGENT_DESKTOP } from '../../constants/device'

class Anchor extends PureComponent {

    static propTypes = {
        // From parent.
        className: PropTypes.string,
        href: PropTypes.string,
        isAnnotationTitle: PropTypes.bool,
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isWikiTextAnchor: PropTypes.bool,
        sequenceDotKeys: PropTypes.object,
        stanzaDotKeys: PropTypes.object,
        text: PropTypes.any,
        textConfig: PropTypes.any,
        analyticsIdentifier: PropTypes.string,
        setLyricAnnotationElement: PropTypes.func,
        handleAnchorClick: PropTypes.func.isRequired
    }

    _handleClick = (e) => {
        const {
            analyticsIdentifier,
            isDisabled
        } = this.props

        if (!isDisabled) {
            logEvent({
                e,
                componentName: 'Anchor',
                analyticsIdentifier
            })

            this.props.handleAnchorClick(e)
        }
    }

    render() {

        const {
                className,
                href,
                isAnnotationTitle,
                isAccessed: isAccessedBeforeDesktop,
                isSelected,
                sequenceDotKeys,
                stanzaDotKeys,
                isWikiTextAnchor,
                text,
                textConfig,
                setLyricAnnotationElement
            } = this.props,

            isDotAnchor = Boolean(stanzaDotKeys),

            // If in mobile, only show dot sequence if annotation title.
            showDotSequence = Boolean(sequenceDotKeys) && (
                IS_USER_AGENT_DESKTOP || isAnnotationTitle
            ),

            /**
             * Don't show access if in mobile, even though access behaviour is
             * still technically possible.
             */
            isAccessed = isAccessedBeforeDesktop && IS_USER_AGENT_DESKTOP

        return (
            <a
                {...{
                    ref: setLyricAnnotationElement,
                    className: cx(
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
                            'Anchor__alwaysVisible',

                        className
                    ),
                    ...href && {
                        href,
                        target: '_blank'
                    },
                    onClick: this._handleClick
                }}
            >
                {showDotSequence && (
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
                            text,
                            textConfig
                        }}
                    />
                )}
            </a>
        )
    }
}

export default Anchor
