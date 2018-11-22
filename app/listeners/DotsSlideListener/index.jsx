// Singleton to listen for non-toggle events that require turning off dots.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/actions/toggle'

class DotsSlideListener extends Component {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.closeDotsSlideIfNeeded(prevProps)
    }

    closeDotsSlideIfNeeded(prevProps) {
        const
            { isSelectedLogue } = this.props,
            { isSelectedLogue: wasSelectedLogue } = prevProps

        if (isSelectedLogue && !wasSelectedLogue) {
            this.props.updateToggleStore({ isDotsSlideShown: false })
        }
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

export default connect(mapStateToProps, bindDispatchToProps)(DotsSlideListener)
