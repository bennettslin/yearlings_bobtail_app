import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateDotsStore } from '../../redux/dots/action'
import { updateDotsSlideStore } from '../../redux/dotsSlide/action'

import { setNewValueInBitNumber } from '../../helpers/bit'
import { getDotKeysFromBitNumber } from '../../helpers/dot'

import { ORDERED_DOT_KEYS } from '../../constants/dots'

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
            dispatchActivatedDot: this.dispatchActivatedDot
        })
    }

    dispatchSelectDot = (selectedDotIndex) => {

        // TODO: Make a general helper that toggles the bit number for both.
        const
            { dotsBitNumber: prevBitNumber } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(prevBitNumber),
            selectedDotKey = ORDERED_DOT_KEYS[selectedDotIndex],
            isSelected = !selectedDotKeys[selectedDotKey],

            dotsBitNumber = setNewValueInBitNumber({
                keysArray: ORDERED_DOT_KEYS,
                bitNumber: prevBitNumber,
                key: selectedDotKey,
                value: isSelected
            })

        this.props.updateDotsStore({
            dotsBitNumber,

            // This is just updated for dev clarity.
            [selectedDotKey]: isSelected
        })

        // Make most recently toggled dot the accessed dot.
        this.props.updateAccessStore({ accessedDotIndex: selectedDotIndex })

        return true
    }

    dispatchActivatedDot = (activatedDotIndex) => {

        // TODO: Make a general helper that toggles the bit number for both.
        const
            { dotsSlideBitNumber: prevBitNumber } = this.props,
            activatedDotKeys = getDotKeysFromBitNumber(prevBitNumber),
            activatedDotKey = ORDERED_DOT_KEYS[activatedDotIndex],
            isActivated = !activatedDotKeys[activatedDotKey],

            dotsSlideBitNumber = setNewValueInBitNumber({
                keysArray: ORDERED_DOT_KEYS,
                bitNumber: prevBitNumber,
                key: activatedDotKey,
                value: isActivated
            })

        this.props.updateDotsSlideStore({
            dotsSlideBitNumber,
            [activatedDotKey]: isActivated
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    dotsStore: { dotsBitNumber },
    dotsSlideStore: { dotsSlideBitNumber }
}) => {
    return {
        dotsBitNumber,
        dotsSlideBitNumber
    }
}

export default connect(
    mapStateToProps,
    {
        updateAccessStore,
        updateDotsStore,
        updateDotsSlideStore
    }
)(DotSelectDispatcher)
