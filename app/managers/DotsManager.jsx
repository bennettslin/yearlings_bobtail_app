import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { accessDotIndex } from 'flux/access/action'
import { selectDotKey } from 'flux/storage/action'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { ALL_DOT_KEYS } from 'constants/dots'

class DotsManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedDotKeys: PropTypes.object.isRequired,

        accessDotIndex: PropTypes.func.isRequired,
        selectDotKey: PropTypes.func.isRequired,

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
        }) || !getPropsAreShallowEqual({
            props: this.props.selectedDotKeys,
            nextProps: nextProps.selectedDotKeys
        })
    }

    toggleDot(selectedDotIndex) {
        const selectedDotKey = ALL_DOT_KEYS[selectedDotIndex],
            isSelected = !this.props.selectedDotKeys[selectedDotKey]

        this.props.selectDotKey(selectedDotKey, isSelected)

        // Make most recently toggled dot the accessed dot.
        this.accessDot(selectedDotIndex)
    }

    accessDot(accessedDotIndex) {
        this.props.accessDotIndex(accessedDotIndex)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedDotKeys
}) => ({
    selectedDotKeys
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessDotIndex,
        selectDotKey
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DotsManager)
