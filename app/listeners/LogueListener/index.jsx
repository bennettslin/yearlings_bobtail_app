// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePlayingStore } from 'flux/playing/action'
import { updateToggleStore } from 'flux/toggle/action'

class LogueListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        updatePlayingStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleLogueIfNeeded(prevProps)
    }

    _handleLogueIfNeeded(prevProps) {
        const
            { isSelectedLogue } = this.props,
            { isSelectedLogue: wasSelectedLogue } = prevProps

        if (isSelectedLogue && !wasSelectedLogue) {
            this.props.updatePlayingStore({ isPlaying: false })
            this.props.updateToggleStore({ isDotsSlideShown: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { isSelectedLogue }
}) => ({
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updatePlayingStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LogueListener)
