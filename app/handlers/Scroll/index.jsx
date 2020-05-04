import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ScrollHandler extends PureComponent {

    static propTypes = {
        // Through Redux.

        // From parent.
        getRefs: PropTypes.func.isRequired,
        getLyricElement: PropTypes.func.isRequired
    }

    state = {
        scrollTimeoutId: ''
    }

    componentDidMount() {
        // Allow wheels to dispatch directly.
        this.props.getRefs({
            dispatchScrollTimeout: this.dispatchScrollTimeout
        })
    }

    dispatchScrollTimeout = (timeoutDuration = 100) => {
        console.error(this.props.getLyricElement().scrollTop)

        /**
         * It seems to help to both make the call immediately, and then set a
         * timeout for it. For now, I don't think there's any performance hit.
         */
        this._dispatchScroll()

        clearTimeout(this.state.scrollTimeoutId)

        const scrollTimeoutId = setTimeout(
            this._dispatchScroll,
            timeoutDuration
        )

        this.setState({
            scrollTimeoutId
        })
    }

    _dispatchScroll = () => {

    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    {}
)(ScrollHandler)
