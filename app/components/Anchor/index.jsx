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
    deviceStore: { isDesktop }
}) => ({
    isDesktop
})

class Anchor extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDesktop: PropTypes.bool.isRequired,

        // From parent.
        isRichInMobile: PropTypes.bool,
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isWikiTextAnchor: PropTypes.bool,
        sequenceDotKeys: PropTypes.object,
        stanzaDotKeys: PropTypes.object,
        text: PropTypes.any,
        handleAnchorClick: PropTypes.func.isRequired
    }

    _handleClick = (e) => {
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
                isDesktop,
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
                            isDesktop,
                            isAccessed,
                            isSelected,
                            stanzaDotKeys
                        }}
                    />
                )}

                {Boolean(text) && (
                    <AnchorText
                        {...{
                            isDesktop,
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
