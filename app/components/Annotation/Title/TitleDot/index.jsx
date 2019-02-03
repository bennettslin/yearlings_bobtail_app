import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Anchor from '../../../Anchor'

class AnnotationTitleDot extends PureComponent {

    static propTypes = {
        // From parent.
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        stanzaDotKeys: PropTypes.object.isRequired,
        handleAnchorClick: PropTypes.func.isRequired
    }

    render() {
        const {
            isAccessed,
            isSelected,
            stanzaDotKeys,
            handleAnchorClick
        } = this.props

        return (
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
