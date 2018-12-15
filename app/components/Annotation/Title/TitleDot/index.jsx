import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from '../../../Anchor/newIndex'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'

class AnnotationTitleDot extends PureComponent {

    static defaultProps = {
        isShadow: false
    }

    static propTypes = {
        // From parent.
        isShadow: PropTypes.bool.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        stanzaDotKeys: PropTypes.object.isRequired,
        handleAnchorClick: PropTypes.func.isRequired
    }

    render() {
        const {
            isShadow,
            isAccessed,
            isSelected,
            stanzaDotKeys,
            handleAnchorClick
        } = this.props

        return isShadow ? (
            <div
                {...{
                    className: cx(
                        getPrefixedDotLetterClassNames(
                            stanzaDotKeys,

                            // "Child dot anchor letter."
                            'CdA'
                        )
                    )
                }}
            />
        ) : (
            <Anchor
                {...{
                    isAccessed,
                    isSelected,
                    stanzaDotKeys,
                    handleAnchorClick
                }}
            />
        )
    }
}

export default AnnotationTitleDot
