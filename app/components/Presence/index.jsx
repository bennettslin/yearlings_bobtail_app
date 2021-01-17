import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from './Svg'
import { getMapIsPresenceShown } from '../../redux/presence/selector'
import './style'

const Presence = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey,

}) => {
    const isPresenceShown = useSelector(getMapIsPresenceShown({
        yIndex,
        presenceType,
        actorKey,
        presenceKey,
    }))

    return (
        <CSSTransition
            appear
            unmountOnExit
            mountOnEnter
            {...{
                in: isPresenceShown,
                timeout: {
                    // Timeout allows presences to transition before unmount.
                    exit: 5000,

                    // No timeout since all delays are handled in stylesheets.
                    enter: 0,
                },
                classNames: {
                    enterDone: 'PresenceContainer__shown',
                },
            }}
        >
            <PresenceSvg
                {...{
                    presenceType,
                    actorKey,
                    presenceKey,
                }}
            />
        </CSSTransition>
    )
}

Presence.propTypes = {
    yIndex: PropTypes.number.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
}

export default memo(Presence)
