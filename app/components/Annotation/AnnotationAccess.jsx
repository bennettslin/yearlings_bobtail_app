import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AccessIcons from '../AccessIcon/AccessIcons'

import {
    NAVIGATION_UP_KEY,
    NAVIGATION_DOWN_KEY
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
            <AccessIcons
                accessIconsName="annotationUpDown"
                inAnnotation
                accessKeys={[
                    {
                        accessKey: NAVIGATION_UP_KEY,
                        showIfAccessed: showUpDown
                    },
                    {
                        accessKey: NAVIGATION_DOWN_KEY,
                        showIfAccessed: showUpDown
                    }
                ]}
            />
        )
    }
}

export default LyricAccess
