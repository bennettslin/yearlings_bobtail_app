import React, { useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from './Svg'
import {
    getMapIsPresenceShownInScene,
    getMapPresenceFloorZIndex
} from '../../redux/presence/selector'
import './style'

const Presence = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey

}) => {
    const
        isPresenceShownInScene = useSelector(getMapIsPresenceShownInScene({
            yIndex,
            presenceType,
            actorKey,
            presenceKey
        })),
        floorZIndex = useSelector(getMapPresenceFloorZIndex({
            presenceType,
            actorKey,
            presenceKey
        })),
        [zIndex, setZIndex] = useState(floorZIndex),

        /**
         * Instantly pass Redux zIndex to presence, rather than wait one
         * lifecycle for state to catch up. This avoids presence starting
         * without zIndex as it transitions in.
         */
        presenceZIndex = isPresenceShownInScene ? floorZIndex : zIndex

    useEffect(() => {
        /**
         * Only change zIndex to another number, never back to null. This
         * avoids presence losing zIndex as it transitions out.
         */
        if (isPresenceShownInScene) {
            setZIndex(floorZIndex)
        }
    }, [floorZIndex])

    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            {...{
                in: isPresenceShownInScene,
                timeout: 50
            }}
        >
            <PresenceSvg
                {...{
                    presenceType,
                    actorKey,
                    presenceKey,
                    zIndex: presenceZIndex
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
