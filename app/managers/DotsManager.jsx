import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { accessDotIndex } from 'flux/access/action'
import { updateDotsStore } from 'flux/dots/action'

import { ALL_DOT_KEYS } from 'constants/dots'

class DotsManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,

        accessDotIndex: PropTypes.func.isRequired,
        updateDotsStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    toggleDot(selectedDotIndex) {
        const selectedDotKey = ALL_DOT_KEYS[selectedDotIndex],
            isSelected = !this.props.selectedDotKeys[selectedDotKey]

        this.props.updateDotsStore({
            [selectedDotKey]: isSelected
        })

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
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    }
}) => ({
    dotsBitNumber,
    selectedDotKeys
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessDotIndex,
        updateDotsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DotsManager)
