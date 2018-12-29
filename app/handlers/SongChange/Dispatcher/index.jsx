// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderableStore } from 'flux/renderable/action'

class SongChangeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateRenderableStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    state = {
        songChangeTimeoutId: ''
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSongChangeUnrenderable:
                this.dispatchSongChangeUnrenderable
        })
    }

    dispatchSongChangeUnrenderable = (callback) => {
        this.props.updateRenderableStore({ isSongChangeRenderable: false })

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Wait for song selection to finish.
         */
        const songChangeTimeoutId = setTimeout(
            this._dispatchSongChangeRenderable.bind(this, callback), 500
        )

        this.setState({
            songChangeTimeoutId
        })
    }

    _dispatchSongChangeRenderable = (callback) => {
        this.props.updateRenderableStore({ isSongChangeRenderable: true })
        callback()
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateRenderableStore }
)(SongChangeDispatcher)
