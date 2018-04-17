// Container to show multiple dots in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { ALL_DOT_KEYS } from '../../constants/dots'

import Icon from '../Icon/Icon'

const dotBlockPropTypes = {

    // From parent.
    inAnnotationCard: PropTypes.bool,
    dotKeys: PropTypes.object.isRequired
},

DotSequence = ({

    inAnnotationCard,
    dotKeys

}) => (
    <span className={cx(
        'DotSequence',
        inAnnotationCard ?
            'DotSequence__inAnnotationCard' :
            'DotSequence__inTextAnchor'
    )}>
        {ALL_DOT_KEYS.map((dotKey, index) => {

            // Go through all dot keys in array to ensure correct order.
            return dotKeys[dotKey] && (
                <div
                    key={index}
                    className="dot"
                >
                    <Icon dotKey={dotKey} />
                </div>
            )
        })}
    </span>
)

DotSequence.propTypes = dotBlockPropTypes

export default DotSequence
