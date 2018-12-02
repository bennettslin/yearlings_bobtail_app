import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

class NavDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        showSingleNavBook: PropTypes.bool.isRequired,
        shownNavBookIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchNavBook = this.dispatchNavBook
    }

    dispatchNavBook = () => {
        const {
            isCarouselShown,
            showSingleNavBook
        } = this.props

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed.
         */
        if (!showSingleNavBook || isCarouselShown) {
            return false
        }

        const { shownNavBookIndex: prevNavBookIndex } = this.props,

            // Always just a simple toggle.
            shownNavBookIndex = (prevNavBookIndex + 1) % 2

        this.props.updateSessionStore({ shownNavBookIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isCarouselShown },
    responsiveStore: { showSingleNavBook },
    sessionStore: { shownNavBookIndex }
}) => ({
    showSingleNavBook,
    shownNavBookIndex,
    isCarouselShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavDispatcher)
