// Singleton to watch for non-toggle events that require collapsing lyric.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

class EarColumnDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchEarColumn = this.dispatchEarColumn
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
         * has double columns, or if in a logue. Check for new song if called
         * from wormhole.
         */
        if (!isEarShown || isSelectedLogue) {
            return false
        }

        this.props.updateSessionStore({ earColumnIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    transientStore: { isEarShown },
    songStore: { isSelectedLogue },
    sessionStore: { earColumnIndex }
}) => ({
    isEarShown,
    earColumnIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EarColumnDispatcher)
