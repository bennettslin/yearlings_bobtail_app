import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class CarouselDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhone: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchCarousel = this.dispatchCarousel
    }

    dispatchCarousel = (
        // If no argument passed, then just toggle by default.
        isCarouselShown = !this.props.isCarouselShown
    ) => {
        // We shouldn't be able to toggle the carousel under these conditions.
        if (
            this.props.isPhone ||
            !this.props.dotsBitNumber ||
            this.props.isSelectedLogue ||
            this.props.isHiddenCarouselNav
        ) {
            return false
        }

        this.props.updateToggleStore({ isCarouselShown })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore: { isPhone },
    dotsStore: { dotsBitNumber },
    responsiveStore: { isHiddenCarouselNav },
    songStore: { isSelectedLogue },
    toggleStore: { isCarouselShown }
}) => ({
    isPhone,
    dotsBitNumber,
    isHiddenCarouselNav,
    isSelectedLogue,
    isCarouselShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CarouselDispatcher)
