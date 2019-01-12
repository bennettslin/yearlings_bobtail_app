import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import DotSequence from '../DotSequence'

import AnchorDot from './AnchorDot'
import AnchorText from './AnchorText'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'
import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    deviceStore: { isDesktopWidth }
}) => ({
    isDesktopWidth
})

class Anchor extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDesktopWidth: PropTypes.bool.isRequired,

        // From parent.
        className: PropTypes.string,
        isAnnotationTitle: PropTypes.bool,
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isWikiTextAnchor: PropTypes.bool,
        sequenceDotKeys: PropTypes.object,
        stanzaDotKeys: PropTypes.object,
        text: PropTypes.any,
        setLyricAnnotationElement: PropTypes.func,
        handleAnchorClick: PropTypes.func.isRequired
    }

    _handleClick = (e) => {
        logEvent('Anchor', e)

        if (!this.props.isDisabled) {

            if (this.props.handleAnchorClick(e)) {

                // Stop propagation only if anchor click is valid.
                this.dispatchStopPropagation(e)
            }
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {

        const {
                className,
                isDesktopWidth,
                isAnnotationTitle,
                isAccessed: isAccessedBeforeDesktop,
                isSelected,
                sequenceDotKeys,
                stanzaDotKeys,
                isWikiTextAnchor,
                text,
                setLyricAnnotationElement
            } = this.props,

            isDotAnchor = Boolean(stanzaDotKeys),

            // If in mobile, only show dot sequence if annotation title.
            showDotSequence = Boolean(sequenceDotKeys) && (
                isDesktopWidth || isAnnotationTitle
            ),

            /**
             * Don't show access if in mobile, even though access behaviour is
             * still technically possible.
             */
            isAccessed = isAccessedBeforeDesktop && isDesktopWidth

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
                            isDesktopWidth,
                            isAccessed,
                            isSelected,
                            stanzaDotKeys
                        }}
                    />
                )}

                {Boolean(text) && (
                    <AnchorText
                        {...{
                            isDesktopWidth,
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

export default connect(mapStateToProps)(Anchor)
