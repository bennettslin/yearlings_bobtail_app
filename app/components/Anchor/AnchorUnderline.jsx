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
    <div
        className={cx(
            'AnchorUnderline',

            { 'AnchorUnderline__underDot': isDotAnchor },

            isAccessed && !isSelected && 'AnchorUnderline__accessed',
        )}
    >
        <Svg
            className={cx(
                'AnchorUnderline__bar',
                'AnchorUnderline__bar__default',
                isSelected &&
                    'AnchorUnderline__bar__selected',
                'absoluteFullContainer'
            )}
        />
        <Svg
            className={cx(
                'AnchorUnderline__bar',
                'AnchorUnderline__bar__accessed',
                isSelected &&
                    'AnchorUnderline__bar__selected',
                'absoluteFullContainer'
            )}
        />
    </div>
)

AnchorUnderline.propTypes = propTypes

export default AnchorUnderline
