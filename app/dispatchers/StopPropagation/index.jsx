// Child that knows rules to stop propagation.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateFocusStore } from '../../redux/focus/action'
import { updateAccessStore } from '../../redux/access/action'

class StopPropagationDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateFocusStore: PropTypes.func.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchStopPropagation: this.dispatchStopPropagation
        })
    }

    dispatchStopPropagation = (e) => {
        if (e) {
            const { type } = e

            // Turn access off if not from a keyboard event.
            if (type === 'click' || type === 'mousedown') {
                this.props.updateAccessStore({ isAccessOn: false })
            }

            if (e.stopPropagation) {
                e.stopPropagation()

                this.props.updateFocusStore({ queuedFocus: true })
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    {
        updateFocusStore,
        updateAccessStore
    }
)(StopPropagationDispatcher)
