import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import AccessLetters from '../../../Access/Letters'

import {
    ARROW_UP,
    ARROW_DOWN
} from '../../../../constants/access'

class AnnotationAccess extends PureComponent {

    static propTypes = {
        // From parent.
        isDot: PropTypes.bool.isRequired,
        showUpDown: PropTypes.bool.isRequired
    }

    render() {
        const {
            isDot,
            showUpDown
        } = this.props

        return showUpDown && (
            <AccessLetters
                {...{
                    accessIconsName: 'annotationUpDown',
                    ...isDot && { className: 'AccessLetters__isDot' },
                    showIfAccessOn: showUpDown,
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
