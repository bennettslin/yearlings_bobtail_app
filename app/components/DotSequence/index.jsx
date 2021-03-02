// Container to show multiple dots in sequence.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../DidMountHoc'
import SequenceDot from './SequenceDot'
import { getDotKeysFromBit } from '../../helpers/dot'
import { ORDERED_DOT_KEYS } from '../../constants/dots'
import './style'

const DotSequence = ({
    didMount,
    inAnnotationCard,
    inTextAnchor,
    dotsBit,
    ...other

}) => {
    const dotKeys = getDotKeysFromBit(dotsBit)

    return didMount && (
        <div
            {...{
                className: cx(
                    'DotSequence',
                    !inAnnotationCard && [
                        'DotSequence__absolute',
                        'gradientMask__dotSequence',
                    ],
                    inTextAnchor && 'DotSequence__inTextAnchor',
                ),
            }}
        >
            {ORDERED_DOT_KEYS.map(dotKey => (
                // Go through all dot keys in array to ensure correct order.
                dotKeys[dotKey] && (
                    <SequenceDot {...other}
                        {...{
                            key: dotKey,
                            dotKey,
                            inTextAnchor,
                            inAnnotationCard,
                        }}
                    />
                )
            ))}
        </div>
    )
}

DotSequence.propTypes = {
    didMount: PropTypes.bool.isRequired,
    dotsBit: PropTypes.number.isRequired,
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool,
}

export default memo(getDidMountHoc(DotSequence))
