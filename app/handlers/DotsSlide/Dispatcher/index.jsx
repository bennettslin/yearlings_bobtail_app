// Child that knows rules to toggle dots slide. Not needed if just turning off.
import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { IS_SELECTED_LOGUE_SELECTOR } from '../../../redux/selected/selectors'

const mapStateToProps = state => {
    const {
            toggleStore: { isDotsSlideShown }
        } = state,
        isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state)

    return {
        isDotsSlideShown,
        isSelectedLogue
    }
}

class DotsSlideDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchDotsSlide: this.dispatchDotsSlide
        })
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

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(DotsSlideDispatcher)
