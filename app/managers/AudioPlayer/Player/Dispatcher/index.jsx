import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updatePlayersStore } from '../../../../redux/players/action'
import {
    getStoreKeyForPlayer,
    getBitFromPlayerCanPlayThrough
} from '../../../../helpers/player'
import { PLAYERS_BIT_NUMBER_SELECTOR } from '../../../../redux/players/selectors'

const mapStateToProps = state => {
    const playersBitNumber = PLAYERS_BIT_NUMBER_SELECTOR(state)

    return {
        playersBitNumber
    }
}

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
        const { playersBitNumber } = this.props

        this.props.updatePlayersStore({
            playersBitNumber: getBitFromPlayerCanPlayThrough({
                bitNumber: playersBitNumber,
                key: songIndex
            }),

            // Added to store just for dev clarity.
            [getStoreKeyForPlayer(songIndex)]: true
        })
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updatePlayersStore }
)(PlayerDispatcher)
