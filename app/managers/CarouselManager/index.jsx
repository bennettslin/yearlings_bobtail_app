import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'
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
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        selectBookColumn: PropTypes.func.isRequired
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

        /**
         * New behaviour is that nav is expanded when carousel is hidden, and
         * vice versa.
         */
        this._selectCarouselToggle(isCarouselShown)
        this._selectNavExpand(isCarouselShown)

        return true
    }

    _selectCarouselToggle(isCarouselShown) {
        if (!isCarouselShown) {
            this.props.updateSessionStore({ carouselAnnotationIndex: 0 })
        }
    }

    _selectNavExpand(isCarouselShown) {
        // Reset accessed song index and book column upon nav expand.
        if (!isCarouselShown) {
            this.props.selectBookColumn({
                resetToDefault: true
            })
        }
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
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CarouselManager)
