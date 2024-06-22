/**
 * Component for a single dot in a sequence. Animates in and out based on
 * whether its dot key is selected.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Dot from '../../Dot'
import './style'

const SequenceDot = ({
    isShown,
    inAnnotationCard,
    inTextAnchor,
    ...other

}) => (
    <Dot
        isSequenceDot
        {...{
            className: cx(
                'SequenceDot',
                isShown && 'SequenceDot__shown',
                inTextAnchor && 'SequenceDot__textAnchor',
                inAnnotationCard && 'SequenceDot__annotationCard',
            ),
            ...other,
        }}
    />
)

SequenceDot.propTypes = {
    isShown: PropTypes.bool.isRequired,
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool,
}

export default memo(SequenceDot)
