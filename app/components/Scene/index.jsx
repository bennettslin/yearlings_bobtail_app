import React, { useEffect, Fragment as ___ } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsSceneChangeDone } from '../../redux/entrance/action'
import { mapIsSceneChangeDone } from '../../redux/entrance/selector'
import Transition from 'react-transition-group/Transition'
import Cubes from '../Cubes'
import Presences from '../Presences'
import { CUBE_Y_INDICES } from '../../constants/cubeIndex'

const Scene = () => {
    const
        dispatch = useDispatch(),
        isSceneChangeDone = useSelector(mapIsSceneChangeDone)

    const onExited = () => {
        logTransition('Scene did exit.')
        dispatch(updateIsSceneChangeDone(true))
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
                in: isSceneChangeDone,
                // Allow for CSS transition of 0.25s.
                timeout: 275,
                onExited,
                onEntered
            }}
        >
            <div
                className={cx(
                    'Scene',
                    'abF'
                )}
            >
                <Presences {...{ yIndex: -1 }} />
                {CUBE_Y_INDICES.map(yIndex => (
                    <___ {...{ key: yIndex }}>
                        <Cubes {...{ yIndex }} />
                        <Presences {...{ yIndex }} />
                    </___>
                ))}
            </div>
        </Transition>
    )
}

export default Scene
