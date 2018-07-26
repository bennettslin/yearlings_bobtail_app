import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AccessLetters from '../AccessLetter/AccessLetters'

import {
    ARROW_UP,
    ARROW_DOWN
} from '../../constants/access'

class LyricAccess extends Component {

    static propTypes = {

        // From parent.
        isSelected: PropTypes.bool.isRequired,
        accessibleAnnotationAnchorsLength: PropTypes.number
    }

    render() {

        const {
                isSelected,
                accessibleAnnotationAnchorsLength
            } = this.props,

            showUpDown = isSelected && accessibleAnnotationAnchorsLength > 1

        return (
            <AccessLetters
                accessIconsName="annotationUpDown"
                inAnnotation
                showIfAccessed={showUpDown}
                accessKeys={[
                    ARROW_UP,
                    ARROW_DOWN
                ]}
            />
        )
    }
}

export default LyricAccess
