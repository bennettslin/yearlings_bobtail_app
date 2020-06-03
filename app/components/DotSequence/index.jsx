// Container to show multiple dots in sequence.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { ORDERED_DOT_KEYS } from '../../constants/dots'
import SequenceDot from './SequenceDot'
import './style'
import { getDotKeysFromBitNumber } from '../../helpers/dot'

const propTypes = {
    dotBit: PropTypes.number.isRequired,
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool
}

const DotSequence = ({
    inAnnotationCard,
    inTextAnchor,
    dotBit,
    ...other

}) => {
    const dotKeys = getDotKeysFromBitNumber(dotBit)
    return (

        <div className={cx(
            'DotSequence',
            !inAnnotationCard && 'gradientMask__dotSequence',
            inTextAnchor && 'DotSequence__inTextAnchor'
        )}>
            {ORDERED_DOT_KEYS.map(dotKey => (
                // Go through all dot keys in array to ensure correct order.
                dotKeys[dotKey] && (
                    <SequenceDot {...other}
                        {...{
                            key: dotKey,
                            dotKey,
                            inTextAnchor,
                            inAnnotationCard
                        }}
                    />
                )
            ))}
        </div>
    )
}

DotSequence.propTypes = propTypes

export default memo(DotSequence)
