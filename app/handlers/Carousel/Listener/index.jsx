// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

class CarouselListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._closeCarouselIfNeeded(prevProps)
    }

    _closeCarouselIfNeeded(prevProps) {
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
    dotsStore: { dotsBitNumber }
}) => ({
    dotsBitNumber
})

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(CarouselListener)
