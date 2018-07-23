import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

const propTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    isDotAnchor: PropTypes.bool
},

AnchorUnderline = ({

    isAccessed,
    isSelected,
    isDotAnchor

}) => (
    <Svg
        className={cx(
            'AnchorUnderline',

            { 'AnchorUnderline__underDot': isDotAnchor },

            isAccessed && !isSelected && 'AnchorUnderline__accessed',

            isSelected ?
                'AnchorUnderline__selected' :
                'AnchorUnderline__selectable'
        )}
    />
)

AnchorUnderline.propTypes = propTypes

export default AnchorUnderline
