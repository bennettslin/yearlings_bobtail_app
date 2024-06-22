import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Dot from '../../Dot'
import Underline from '../Underline'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import { getMapFirstSelectedDotKey } from '../../../redux/dots/selector'
import './style'

const AnchorDot = ({
    isAccessed,
    isSelected,
    dotsBit,

}) => {
    const selectedDotKey = useSelector(getMapFirstSelectedDotKey(dotsBit))

    return (
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
            {Boolean(selectedDotKey) && (
                <Dot
                    {...{
                        className: cx(
                            'AnchorDot',
                            isAccessed && !isSelected && 'DotAnchor__accessed',
                            !isSelected && 'AnchorDot__animatable',
                        ),
                        dotKey: selectedDotKey,
                        isAccessed,
                        isSelected,
                    }}
                />
            )}
        </>
    )
}

AnchorDot.propTypes = {
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    dotsBit: PropTypes.number.isRequired,
}

export default memo(AnchorDot)
