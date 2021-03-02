import React, { memo, useEffect, useState } from 'react'
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
import { mapLyricSongIndex } from '../../redux/lyric/selector'

const Theatre = ({ didMount }) => {
    const
        isWindowResizeDone = useSelector(mapIsWindowResizeDone),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        [didInitialEnter, setDidInitialEnter] = useState(false)

    const onExit = () => {
        logTransition('Theatre did exit.')
    }

    const onEntered = () => {
        logTransition('Theatre did enter.')
        setDidInitialEnter(true)
    }

    useEffect(() => {
        logMount('Theatre')
    }, [])

    useEffect(() => {
        if (didInitialEnter) {
            logServe(
                'First meaningful paint.',
                {
                    action: 'paint',
                    label: lyricSongIndex,
                },
            )
        }
    }, [didInitialEnter])

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
                'ovH',
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
