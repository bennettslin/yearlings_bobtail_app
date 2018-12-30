// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'

class SongChangeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateChangeStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    state = {
        songChangeTimeoutId: ''
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSongChanging:
                this.dispatchSongChanging
        })
    }

    dispatchSongChanging = (callback) => {
        this.props.updateChangeStore({ isSongBeingSelected: true })

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Wait for song selection to finish.
         */
        const songChangeTimeoutId = setTimeout(
            this._dispatchSongChanged.bind(this, callback), 500
        )

        this.setState({
            songChangeTimeoutId
        })
    }

    _dispatchSongChanged = (callback) => {
        this.props.updateChangeStore({ isSongBeingSelected: false })
        callback()
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateChangeStore }
)(SongChangeDispatcher)
