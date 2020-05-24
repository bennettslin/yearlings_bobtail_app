// Stage elements that change based on the scene.

import React, { useEffect } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { CAN_SCENE_ENTER_SELECTOR } from '../../redux/entrance/selectors'

import Transition from 'react-transition-group/Transition'
import AspectRatio from './AspectRatio'
import Scene from '../Scene'
import Sky from '../Scene/Sky'
import Wood from '../Scene/Wood'

const Stage = () => {
    const
        dispatch = useDispatch(),
        canSceneEnter = useSelector(CAN_SCENE_ENTER_SELECTOR),
        onEntered = () => {
            logTransition('Scene did enter from Stage.')
            dispatch(updateEntranceStore({ didSceneEnter: true }))
        }

    useEffect(() => {
        logMount('Stage')
    }, [])

    return (
        <AspectRatio>
            <Transition
                {...{
                    in: canSceneEnter,
                    timeout: 200,
                    onEntered
                }}
            >
                <div className={cx(
                    'Stage',
                    'abF',
                    'ovH'
                )}>
                    <Sky />
                    <Wood />
                    <Scene />
                </div>
            </Transition>
        </AspectRatio>
    )
}

export default Stage
