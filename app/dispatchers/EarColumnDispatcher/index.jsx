// Singleton to watch for non-toggle events that require collapsing lyric.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSongStore } from 'flux/song/action'
import { updateToggleStore } from 'flux/toggle/action'

class EarColumnDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        updateSongStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchEarColumn = this.dispatchEarColumn
    }

    dispatchEarColumn = ({
        earColumnIndex = (this.props.earColumnIndex + 1) % 2
    } = {}) => {
        const {
            isEarShown,
            isSelectedLogue
        } = this.props

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has ear toggle, or if in a logue.
         */
        if (!isEarShown || isSelectedLogue) {
            return false
        }

        this.props.updateSongStore({ earColumnIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    transientStore: { isEarShown },
    songStore: {
        isSelectedLogue,
        earColumnIndex
    }
}) => ({
    isEarShown,
    earColumnIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSongStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EarColumnDispatcher)
