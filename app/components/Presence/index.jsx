import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from './Svg'
import { mapIsPresenceShownInScene } from '../../redux/scene/selectors'
import './style'

const Presence = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey

}) => {
    const isShownInScene = useSelector(mapIsPresenceShownInScene({
        yIndex,
        presenceType,
        actorKey,
        presenceKey
    }))

    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            {...{
                in: isShownInScene,
                timeout: 200
            }}
        >
            <PresenceSvg
                {...{
                    presenceType,
                    actorKey,
                    presenceKey
                }}
            />
        </CSSTransition>
    )
}

Presence.propTypes = {
    yIndex: PropTypes.number.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired
}

export default memo(Presence)
