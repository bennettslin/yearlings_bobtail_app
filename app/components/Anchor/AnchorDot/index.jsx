import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Dot from '../../Dot'
import Underline from '../Underline'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import { ORDERED_DOT_KEYS } from '../../../constants/dots'
import './style'

const propTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    stanzaDotBit: PropTypes.number.isRequired
}

const AnchorDot = ({
    isAccessed,
    isSelected,
    stanzaDotBit

}) => {
    const stanzaDotKeys = getDotKeysFromBitNumber(stanzaDotBit)

    return (
        <>
            {IS_USER_AGENT_DESKTOP && (
                <Underline
                    isDotAnchor
                    {...{
                        isAccessed,
                        isSelected
                    }}
                />
            )}
            {ORDERED_DOT_KEYS.map(dotKey => stanzaDotKeys[dotKey] && (
                <Dot
                    {...{
                        key: dotKey,
                        className: cx(
                            'AnchorDot',

                            isAccessed && !isSelected && 'DotAnchor__accessed',
                            !isSelected && 'DotAnchor__selectable',

                            // "Child dot anchor letter."
                            `CdA${dotKey[0]}`
                        ),
                        dotKey,
                        isAccessed,
                        isSelected
                    }}
                />
            ))}
        </>
    )
}

AnchorDot.propTypes = propTypes

export default memo(AnchorDot)
