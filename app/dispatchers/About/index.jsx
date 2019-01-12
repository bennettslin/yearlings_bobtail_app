// Child that knows rules to toggle title. Not needed if just turning off.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

class AboutDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAboutShown: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchAbout: this.dispatchAbout
        })
    }

    dispatchAbout = (
        // Just toggle unless parent specifies value.
        isAboutShown = !this.props.isAboutShown
    ) => {
        // Turning on or off is always successful.
        this.props.updateToggleStore({ isAboutShown })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAboutShown }
}) => ({
    isAboutShown
})

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(AboutDispatcher)
