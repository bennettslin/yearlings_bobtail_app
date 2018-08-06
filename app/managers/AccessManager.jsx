import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectAccessIndex } from 'flux/actions/storage'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class AccessManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedAccessIndex: PropTypes.number.isRequired,

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

    toggleAccess(
        selectedAccessValue = (this.props.selectedAccessIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        if (typeof selectedAccessValue === 'boolean') {
            selectedAccessValue = selectedAccessValue ? 1 : 0
        }

        this.props.selectAccessIndex(selectedAccessValue)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedAccessIndex
}) => ({
    selectedAccessIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectAccessIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AccessManager)
