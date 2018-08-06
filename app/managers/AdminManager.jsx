import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectAdminIndex } from 'flux/actions/storage'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class AdminManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedAdminIndex: PropTypes.number.isRequired,
        selectAdminIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    toggleAdmin(
        selectedAdminIndex = (this.props.selectedAdminIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        this.props.selectAdminIndex(selectedAdminIndex)
        return selectedAdminIndex
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedAdminIndex
}) => ({
    selectedAdminIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectAdminIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AdminManager)
