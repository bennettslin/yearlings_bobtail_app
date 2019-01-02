import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'
import { updateDotsStore } from 'flux/dots/action'
import { updateDotsSlideStore } from 'flux/dotsSlide/action'

import { setNewValueInBitNumber } from 'helpers/bit'
import { getDotKeysFromBitNumber } from 'helpers/dot'

import { ALL_DOT_KEYS } from 'constants/dots'

class DotSelectDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        dotsSlideBitNumber: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateDotsStore: PropTypes.func.isRequired,
        updateDotsSlideStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSelectDot: this.dispatchSelectDot,
            dispatchInteractivatedDot: this.dispatchInteractivatedDot
        })
    }

    dispatchSelectDot = (selectedDotIndex) => {

        // TODO: Make a general helper that toggles the bit number for both.
        const
            { dotsBitNumber: prevBitNumber } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(prevBitNumber),
            selectedDotKey = ALL_DOT_KEYS[selectedDotIndex],
            isSelected = !selectedDotKeys[selectedDotKey],

            dotsBitNumber = setNewValueInBitNumber({
                keysArray: ALL_DOT_KEYS,
                bitNumber: prevBitNumber,
                key: selectedDotKey,
                value: isSelected
            })

        this.props.updateDotsStore({
            dotsBitNumber,
            [selectedDotKey]: isSelected
        })

        // Make most recently toggled dot the accessed dot.
        this.props.updateAccessStore({ accessedDotIndex: selectedDotIndex })

        return true
    }

    dispatchInteractivatedDot = (interactivatedDotIndex) => {

        // TODO: Make a general helper that toggles the bit number for both.
        const
            { dotsSlideBitNumber: prevBitNumber } = this.props,
            interactivatedDotKeys = getDotKeysFromBitNumber(prevBitNumber),
            interactivatedDotKey = ALL_DOT_KEYS[interactivatedDotIndex],
            isInteractivated = !interactivatedDotKeys[interactivatedDotKey],

            dotsSlideBitNumber = setNewValueInBitNumber({
                keysArray: ALL_DOT_KEYS,
                bitNumber: prevBitNumber,
                key: interactivatedDotKey,
                value: isInteractivated
            })

        this.props.updateDotsSlideStore({
            dotsSlideBitNumber,
            [interactivatedDotKey]: isInteractivated
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    dotsStore: { dotsBitNumber },
    dotsSlideStore: { dotsSlideBitNumber }
}) => ({
    dotsBitNumber,
    dotsSlideBitNumber
})

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateDotsStore,
        updateDotsSlideStore
    }
)(DotSelectDispatcher)
