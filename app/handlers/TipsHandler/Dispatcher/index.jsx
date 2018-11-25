import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import { getNextOption } from '../../../helpers/options'

class TipsDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchTips = this.dispatchTips
    }

    dispatchTips = ({
        isToggled,
        tipsOption
    } = {}) => {

        const { isSelectedLogue } = this.props

        // Don't allow toggling if in logue.
        if (isSelectedLogue) {
            return false
        }

        const selectedTipsOption = getNextOption({
            isToggled,
            prevOption: this.props.selectedTipsOption,
            nextOption: tipsOption
        })

        this.props.updateSessionStore({ selectedTipsOption })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { isSelectedLogue },
    sessionStore: { selectedTipsOption }
}) => ({
    isSelectedLogue,
    selectedTipsOption
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TipsDispatcher)
