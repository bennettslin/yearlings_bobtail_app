import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayersStore } from 'flux/players/action'

import { setNewValueInBitNumber } from 'helpers/bit'
import { getSongsNotLoguesCount } from 'helpers/data'
import { getStoreKeyForPlayer } from 'helpers/player'

class PlayerDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        playersBitNumber: PropTypes.number.isRequired,
        updatePlayersStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchPlayerCanPlayThrough: this.dispatchPlayerCanPlayThrough
        })
    }

    dispatchPlayerCanPlayThrough = (songIndex) => {
        const { playersBitNumber } = this.props,

            // Convert to bit number before setting in Redux.
            newBitNumber = setNewValueInBitNumber({
                keysCount: getSongsNotLoguesCount(),
                bitNumber: playersBitNumber,
                key: songIndex,
                value: true
            }),

            storeKeyForPlayer = getStoreKeyForPlayer(songIndex)

        this.props.updatePlayersStore({
            playersBitNumber: newBitNumber,
            [storeKeyForPlayer]: true
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
