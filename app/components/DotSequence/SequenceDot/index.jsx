/**
 * Component for a single dot in a sequence. Animates in and out based on
 * whether its dot key is selected.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Dot from '../../Dot'
import './style'

const propTypes = {
    dotKey: PropTypes.string.isRequired,
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool
}

const SequenceDot = ({
    dotKey,
    inAnnotationCard,
    inTextAnchor,

    ...other
}) => (
    <Dot
        isSequenceDot
        {...{
            className: cx(
                'SequenceDot',

                // "Child dot sequence letter."
                `ChQ${dotKey[0]}`,

                inTextAnchor && 'SequenceDot__textAnchor',
                inAnnotationCard && 'SequenceDot__annotationCard'
            ),
            dotKey,
            ...other
        }}
    />
)

SequenceDot.propTypes = propTypes

export default memo(SequenceDot)
