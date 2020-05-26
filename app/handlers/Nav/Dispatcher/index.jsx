import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SHOW_SINGLE_NAV_BOOK_SELECTOR } from '../../../redux/responsive/selectors'
import { updateSessionStore } from '../../../redux/session/action'

class NavDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isNavShown: PropTypes.bool.isRequired,
        showSingleNavBook: PropTypes.bool.isRequired,
        shownNavBookIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({ dispatchNavBook: this.dispatchNavBook })
    }

    dispatchNavBook = () => {
        const {
            isNavShown,
            showSingleNavBook
        } = this.props

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed.
         */
        if (!showSingleNavBook || !isNavShown) {
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

const mapStateToProps = state => {
    const {
            toggleStore: { isNavShown },
            sessionStore: { shownNavBookIndex }
        } = state,
        showSingleNavBook = SHOW_SINGLE_NAV_BOOK_SELECTOR(state)

    return {
        showSingleNavBook,
        shownNavBookIndex,
        isNavShown
    }
}

export default connect(
    mapStateToProps,
    { updateSessionStore }
)(NavDispatcher)
