/**
 * Parent component that handles knowledge of UI state so that child components
 * deal with as little state change as possible.
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DeviceWrapper from '../../wrappers/DeviceWrapper'
import PlayingWrapper from '../../wrappers/PlayingWrapper'
import ResponsiveWrapper from '../../wrappers/ResponsiveWrapper'
import ShownWrapper from '../../wrappers/ShownWrapper'
import TouchWrapper from '../../wrappers/TouchWrapper'
import TransitionWrapper from '../../wrappers/TransitionWrapper'
import LogicWrapper from '../../wrappers/LogicWrapper'
import WindowResizeExitListener from '../../listeners/WindowResize/Exit'

import Live from '../../components/Live'
import Admin from '../../components/Admin'

import { populateRefs } from 'helpers/ref'

class RootContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAdminOn: PropTypes.bool.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount(RootContainer.name)
    }

    _setRootElement = (node) => {
        return this.passRootContainer(node)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            isAdminOn,
            setLyricFocusElement
        } = this.props

        return (
            <div
                {...{
                    ref: this._setRootElement,
                    className: cx(
                        'RootContainer',
                        'ovH'
                    )
                }}
            >
                <WindowResizeExitListener {...{ getRefs: this._getRefs }} />
                <DeviceWrapper>
                    <PlayingWrapper>
                        <ResponsiveWrapper>
                            <ShownWrapper>
                                <TouchWrapper>
                                    <TransitionWrapper>
                                        <LogicWrapper>
                                            <Live
                                                {...{ setLyricFocusElement }}
                                            />
                                            {isAdminOn && (
                                                <Admin />
                                            )}
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

const mapStateToProps = ({
    adminStore: { isAdminOn }
}) => ({
    isAdminOn
})

export default connect(mapStateToProps)(RootContainer)
