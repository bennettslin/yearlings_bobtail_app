import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'
import { updateDotsStore } from 'flux/dots/action'

import { getDotKeysFromBitNumber } from 'helpers/dot'

import { ALL_DOT_KEYS } from 'constants/dots'

class DotSelectDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateDotsStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSelectDot: this.dispatchSelectDot
        })
    }

    dispatchSelectDot = (selectedDotIndex) => {
        const { dotsBitNumber } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),
            selectedDotKey = ALL_DOT_KEYS[selectedDotIndex],
            isSelected = !selectedDotKeys[selectedDotKey]

        this.props.updateDotsStore({
            [selectedDotKey]: isSelected
        })

        // Make most recently toggled dot the accessed dot.
        this.props.updateAccessStore({ accessedDotIndex: selectedDotIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    dotsStore: { dotsBitNumber }
}) => ({
    dotsBitNumber
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updateDotsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DotSelectDispatcher)
