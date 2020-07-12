import React, { useEffect, forwardRef, useRef, memo } from 'react'
import cx from 'classnames'
import ResizeManager from '../../managers/Resize'
import Theatre from '../../components/Theatre'
import Carousel from '../../components/Carousel'
import Main from '../../components/Main'
import LyricOverview from '../../components/LyricOverview'
import Menu from '../../components/Menu'
import MainPopups from '../../components/Popups/MainPopups'
import PopupOverlay from '../../components/Overlays/PopupOverlay'
import TouchOverlay from '../../components/Overlays/TouchOverlay'
import WrapperContainer from '../Wrapper'
import './style'

const RootContainer = forwardRef((props, ref) => {
    const rootContainerElement = useRef()

    const getRootContainerElement = () => rootContainerElement.current

    useEffect(() => {
        logMount('RootContainer')
    }, [])

    return (
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
