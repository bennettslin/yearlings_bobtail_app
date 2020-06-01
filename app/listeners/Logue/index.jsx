// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAudioStore } from '../../redux/audio/action'
import { updateToggleStore } from '../../redux/toggle/action'
import { mapIsSelectedLogue } from '../../redux/selected/selectors'

const mapStateToProps = state => {
    const isSelectedLogue = mapIsSelectedLogue(state)

    return {
        isSelectedLogue
    }
}

class LogueListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        updateAudioStore: PropTypes.func.isRequired,
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
            this.props.updateAudioStore({ isPlaying: false })
            this.props.updateToggleStore({ isDotsSlideShown: false })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateAudioStore,
        updateToggleStore
    }
)(LogueListener)
