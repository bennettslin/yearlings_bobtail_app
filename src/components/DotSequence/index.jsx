// Container to show multiple dots in sequence.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import SequenceDot from './SequenceDot'
import {
    getDotKeysFromBit,
    getDotsBitHasKey,
} from '../../helpers/dot'
import { ORDERED_DOT_KEYS } from '../../constants/dots'
import './style'

const DotSequence = ({
    didMount,
    dotsBit,
    inAnnotationCard,
    inTextAnchor,
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
                // Go through all dots in array to ensure correct order.
                dotKeys[dotKey] && (
                    <SequenceDot {...other}
                        {...{
                            key: dotKey,
                            isShown: getDotsBitHasKey(dotsBit, dotKey),
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

export default getDidMountHoc(DotSequence)
