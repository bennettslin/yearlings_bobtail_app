import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updatePlayersStore } from '../../../../redux/players/action'

import { getSongsNotLoguesCount } from '../../../../album/api/songs'
import { setNewValueInBitNumber } from '../../../../helpers/bit'
import { getStoreKeyForPlayer } from '../../../../helpers/player'

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

    dispatchPlayerCanPlayThrough = songIndex => {
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

export default connect(
    mapStateToProps,
    { updatePlayersStore }
)(PlayerDispatcher)
