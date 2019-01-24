// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'
import { updateToggleStore } from 'flux/toggle/action'

class CarouselNavListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        updateToggleStore: PropTypes.func.isRequired
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
            this.props.updateAccessStore({ accessedNavSongIndex: -1 })
        }
    }

    _checkDotsSelected(prevProps) {
        const
            { dotsBitNumber } = this.props,
            { dotsBitNumber: prevDotsBitNumber } = prevProps

        // If there are no selected dots, there can be no carousel annotations.
        if (!dotsBitNumber && prevDotsBitNumber) {
            this.props.updateToggleStore({ isCarouselShown: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    mountStore: { canCarouselMount },
    dotsStore: { dotsBitNumber }
}) => ({
    canCarouselMount,
    dotsBitNumber
})

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateToggleStore
    }
)(CarouselNavListener)
