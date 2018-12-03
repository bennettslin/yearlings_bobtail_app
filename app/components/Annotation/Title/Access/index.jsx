import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import AccessLetters from '../../../Access/Letters'

import {
    ARROW_UP,
    ARROW_DOWN
} from 'constants/access'

class AnnotationAccess extends PureComponent {

    static propTypes = {
        // From parent.
        showUpDown: PropTypes.bool.isRequired
    }

    render() {
        const { showUpDown } = this.props

        return showUpDown && (
            <AccessLetters
                inAnnotation
                {...{
                    accessIconsName: 'annotationUpDown',
                    showIfAccessed: showUpDown,
                    accessKeys: [
                        ARROW_UP,
                        ARROW_DOWN
                    ]
                }}
            />
        )
    }
}

export default AnnotationAccess
