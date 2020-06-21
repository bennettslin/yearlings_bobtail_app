// Stage elements that change based on the scene.

import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapCanSceneEnter } from '../../redux/entrance/selector'
import Transition from 'react-transition-group/Transition'
import AspectRatio from './AspectRatio'
import Scene from '../Scene'
import Sky from '../Scene/Sky'
import Wood from '../Scene/Wood'

const Stage = () => {
    const canSceneEnter = useSelector(mapCanSceneEnter)

    const onEntered = () => {
        logTransition('Stage did enter.')
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
