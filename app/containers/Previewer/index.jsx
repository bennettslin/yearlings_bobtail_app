/**
 * Parent component that handles knowledge of UI state so that child components
 * deal with as little state change as possible.
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

class PreviewerContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAdminOn: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('PreviewerContainer')
    }

    render() {

        return (
            <div
                {...{
                    className: cx(
                        'PreviewerContainer',
                        'ovH'
                    )
                }}
            >
                Hi! This is the previewer.
            </div>
        )
    }
}

const mapStateToProps = ({
    adminStore: { isAdminOn }
}) => ({
    isAdminOn
})

export default connect(mapStateToProps)(PreviewerContainer)
