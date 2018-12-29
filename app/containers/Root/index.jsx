/**
 * Parent component that handles knowledge of UI state so that child components
 * deal with as little state change as possible.
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DeviceWrapper from './DeviceWrapper'
import RemainderWrapper from './RemainderWrapper'
import LogicWrapper from './LogicWrapper'
import Live from '../../components/Live'
import Admin from '../../components/Admin'

class RootContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAdminOn: PropTypes.bool.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired,
        setScoreFocusElement: PropTypes.func.isRequired,
        setWikiFocusElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('RootContainer')
    }

    render() {
        const {
            isAdminOn,
            setLyricFocusElement,
            setScoreFocusElement,
            setWikiFocusElement
        } = this.props

        return (
            <div
                className={cx(
                    'RootContainer'
                )}
            >
                <DeviceWrapper>
                    <RemainderWrapper>
                        <LogicWrapper>
                            <Live
                                {...{
                                    setLyricFocusElement,
                                    setScoreFocusElement,
                                    setWikiFocusElement
                                }}
                            />
                            {isAdminOn && (
                                <Admin />
                            )}
                        </LogicWrapper>
                    </RemainderWrapper>
                </DeviceWrapper>
            </div>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isAdminOn }
}) => ({
    isAdminOn
})

export default connect(mapStateToProps)(RootContainer)
