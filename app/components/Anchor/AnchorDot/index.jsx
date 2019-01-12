import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Dot from '../../Dot'
import Underline from '../Underline'

import { ALL_DOT_KEYS } from 'constants/dots'

const propTypes = {
    // From parent.
    isDesktopProcessor: PropTypes.bool.isRequired,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    stanzaDotKeys: PropTypes.object.isRequired
}

const AnchorDot = memo(({
    isDesktopProcessor,
    isAccessed,
    isSelected,
    stanzaDotKeys

}) => (
    <___>
        {isDesktopProcessor && (
            <Underline
                isDotAnchor
                {...{
                    isAccessed,
                    isSelected
                }}
            />
        )}
        {ALL_DOT_KEYS.map(dotKey => stanzaDotKeys[dotKey] && (
            <Dot
                key={dotKey}
                {...{
                    className: cx(
                        'AnchorDot',

                        isAccessed && !isSelected && 'DotAnchor__accessed',
                        !isSelected  && 'DotAnchor__selectable',

                        // "Child dot anchor letter."
                        `CdA${dotKey[0]}`
                    ),
                    dotKey,
                    isAccessed,
                    isSelected
                }}
            />
        ))}
    </___>
))

AnchorDot.propTypes = propTypes

export default AnchorDot
