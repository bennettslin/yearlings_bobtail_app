import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import getDidMountHoc from '../DidMountHoc'
import { mapIsWindowResizeDone } from '../../redux/entrance/selector'
import Stage from '../Stage'
import Curtains from '../Stage/Curtains'
import DramaMasks from '../Stage/DramaMasks'
import Proscenium from '../Stage/Proscenium'
import Wall from './Wall'
import Ceiling from './Ceiling'
import Floor from './Floor'
import './style'

const Theatre = ({ didMount }) => {
    const isWindowResizeDone = useSelector(mapIsWindowResizeDone)

    const onExit = () => {
        logTransition('Theatre did exit.')
    }

    const onEntered = () => {
        logTransition('Theatre did enter.')
    }

    useEffect(() => {
        logMount('Theatre')
    }, [])

    return didMount && (
        <CSSTransition
            appear
            {...{
                in: isWindowResizeDone,
                timeout: 275,
                classNames: { enterDone: 'Theatre__visible' },
                onExit,
                onEntered,
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

Theatre.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(Theatre))
