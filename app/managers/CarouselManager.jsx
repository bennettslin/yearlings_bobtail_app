import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setCarouselAnnotationIndex } from '../redux/actions/session'
import { selectCarouselNavIndex } from '../redux/actions/storage'

import { getSongIsLogue } from '../helpers/dataHelper'
import { getIsPhone } from '../helpers/responsiveHelper'

class CarouselManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        setCarouselAnnotationIndex: PropTypes.func.isRequired,
        selectCarouselNavIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        accessNavSong: PropTypes.func.isRequired,
        selectBookColumn: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    selectCarouselNav(
        selectedCarouselNavValue = (this.props.selectedCarouselNavIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        // We shouldn't be able to toggle carousel under these conditions.
        if (getSongIsLogue(this.props.selectedSongIndex) ||
            getIsPhone(this.props.deviceIndex) ||
            this.props.isHiddenCarouselNav) {

            return false
        }

        if (typeof selectedCarouselNavValue === 'boolean') {
            selectedCarouselNavValue = selectedCarouselNavValue ? 1 : 0
        }

        this.props.selectCarouselNavIndex(selectedCarouselNavValue)

        /**
         * New behaviour is that nav is expanded when carousel is hidden, and
         * vice versa.
         */
        this._selectCarouselToggle(selectedCarouselNavValue)
        this._selectNavExpand(selectedCarouselNavValue)

        return true
    }

    _selectCarouselToggle(selectedCarouselNavIndex) {
        if (!selectedCarouselNavIndex) {
            this.props.setCarouselAnnotationIndex(0)
        }
    }

    _selectNavExpand(selectedCarouselNavIndex) {
        // Reset accessed song index and book column upon nav expand.
        if (!selectedCarouselNavIndex) {
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
    deviceIndex,
    isHiddenCarouselNav,
    selectedCarouselNavIndex,
    selectedSongIndex
}) => ({
    deviceIndex,
    isHiddenCarouselNav,
    selectedCarouselNavIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCarouselAnnotationIndex,
        selectCarouselNavIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CarouselManager)
