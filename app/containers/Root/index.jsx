// eslint-disable-next-line object-curly-newline
import React, { useEffect, forwardRef, useRef } from 'react'
import cx from 'classnames'
import ResizeListener from '../../handlers/Resize/Listener'
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
        getRootContainerElement = () => rootContainerElement.current

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
            <ResizeListener {...{ getRootContainerElement }} />
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

export default RootContainer
