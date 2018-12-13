import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnchorText from '../../../Anchor/AnchorText'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'

class AnnotationTitleText extends PureComponent {

    static defaultProps = {
        isShadow: false
    }

    static propTypes = {
        // From parent.
        isShadow: PropTypes.bool.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        sequenceDotKeys: PropTypes.object.isRequired,
        handleAnchorClick: PropTypes.func.isRequired
    }

    render() {
        const {
            isShadow,
            isAccessed,
            isSelected,
            text,
            sequenceDotKeys,
            handleAnchorClick
        } = this.props

        return isShadow ? (
            <div
                {...{
                    className: cx(
                        getPrefixedDotLetterClassNames(
                            sequenceDotKeys,

                            // "Child anchor letter."
                            'ChA'
                        )
                    )
                }}
            >
                {text}
            </div>
        ) : (
            <AnchorText
                {...{
                    isAccessed,
                    isSelected,
                    text,
                    sequenceDotKeys,
                    handleAnchorClick
                }}
            />
        )
    }
}

export default AnnotationTitleText
