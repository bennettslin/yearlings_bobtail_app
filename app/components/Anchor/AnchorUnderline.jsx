import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

const propTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    isDotAnchor: PropTypes.bool,
    isWikiAnchor: PropTypes.bool
},

AnchorUnderline = ({

    isAccessed,
    isSelected,
    isDotAnchor,
    isWikiAnchor

}) => (
    <div
        className={cx(
            'AnchorUnderline',
            'gradientMask__anchorUnderline',

            isDotAnchor && 'AnchorUnderline__isDot',
            isWikiAnchor && 'AnchorUnderline__isWiki',

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
