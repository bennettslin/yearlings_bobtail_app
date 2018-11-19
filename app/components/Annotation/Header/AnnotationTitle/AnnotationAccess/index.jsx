import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AccessLetters from 'components/Access/Letters'

import {
    ARROW_UP,
    ARROW_DOWN
} from 'constants/access'

class AnnotationAccess extends Component {

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

        return showUpDown && (
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

export default AnnotationAccess
