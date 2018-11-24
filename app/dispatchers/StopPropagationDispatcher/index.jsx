// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class StopPropagationDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchStopPropagation = this.dispatchStopPropagation
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
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(StopPropagationDispatcher)
