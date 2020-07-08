// eslint-disable-next-line object-curly-newline
import React, { useEffect, forwardRef, useRef, useState, memo } from 'react'
import cx from 'classnames'
import ResizeManager from '../../managers/Resize'
import Carousel from '../../components/Carousel'
import Theatre from '../../components/Theatre'
import Main from '../../components/Main'
import Menu from '../../components/Menu'
import LyricOverview from '../../components/LyricOverview'
import MainPopups from '../../components/Popups/MainPopups'
import PopupOverlay from '../../components/Overlays/PopupOverlay'
import TouchOverlay from '../../components/Overlays/TouchOverlay'
import WrapperContainer from '../Wrapper'
import './style'

const RootContainer = forwardRef((props, ref) => {
    const
        rootContainerElement = useRef(),
        [didComponentMount, setDidComponentMount] = useState(false)

    const getRootContainerElement = () => rootContainerElement.current

    useEffect(() => {
        logMount('RootContainer')
        setDidComponentMount(true)
    }, [])

    // TODO: This should not happen at the root container level.
    return didComponentMount && (
        <div
            {...{
                ref: rootContainerElement,
                className: cx(
                    'RootContainer',
                    'ovH',
                    'PtSansNarrow'
                )
            }}
        >
            <ResizeManager {...{ getRootContainerElement }} />
            <WrapperContainer>
                <Theatre />
                <Carousel />
                <Main />
                <LyricOverview {...{ ref }} />
                <PopupOverlay />
                <MainPopups />
                <Menu />
                <TouchOverlay />
            </WrapperContainer>
        </div>
    )
})

export default memo(RootContainer)
