/**
 * Parent component that handles knowledge of UI state so that child components
 * deal with as little state change as possible.
 */

import React, { PureComponent } from 'react'
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

class RootContainer extends PureComponent {

    static propTypes = {
        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('RootContainer')
        this.rootElement = React.createRef()
    }

    getRootElement = () => (
        this.rootElement.current
    )

    render() {
        const { setLyricFocusElement } = this.props

        return (
            <div
                {...{
                    ref: this._setRootElement,
                    className: cx(
                        'RootContainer',
                        'ovH',
                        'PtSansNarrow'
                    )
                }}
            >
                <ResizeListener {...{ getRootElement: this.getRootElement }} />
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
}

export default RootContainer
