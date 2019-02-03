import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Anchor from '../../../Anchor'

class AnnotationTitleText extends PureComponent {

    static propTypes = {
        // From parent.
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        sequenceDotKeys: PropTypes.object.isRequired,
        handleAnchorClick: PropTypes.func.isRequired
    }

    render() {
        const {
            isAccessed,
            isSelected,
            text,
            sequenceDotKeys,
            handleAnchorClick
        } = this.props

        return (
            <Anchor
                isAnnotationTitle
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
