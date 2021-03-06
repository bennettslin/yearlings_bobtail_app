import React, { useEffect, Fragment } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import {
    mapIsSongChangeDone,
    mapIsSceneChangeDone,
} from '../../redux/entrance/selector'
import { mapIsDarkScene } from '../../redux/scene/selector'
import Transition from 'react-transition-group/Transition'
import Cubes from '../Cubes'
import Presences from '../Presences'
import { CUBE_Y_INDICES } from '../../constants/cubeIndex'
import { CURTAINS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION } from '../../constants/entrance'

const Scene = () => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        isSceneChangeDone = useSelector(mapIsSceneChangeDone),
        isDarkScene = useSelector(mapIsDarkScene)

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
                        isDarkScene && 'darken__parent',
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
