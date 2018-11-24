// Singleton to watch for non-toggle events that require collapsing lyric.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

class LyricEarDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDoublespeakerShown: PropTypes.bool.isRequired,
        earIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchEar = this.dispatchEar
    }

    dispatchEar = ({
        earIndex = (this.props.earIndex + 1) % 2
    } = {}) => {
        const {
            isDoublespeakerShown,
            isSelectedLogue
        } = this.props

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has double columns, or if in a logue. Check for new song if called
         * from wormhole.
         */
        if (!isDoublespeakerShown || isSelectedLogue) {
            return false
        }

        this.props.updateSessionStore({ earIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    transientStore: { isDoublespeakerShown },
    songStore: { isSelectedLogue },
    sessionStore: { earIndex }
}) => ({
    isDoublespeakerShown,
    earIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricEarDispatcher)
