// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'
import { updateLoadStore } from 'flux/load/action'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import { getBookColumnIndex } from 'helpers/dataHelper'

class SongListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
        updateLoadStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.handleSongChangeIfNeeded(prevProps)
    }

    handleSongChangeIfNeeded(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            const shownBookColumnIndex = getBookColumnIndex(selectedSongIndex)

            this.props.updateAccessStore({
                accessedNavSongIndex: selectedSongIndex
            })
            this.props.updateLoadStore({ isScoreLoaded: false })
            this.props.updateSessionStore({
                interactivatedVerseIndex: -1,
                selectedWikiIndex: 0,
                shownBookColumnIndex
            })
            this.props.updateToggleStore({
                isVerseBarAbove: false,
                isVerseBarBelow: false
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
        updateAccessStore,
        updateLoadStore,
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SongListener)
