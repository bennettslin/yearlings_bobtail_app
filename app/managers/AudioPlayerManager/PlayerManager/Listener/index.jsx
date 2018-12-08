// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetPlayerQueue } from 'flux/player/action'

class PlayerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedPlayingFromLogue: PropTypes.bool.isRequired,
        queuedPlayerSongIndex: PropTypes.number.isRequired,
        queuedPlayerVerseIndex: PropTypes.number.isRequired,
        resetPlayerQueue: PropTypes.func.isRequired,

        // From parent.
        handleSelectPlayer: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkPlayerChange(prevProps)
    }

    _checkPlayerChange(prevProps) {
        const {
                queuedPlayingFromLogue,
                queuedPlayerSongIndex,
                queuedPlayerVerseIndex
            } = this.props,
            {
                queuedPlayerSongIndex: prevSongIndex,
                queuedPlayerVerseIndex: prevVerseIndex
            } = prevProps

        if (
            (
                queuedPlayerSongIndex > -1 &&
                queuedPlayerSongIndex !== prevSongIndex
            ) || (
                queuedPlayerVerseIndex > -1 &&
                queuedPlayerVerseIndex !== prevVerseIndex
            )
        ) {
            this.props.handleSelectPlayer({
                isPlayingFromLogue: queuedPlayingFromLogue,
                nextSongIndex: queuedPlayerSongIndex,
                nextVerseIndex: queuedPlayerVerseIndex
            })

            this.props.resetPlayerQueue()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    playerStore: {
        queuedPlayingFromLogue,
        queuedPlayerSongIndex,
        queuedPlayerVerseIndex
    }
}) => ({
    queuedPlayingFromLogue,
    queuedPlayerSongIndex,
    queuedPlayerVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        resetPlayerQueue
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(PlayerListener)
