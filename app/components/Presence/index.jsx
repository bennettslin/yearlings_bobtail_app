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
// import { getTimeoutEnterForPresence, getTimeoutExitForPresence } from './helper'

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
            appear
            unmountOnExit
            mountOnEnter
            {...{
                in: isPresenceShownInScene,
                timeout: {
                    // Timeout allows presences to transition before unmount.
                    exit: 5000,

                    // No timeout since all delays are handled in stylesheets.
                    enter: 0
                },
                classNames: {
                    enterDone: 'PresenceContainer__shown'
                }
            }}
        >
            {/*
              * This parent container exists solely to take the CSS transition
              * class names. This prevents conflict when the child tries to add
              * its own class names after svgs have loaded.
              */}
            <div {...{ className: 'PresenceContainer' }}>
                <PresenceSvg
                    {...{
                        presenceType,
                        actorKey,
                        presenceKey,
                        zIndex: presenceZIndex
                    }}
                />
            </div>
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
