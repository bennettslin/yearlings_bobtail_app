// Child that knows rules to toggle title. Not needed if just turning off.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class TitleDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isTitleShown: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchTitle = this.dispatchTitle
    }

    dispatchTitle = (
        // Just toggle unless parent specifies value.
        isTitleShown = !this.props.isTitleShown
    ) => {
        // Turning on or off is always successful.
        this.props.updateToggleStore({ isTitleShown })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isTitleShown }
}) => ({
    isTitleShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TitleDispatcher)
