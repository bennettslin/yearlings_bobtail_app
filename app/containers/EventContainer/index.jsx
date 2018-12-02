
// TODO: Eventually turn this file into just a scroll listener.
// Component that handles all user events.

import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FocusContainer from '../../containers/FocusContainer'


class EventContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
    }

    render() {

        const {
            togglePlay
        } = this.props

        return (
            <FocusContainer
                {...{
                    eventHandlers: {
                        togglePlay
                    }
                }}
            />
        )
    }
}

const mapStateToProps = null

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
