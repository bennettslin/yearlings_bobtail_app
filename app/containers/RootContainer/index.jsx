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
import Live from '../../components/Live'
import Admin from '../../components/Admin'
import AdminToggle from '../../components/admin/AdminToggle'

class RootContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isAdminOn: PropTypes.bool.isRequired,

        // From parent.
        eventHandlers: PropTypes.object.isRequired
    }

    render() {
        const {
            appMounted,
            isAdminOn,
            eventHandlers
        } = this.props

        return appMounted && (
            <div
                className={cx(
                    'RootContainer'
                )}
            >
                <DeviceWrapper>
                    <RemainderWrapper>
                        <Live {...eventHandlers} />
                        <AdminToggle />
                        {isAdminOn && (
                            <Admin {...eventHandlers} />
                        )}
                    </RemainderWrapper>
                </DeviceWrapper>
            </div>
        )
    }
}

const mapStateToProps = ({
    loadStore: { appMounted },
    toggleStore: { isAdminOn }
}) => ({
    appMounted,
    isAdminOn
})

export default connect(mapStateToProps)(RootContainer)
