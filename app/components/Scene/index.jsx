import React, { useEffect, Fragment as ___ } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import Transition from 'react-transition-group/Transition'
import Cubes from '../Cubes'
import Presences from '../Presences'
import { CUBE_Y_INDICES } from '../../constants/cubeIndex'

const Scene = () => {
    const isSongChangeDone = useSelector(mapIsSongChangeDone)

    const onEntered = () => {
        logTransition('Scene did enter.')
    }

    useEffect(() => {
        logMount('Scene')
    }, [])

    return (
        <Transition
            {...{
                in: isSongChangeDone,
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
