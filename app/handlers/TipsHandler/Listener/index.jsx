import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'

import {
    SHOWN,
    HIDDEN
} from 'constants/options'

class TipsListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            const {
                isSelectedLogue,
                selectedTipsOption
            } = this.props

            // If just hidden, show tips for new song.
            if (!isSelectedLogue && selectedTipsOption === HIDDEN) {
                this.props.updateSessionStore({ selectedTipsOption: SHOWN })

            // If shown, hide when now in logue.
            } else if (isSelectedLogue && selectedTipsOption === SHOWN) {
                this.props.updateSessionStore({ selectedTipsOption: HIDDEN })
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        isSelectedLogue,
        selectedSongIndex
    },
    sessionStore: { selectedTipsOption }
}) => ({
    isSelectedLogue,
    selectedTipsOption,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TipsListener)
