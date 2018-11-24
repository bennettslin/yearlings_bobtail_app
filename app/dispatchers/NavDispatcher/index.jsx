import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

class NavDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        showSingleBookColumn: PropTypes.bool.isRequired,
        shownBookColumnIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchNavBook = this.dispatchNavBook
    }

    dispatchNavBook = () => {
        const {
            isCarouselShown,
            showSingleBookColumn
        } = this.props

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed.
         */
        if (!showSingleBookColumn || isCarouselShown) {
            return false
        }

        const { shownBookColumnIndex: prevBookColumnIndex } = this.props,

            // Always just a simple toggle.
            shownBookColumnIndex = (prevBookColumnIndex + 1) % 2

        this.props.updateSessionStore({ shownBookColumnIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isCarouselShown },
    responsiveStore: { showSingleBookColumn },
    sessionStore: { shownBookColumnIndex }
}) => ({
    showSingleBookColumn,
    shownBookColumnIndex,
    isCarouselShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavDispatcher)
