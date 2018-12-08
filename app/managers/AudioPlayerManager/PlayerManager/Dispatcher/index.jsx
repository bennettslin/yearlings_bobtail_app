import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayersStore } from 'flux/players/action'

import { setNewValueInBitNumber } from 'helpers/bit'
import { getSongsNotLoguesCount } from 'helpers/data'

class PlayerDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        playersBitNumber: PropTypes.number.isRequired,
        updatePlayersStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchPlayerCanPlayThrough = this.dispatchPlayerCanPlayThrough
    }

    dispatchPlayerCanPlayThrough = (songIndex) => {
        const { playersBitNumber } = this.props,

            // Convert to bit number before setting in Redux.
            newBitNumber = setNewValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: playersBitNumber,
                key: songIndex,
                value: true
            })

        this.props.updatePlayersStore({
            playersBitNumber: newBitNumber,
            [songIndex]: true
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    playersStore: { playersBitNumber }
}) => ({
    playersBitNumber
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePlayersStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerDispatcher)
