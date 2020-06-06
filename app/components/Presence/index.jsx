import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from './Svg'
import { getIsShownInSceneForPresence } from '../../api/scene/presences'
import { getSvgForPresence } from '../../api/svg'
import {
    mapSceneSongIndex,
    mapSceneSceneIndex
} from '../../redux/scene/selectors'
import './style'

const Presence = ({
    presenceType,
    actorKey,
    presenceKey,
    yIndex

}) => {
    const
        sceneSongIndex = useSelector(mapSceneSongIndex),
        sceneSceneIndex = useSelector(mapSceneSceneIndex),
        isShown = getIsShownInSceneForPresence({
            songIndex: sceneSongIndex,
            sceneIndex: sceneSceneIndex,
            yIndex,
            presenceType,
            actorKey,
            presenceKey
        })

    return (
        <CSSTransition
            unmountOnExit
            mountOnEnter
            {...{
                in: isShown,
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
                {getSvgForPresence({
                    actorKey,
                    presenceType,
                    presenceKey
                })}
            </PresenceSvg>
        </CSSTransition>
    )
}

Presence.propTypes = {
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    yIndex: PropTypes.number.isRequired
}

export default memo(Presence)
