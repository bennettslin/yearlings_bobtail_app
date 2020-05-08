// Singleton to listen for non-toggle events related to carousel closing.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    updateAccessStore,
    resetAccessedDot
} from '../../../redux/access/action'
import { resetActivatedDots } from '../../../redux/dotsSlide/action'

class DotsSlideListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        resetAccessedDot: PropTypes.func.isRequired,
        resetActivatedDots: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkDotsSlideShown(prevProps)
    }

    _checkDotsSlideShown = (prevProps = {}) => {
        const { isDotsSlideShown } = this.props,
            { isDotsSlideShown: wasDotsSlideShown } = prevProps

        if (
            // Dots slide is just now shown.
            isDotsSlideShown && !wasDotsSlideShown
        ) {
            this.props.updateAccessStore({ accessedDotIndex: 0 })

        } else if (
            // Dots slide is just now hidden.
            !isDotsSlideShown && wasDotsSlideShown
        ) {
            this.props.resetActivatedDots()
            this.props.resetAccessedDot()
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
    {
        updateAccessStore,
        resetAccessedDot,
        resetActivatedDots
    }
)(DotsSlideListener)
