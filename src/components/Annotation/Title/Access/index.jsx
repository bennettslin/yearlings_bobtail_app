import React, { memo } from 'react'
import PropTypes from 'prop-types'
import AccessLetters from '../../../Access/Letters'
import {
    ARROW_UP,
    ARROW_DOWN,
} from '../../../../constants/access'
import './style'

const AnnotationAccess = ({
    isDot,
    showUpDown,

}) => showUpDown && (
    <AccessLetters
        {...{
            accessIconsName: 'annotationUpDown',
            ...isDot && { className: 'AccessLetters__isDot' },
            showIfAccessOn: showUpDown,
            accessKeys: [
                ARROW_UP,
                ARROW_DOWN,
            ],
        }}
    />
)

AnnotationAccess.propTypes = {
    isDot: PropTypes.bool.isRequired,
    showUpDown: PropTypes.bool.isRequired,
}

export default memo(AnnotationAccess)
