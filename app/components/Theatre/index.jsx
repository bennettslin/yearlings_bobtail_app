import React, { memo, useEffect, useState } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapIsWindowResizeDone } from '../../redux/entrance/selector'
import CSSTransition from 'react-transition-group/CSSTransition'
import Stage from '../Stage'
import Curtains from '../Stage/Curtains'
import DramaMasks from '../Stage/DramaMasks'
import Proscenium from '../Stage/Proscenium'
import Wall from './Wall'
import Ceiling from './Ceiling'
import Floor from './Floor'
import { removeLoadingIndicator } from '../../utils/browser'
import './style'

const Theatre = () => {
    const
        isWindowResizeDone = useSelector(mapIsWindowResizeDone),
        [didMount, setDidMount] = useState(false)

    const onExit = () => {
        logTransition('Theatre did exit.')
    }

    const onEntered = () => {
        logTransition('Theatre did enter.')
    }

    useEffect(() => {
        logMount('Theatre')
        removeLoadingIndicator()
        setDidMount(true)
    }, [])

    return didMount && (
        <CSSTransition
            appear
            {...{
                in: isWindowResizeDone,
                timeout: 275,
                classNames: { enterDone: 'Theatre__visible' },
                onExit,
                onEntered
            }}
        >
            <div className={cx(
                'Theatre',
                'abF',
                'ovH'
            )}>
                <Stage />
                <Curtains />
                <Proscenium />
                <DramaMasks />
                <Wall />
                <Wall isRight />
                <Ceiling />
                <Floor />
            </div>
        </CSSTransition>
    )
}

export default memo(Theatre)
