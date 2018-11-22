import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setCarouselAnnotationIndex } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getIsPhone } from 'helpers/responsiveHelper'

class CarouselManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        setCarouselAnnotationIndex: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        accessNavSong: PropTypes.func.isRequired,
        selectBookColumn: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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

        this.props.updateToggleStore({
            isCarouselShown
        })

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
            this.props.setCarouselAnnotationIndex(0)
        }
    }

    _selectNavExpand(isCarouselShown) {
        // Reset accessed song index and book column upon nav expand.
        if (!isCarouselShown) {
            this.props.accessNavSong(this.props.selectedSongIndex)

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
        setCarouselAnnotationIndex,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CarouselManager)
