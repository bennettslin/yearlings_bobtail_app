import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import AccessLetter from '../../Access/Letter'
import { mapIsLyricLogue } from '../../../redux/lyric/selector'
import './style'

const AccessDirectionLetter = ({
    accessKey,
    alignTop,
    isNext

}) => {
    const isLyricLogue = useSelector(mapIsLyricLogue)

    return (
        <div
            {...{
                // Outer wrapper is necessary for proper transition.
                className: cx(
                    'AccessDirectionLetter',
                    alignTop && 'AccessDirectionLetter__alignTop',
                    `AccessDirectionLetter__${isNext ? 'next' : 'previous'}`
                )
            }}
        >
            <AccessLetter
                animateStandaloneOnKeyDown
                {...{
                    showIfAccessOn: !isLyricLogue,
                    accessKey
                }}
            />
        </div>
    )
}

AccessDirectionLetter.propTypes = {
    accessKey: PropTypes.string.isRequired,
    alignTop: PropTypes.bool,
    isNext: PropTypes.bool
}

export default memo(AccessDirectionLetter)
