import React, { useEffect, memo } from 'react'
import cx from 'classnames'
import AspectRatio from './AspectRatio'
import Scene from '../Scene'
import Sky from '../Scene/Sky'
import Wood from '../Scene/Wood'

const Stage = () => {
    useEffect(() => {
        logMount('Stage')
    }, [])

    return (
        <AspectRatio>
            <div className={cx(
                'Stage',
                'abF',
                'ovH'
            )}>
                <Sky />
                <Wood />
                <Scene />
            </div>
        </AspectRatio>
    )
}

export default memo(Stage)
