// Container to show multiple dots in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import { ALL_DOT_KEYS } from '../../constants/dots'

import Icon from '../Icon/icon'

const dotBlockPropTypes = {
    // From parent.
    dotKeys: PropTypes.object.isRequired
},

DotBlock = ({

    dotKeys

}) => (
    <span className="dots-block">
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

DotBlock.propTypes = dotBlockPropTypes

export default DotBlock
