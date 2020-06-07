// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetAccessedNav } from '../../../redux/access/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { mapSelectedDotsBit } from '../../../redux/dots/selectors'
import { mapCanCarouselMount } from '../../../redux/mount/selectors'

const mapStateToProps = state => {
    const
        selectedDotsBit = mapSelectedDotsBit(state),
        canCarouselMount = mapCanCarouselMount(state)

    return {
        canCarouselMount,
        selectedDotsBit
    }
}

class CarouselNavListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
        selectedDotsBit: PropTypes.number.isRequired,
        updateToggleStore: PropTypes.func.isRequired,
        resetAccessedNav: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkCarouselMount(prevProps)
        this._checkDotsSelected(prevProps)
    }

    _checkCarouselMount(prevProps) {
        const
            { canCarouselMount } = this.props,
            { canCarouselMount: couldCarouselMount } = prevProps

        if (!canCarouselMount && couldCarouselMount) {
            this.props.updateToggleStore({
                isCarouselShown: false,
                isNavShown: false
            })
            this.props.resetAccessedNav()
        }
    }

    _checkDotsSelected(prevProps) {
        const
            { selectedDotsBit } = this.props,
            { selectedDotsBit: prevDotsBit } = prevProps

        // If there are no selected dots, there can be no carousel annotations.
        if (!selectedDotsBit && prevDotsBit) {
            this.props.updateToggleStore({ isCarouselShown: false })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        resetAccessedNav,
        updateToggleStore
    }
)(CarouselNavListener)
