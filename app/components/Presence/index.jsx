import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from './Svg'
import { getSvgForPresence } from '../../api/svg'
import './style'

const Presence = ({
    presenceType,
    actorKey,
    presenceKey,

    // TODO: Make this a selector.
    existenceValue

}) => {
    const presenceSvg = getSvgForPresence({
        actorKey,
        presenceType,
        presenceKey
    })

    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            {...{
                in: existenceValue,
                timeout: 200
            }}
        >
            <PresenceSvg
                {...{
                    presenceType,
                    actorKey,
                    presenceKey
                }}
            >
                {presenceSvg}
            </PresenceSvg>
        </CSSTransition>
    )
}

Presence.propTypes = {
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    existenceValue: PropTypes.bool.isRequired
}

export default memo(Presence)
