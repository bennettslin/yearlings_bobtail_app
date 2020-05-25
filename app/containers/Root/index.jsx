import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DeviceWrapper from '../../wrappers/DeviceWrapper'
import PlayingWrapper from '../../wrappers/PlayingWrapper'
import ResponsiveWrapper from '../../wrappers/ResponsiveWrapper'
import ShownWrapper from '../../wrappers/ShownWrapper'
import TouchWrapper from '../../wrappers/TouchWrapper'
import TransitionWrapper from '../../wrappers/TransitionWrapper'
import LogicWrapper from '../../wrappers/LogicWrapper'
import ResizeListener from '../../handlers/Resize/Listener'

import Theatre from '../../components/Theatre'
import Main from '../../components/Main'
import Menu from '../../components/Menu'
import LyricOverview from '../../components/LyricOverview'
import MainPopups from '../../components/Popups/MainPopups'
import PopupOverlay from '../../components/Overlays/PopupOverlay'
import TouchOverlay from '../../components/Overlays/TouchOverlay'

const RootContainer = ({ setLyricFocusElement }) => {
    const
        rootElement = useRef(),
        getRootElement = () => rootElement.current

    useEffect(() => {
        logMount('RootContainer')
    }, [])

    return (
        <div
            {...{
                ref: rootElement,
                className: cx(
                    'RootContainer',
                    'ovH',
                    'PtSansNarrow'
                )
            }}
        >
            <ResizeListener {...{ getRootElement }} />
            <DeviceWrapper>
                <PlayingWrapper>
                    <ResponsiveWrapper>
                        <ShownWrapper>
                            <TouchWrapper>
                                <TransitionWrapper>
                                    <LogicWrapper>
                                        <Theatre />
                                        <Main />
                                        <LyricOverview
                                            {...{ setLyricFocusElement }}
                                        />
                                        <PopupOverlay />
                                        <MainPopups />
                                        <Menu />
                                        <TouchOverlay />
                                    </LogicWrapper>
                                </TransitionWrapper>
                            </TouchWrapper>
                        </ShownWrapper>
                    </ResponsiveWrapper>
                </PlayingWrapper>
            </DeviceWrapper>
        </div>
    )
}

RootContainer.propTypes = {
    setLyricFocusElement: PropTypes.func.isRequired
}

export default RootContainer
