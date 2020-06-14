// Section to show the stage illustrations.
import React, { useEffect } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { mapCanTheatreEnter } from '../../redux/entrance/selector'
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
        dispatch = useDispatch(),
        canTheatreEnter = useSelector(mapCanTheatreEnter)

    const onEntered = () => {
        logTransition('Theatre did enter.')
        dispatch(updateEntranceStore({ didTheatreEnter: true }))
    }

    useEffect(() => {
        logMount('Theatre')
        removeLoadingIndicator()
    }, [])

    return (
        <CSSTransition
            {...{
                in: canTheatreEnter,
                timeout: 200,
                classNames: { enterDone: 'Theatre__visible' },
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

export default Theatre
