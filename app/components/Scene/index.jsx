import React, { useEffect, Fragment as ___ } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { mapCanSceneUpdate } from '../../redux/entrance/selectors'
import Transition from 'react-transition-group/Transition'
import Cubes from '../Cubes'
import PresencesConfig from '../Presences'
import { CUBE_Y_INDICES_WITH_NEG } from '../../constants/cubeIndex'

const Scene = () => {
    const
        dispatch = useDispatch(),
        canSceneUpdate = useSelector(mapCanSceneUpdate),
        onEntered = () => {
            logTransition('Scene did update.')
            dispatch(updateEntranceStore({ didSceneUpdate: true }))
        }

    useEffect(() => {
        logMount('Scene')
    }, [])

    return (
        <Transition
            {...{
                in: canSceneUpdate,
                timeout: 200,
                onEntered
            }}
        >
            <div
                className={cx(
                    'Scene',
                    'abF'
                )}
            >
                {CUBE_Y_INDICES_WITH_NEG.map(yIndex => {
                    const Presences = PresencesConfig[yIndex]
                    return (
                        <___ {...{ key: yIndex }}>
                            {yIndex > -1 && (
                                <Cubes {...{ yIndex }} />
                            )}
                            <Presences />
                        </___>
                    )
                })}
            </div>
        </Transition>
    )
}

export default Scene
