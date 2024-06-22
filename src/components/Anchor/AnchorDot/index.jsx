import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Dot from '../../Dot'
import Underline from '../Underline'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import './style'

const AnchorDot = ({
    isAccessed,
    isSelected,
    firstDotKey,

}) => (
    <>
        {IS_USER_AGENT_DESKTOP && (
            <Underline
                isDotAnchor
                {...{
                    isAccessed,
                    isSelected,
                }}
            />
        )}
        {firstDotKey && (
            <Dot
                {...{
                    className: cx(
                        'AnchorDot',
                        isAccessed && !isSelected && 'DotAnchor__accessed',
                        !isSelected && 'AnchorDot__animatable',
                    ),
                    dotKey: firstDotKey,
                    isAccessed,
                    isSelected,
                }}
            />
        )}
    </>
)

AnchorDot.propTypes = {
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    firstDotKey: PropTypes.string.isRequired,
}

export default memo(AnchorDot)
