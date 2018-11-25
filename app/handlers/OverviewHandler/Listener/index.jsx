import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'

import {
    SHOWN,
    HIDDEN
} from 'constants/options'

class OverviewListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            const { selectedOverviewOption } = this.props

            // If just hidden, show overview for new song.
            if (selectedOverviewOption === HIDDEN) {
                this.props.updateSessionStore({ selectedOverviewOption: SHOWN })
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { selectedSongIndex },
    sessionStore: { selectedOverviewOption }
}) => ({
    selectedOverviewOption,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(OverviewListener)
