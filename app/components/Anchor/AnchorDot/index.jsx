import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Dot from '../../Dot'
import Underline from '../Underline'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import { getMapFirstAnchorDot } from '../../../redux/dots/selectors'
import './style'

const AnchorDot = ({
    isAccessed,
    isSelected,
    stanzaDotBit

}) => {
    const firstAnchorDot = useSelector(getMapFirstAnchorDot(stanzaDotBit))

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
            {Boolean(firstAnchorDot) && (
                <Dot
                    {...{
                        className: cx(
                            'AnchorDot',
                            isAccessed && !isSelected && 'DotAnchor__accessed',
                            !isSelected && 'DotAnchor__selectable'
                        ),
                        dotKey: firstAnchorDot,
                        isAccessed,
                        isSelected
                    }}
                />
            )}
        </>
    )
}

AnchorDot.propTypes = {
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    stanzaDotBit: PropTypes.number.isRequired
}

export default memo(AnchorDot)
