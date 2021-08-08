/**
 * Component for a single dot in a sequence. Animates in and out based on
 * whether its dot key is selected.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Dot from '../../Dot'
import { getMapIsSelectedDot } from '../../../redux/dots/selector'
import './style'

const SequenceDot = ({
    dotKey,
    inAnnotationCard,
    inTextAnchor,
    ...other

}) => {
    const isDotShown = useSelector(getMapIsSelectedDot(dotKey))

    return (
        <Dot
            isSequenceDot
            {...{
                className: cx(
                    'SequenceDot',
                    isDotShown && 'SequenceDot__shown',
                    inTextAnchor && 'SequenceDot__textAnchor',
                    inAnnotationCard && 'SequenceDot__annotationCard',
                ),
                dotKey,
                ...other,
            }}
        />
    )
}

SequenceDot.propTypes = {
    dotKey: PropTypes.string.isRequired,
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool,
}

export default memo(SequenceDot)
