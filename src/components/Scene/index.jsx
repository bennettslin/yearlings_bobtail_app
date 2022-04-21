import React, { useEffect, Fragment } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Cubes from '../Cubes'
import Presences from '../Presences'
import { updateEntranceStore } from '../../redux/entrance/action'
import { mapIsSongChangeDone, mapIsSceneChangeDone } from '../../redux/entrance/selector'
import {
    mapIsAutumnSeason, mapIsDarkRoomDefaultScene, mapIsDarkRoomExtraScene, mapIsEveningTime, mapIsFutureSeason, mapIsMagicSeason, mapIsNightTime, mapIsPastSeason, mapIsWinterSeason,
} from '../../redux/scene/selector'
import Transition from 'react-transition-group/Transition'
import { CUBE_Y_INDICES } from '../../constants/cubeIndex'
import { CURTAINS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION } from '../../constants/entrance'

const Scene = () => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        isSceneChangeDone = useSelector(mapIsSceneChangeDone),
        isDarkRoomDefaultScene = useSelector(mapIsDarkRoomDefaultScene),
        isDarkRoomExtraScene = useSelector(mapIsDarkRoomExtraScene),
        isEveningTime = useSelector(mapIsEveningTime),
        isNightTime = useSelector(mapIsNightTime),
        isAutumnSeason = useSelector(mapIsAutumnSeason),
        isWinterSeason = useSelector(mapIsWinterSeason),
        isPastSeason = useSelector(mapIsPastSeason),
        isFutureSeason = useSelector(mapIsFutureSeason),
        isMagicSeason = useSelector(mapIsMagicSeason)

    const onExited = () => {
        logTransition('Scene did exit.')
        dispatch(updateEntranceStore({ didSceneExit: true }))
    }

    const onEntered = () => {
        logTransition('Scene did enter.')
    }

    useEffect(() => {
        logMount('Scene')
    }, [])

    return (
        <Transition
            {...{
                in: isSongChangeDone && isSceneChangeDone,
                timeout: CURTAINS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION,
                onExited,
                onEntered,
            }}
        >
            <div
                {...{
                    className: cx(
                        'Scene',
                        isDarkRoomDefaultScene && 'darkRoom',
                        isDarkRoomExtraScene && 'darkRoomExtra',
                        isEveningTime && 'eveningTime',
                        isNightTime && 'nightTime',
                        isAutumnSeason && 'autumnSeason',
                        isWinterSeason && 'winterSeason',
                        isPastSeason && 'pastSeason',
                        isFutureSeason && 'futureSeason',
                        isMagicSeason && 'magicSeason',
                        'abF',
                    ),
                }}
            >
                <Presences {...{ yIndex: -1 }} />
                {CUBE_Y_INDICES.map(yIndex => (
                    <Fragment {...{ key: yIndex }}>
                        <Cubes {...{ yIndex }} />
                        <Presences {...{ yIndex }} />
                    </Fragment>
                ))}
            </div>
        </Transition>
    )
}

export default Scene
