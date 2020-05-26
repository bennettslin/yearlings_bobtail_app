import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ResizeListener from '../../handlers/Resize/Listener'
import Theatre from '../../components/Theatre'
import Main from '../../components/Main'
import Menu from '../../components/Menu'
import LyricOverview from '../../components/LyricOverview'
import MainPopups from '../../components/Popups/MainPopups'
import PopupOverlay from '../../components/Overlays/PopupOverlay'
import TouchOverlay from '../../components/Overlays/TouchOverlay'
import WrapperContainer from '../Wrapper'
import './style'

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
            <WrapperContainer>
                <Theatre />
                <Main />
                <LyricOverview {...{ setLyricFocusElement }} />
                <PopupOverlay />
                <MainPopups />
                <Menu />
                <TouchOverlay />
            </WrapperContainer>
        </div>
    )
}

RootContainer.propTypes = {
    setLyricFocusElement: PropTypes.func.isRequired
}

export default RootContainer
