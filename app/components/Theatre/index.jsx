import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
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
    const canTheatreEnter = useSelector(mapCanTheatreEnter)

    const onEntered = () => {
        logTransition('Theatre did enter.')
    }

    useEffect(() => {
        logMount('Theatre')
        removeLoadingIndicator()
    }, [])

    return (
        <CSSTransition
            appear
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
