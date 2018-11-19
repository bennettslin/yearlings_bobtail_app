// Container to show multiple dots in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { ALL_DOT_KEYS } from 'constants/dots'

import SequenceDot from './SequenceDot'

const dotBlockPropTypes = {

    // From parent.
    dotKeys: PropTypes.object.isRequired,
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool
},

DotSequence = ({

    inAnnotationCard,
    inTextAnchor,
    dotKeys,

...other }) => (

    <div className={cx(
        'DotSequence',
        !inAnnotationCard && 'gradientMask__dotSequence',
        inTextAnchor && 'DotSequence__inTextAnchor'
    )}>
        {ALL_DOT_KEYS.map(dotKey => {

            // Go through all dot keys in array to ensure correct order.
            return dotKeys[dotKey] && (

                <SequenceDot {...other}
                    key={dotKey}
                    {...{
                        dotKey,
                        inTextAnchor,
                        inAnnotationCard
                    }}
                />
            )
        })}
    </div>
)

DotSequence.propTypes = dotBlockPropTypes

export default DotSequence
