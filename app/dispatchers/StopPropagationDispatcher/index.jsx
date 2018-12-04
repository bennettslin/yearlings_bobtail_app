// Child that knows rules to stop propagation.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEventStore } from 'flux/event/action'
import { updateToggleStore } from 'flux/toggle/action'

class StopPropagationDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateEventStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchStopPropagation = this.dispatchStopPropagation
    }

    dispatchStopPropagation = (e) => {
        if (e) {
            const { type } = e

            // Turn access off if not from a keyboard event.
            if (type === 'click' || type === 'mousedown') {
                this.props.updateToggleStore({ isAccessOn: false })
            }

            if (e.stopPropagation) {
                e.stopPropagation()

                this.props.updateEventStore({ queuedFocus: true })
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = null

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateEventStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(StopPropagationDispatcher)
