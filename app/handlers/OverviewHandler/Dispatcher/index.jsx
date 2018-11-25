import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import { getNextOption } from '../../../helpers/options'

class OverviewDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchOverview = this.dispatchOverview
    }

    dispatchOverview = ({
        isToggled,
        overviewOption
    } = {}) => {

        const { isSelectedLogue } = this.props

        // Don't allow toggling if in logue.
        if (isSelectedLogue) {
            return false
        }

        const selectedOverviewOption = getNextOption({
            isToggled,
            prevOption: this.props.selectedOverviewOption,
            nextOption: overviewOption
        })

        this.props.updateSessionStore({ selectedOverviewOption })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { isSelectedLogue },
    sessionStore: { selectedOverviewOption }
}) => ({
    isSelectedLogue,
    selectedOverviewOption
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(OverviewDispatcher)
