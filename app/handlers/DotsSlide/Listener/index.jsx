// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetInteractivatedDots } from 'flux/dotsSlide/action'

class DotsSlideListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        resetInteractivatedDots: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkDotsSlideClose(prevProps)
    }

    _checkDotsSlideClose(prevProps) {
        const
            { isDotsSlideShown } = this.props,
            { isDotsSlideShown: wasDotsSlideShown } = prevProps

        if (!isDotsSlideShown && wasDotsSlideShown) {
            this.props.resetInteractivatedDots()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isDotsSlideShown }
}) => ({
    isDotsSlideShown
})

export default connect(
    mapStateToProps,
    { resetInteractivatedDots }
)(DotsSlideListener)
