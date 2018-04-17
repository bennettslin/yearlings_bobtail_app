// Container to show multiple dots in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { ALL_DOT_KEYS } from '../../constants/dots'

import Dot from './Dot'

const dotBlockPropTypes = {

    // From parent.
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool,
    dotKeys: PropTypes.object.isRequired
},

DotSequence = ({

    inAnnotationCard,
    inTextAnchor,
    dotKeys

}) => (
    <span className={cx(
        'DotSequence',
        inTextAnchor && 'DotSequence__inTextAnchor'
    )}>
        {ALL_DOT_KEYS.map(dotKey => {

            // Go through all dot keys in array to ensure correct order.
            return dotKeys[dotKey] && (
                <Dot
                    key={dotKey}
                    inTextAnchor={inTextAnchor}
                    inAnnotationCardSequence={inAnnotationCard}
                    dotKey={dotKey}
                />
            )
        })}
    </span>
)

DotSequence.propTypes = dotBlockPropTypes

export default DotSequence
