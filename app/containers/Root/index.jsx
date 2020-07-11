import React, { useEffect, forwardRef, useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PageContainer from '../Page'
import ResizeManager from '../../managers/Resize'
import Theatre from '../../components/Theatre'
import Menu from '../../components/Menu'
import MainPopups from '../../components/Popups/MainPopups'
import PopupOverlay from '../../components/Overlays/PopupOverlay'
import TouchOverlay from '../../components/Overlays/TouchOverlay'
import WrapperContainer from '../Wrapper'
import './style'

const RootContainer = forwardRef(({ children }, ref) => {
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
                {children}
                <PageContainer {...{ ref }} />
                <PopupOverlay />
                <MainPopups />
                <Menu />
                <TouchOverlay />
            </WrapperContainer>
        </div>
    )
})

RootContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default memo(RootContainer)
