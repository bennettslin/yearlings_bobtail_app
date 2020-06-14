// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateActivatedStore } from '../../../redux/activated/action'
import {
    updateShownNavBookIndex
} from '../../../redux/session/action'
import { resetVerseBars } from '../../../redux/verseBars/action'
import { getBookForSongIndex } from '../../../api/album/songs'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'

const mapStateToProps = state => {
    const selectedSongIndex = mapSelectedSongIndex(state)

    return {
        selectedSongIndex
    }
}

class SongListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateShownNavBookIndex: PropTypes.func.isRequired,
        updateActivatedStore: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired
    }

    componentDidUpdacate(prevProps) {
        this._checkSongSelect(prevProps)
    }

    _checkSongSelect(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this.props.updateShownNavBookIndex(getBookForSongIndex(
                selectedSongIndex
            ))
            this.props.updateActivatedStore()
            this.props.resetVerseBars()
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateShownNavBookIndex,
        updateActivatedStore,
        resetVerseBars
    }
)(SongListener)
