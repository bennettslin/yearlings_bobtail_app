// Child that knows rules to toggle dots slide. Not needed if just turning off.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class DotsSlideDispatcher extends Component {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getDispatch(this.dispatchDotsSlide)
    }

    dispatchDotsSlide = (
        // Just toggle unless parent specifies value.
        triedIsDotsSlideShown = !this.props.isDotsSlideShown
    ) => {
        // Turning off is always successful.
        const isDotsSlideShown = triedIsDotsSlideShown &&

            // ... also must not be in logue.
            !this.props.isSelectedLogue

        this.props.updateToggleStore({ isDotsSlideShown })

        // Try was successful.
        return isDotsSlideShown === triedIsDotsSlideShown
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isDotsSlideShown },
    songStore: { isSelectedLogue }
}) => ({
    isDotsSlideShown,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DotsSlideDispatcher)
