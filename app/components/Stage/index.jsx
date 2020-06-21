// Stage elements that change based on the scene.

import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapIsSceneChangeDone } from '../../redux/entrance/selector'
import Transition from 'react-transition-group/Transition'
import AspectRatio from './AspectRatio'
import Scene from '../Scene'
import Sky from '../Scene/Sky'
import Wood from '../Scene/Wood'

const Stage = () => {
    const isSceneChangeDone = useSelector(mapIsSceneChangeDone)

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
                    in: isSceneChangeDone,
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
