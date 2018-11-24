import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateToggleStore } from 'flux/toggle/action'

import { getIsPhone } from 'helpers/responsiveHelper'

class CarouselManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    selectCarouselNav = (
        isCarouselShown = !this.props.isCarouselShown
    ) => {
        // If no argument passed, then just toggle between on and off.

        // We shouldn't be able to toggle carousel under these conditions.
        if (
            this.props.isSelectedLogue ||
            getIsPhone(this.props.deviceIndex) ||
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
    deviceStore: { deviceIndex },
    responsiveStore: { isHiddenCarouselNav },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    },
    toggleStore: { isCarouselShown }
}) => ({
    deviceIndex,
    isHiddenCarouselNav,
    selectedSongIndex,
    isSelectedLogue,
    isCarouselShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CarouselManager)
