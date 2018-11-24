// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateLoadStore } from 'flux/load/action'
import { updateSessionStore } from 'flux/session/action'

class SongListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.handleSongChangeIfNeeded(prevProps)
    }

    handleSongChangeIfNeeded(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this.props.updateLoadStore({ isScoreLoaded: false })
            this.props.updateSessionStore({
                interactivatedVerseIndex: -1,
                selectedWikiIndex: 0
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateLoadStore,
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SongListener)
