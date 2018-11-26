import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateOptionStore } from 'flux/option/action'

import {
    SHOWN,
    HIDDEN
} from 'constants/options'

class OverviewListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleSongChange()
    }

    componentDidUpdate(prevProps) {
        this._handleSongChange(prevProps)
    }

    _handleSongChange(prevProps = {}) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            const {
                isSelectedLogue,
                selectedOverviewOption
            } = this.props

            // If just hidden, show overview when now in new song.
            if (!isSelectedLogue && selectedOverviewOption === HIDDEN) {
                this.props.updateOptionStore({
                    selectedOverviewOption: SHOWN,
                    isSongShownOverview: true
                })

            // If shown, hide when now in logue.
            } else if (isSelectedLogue && selectedOverviewOption === SHOWN) {
                this.props.updateOptionStore({
                    selectedOverviewOption: HIDDEN
                })
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
    optionStore: {
        selectedOverviewOption
    }
}) => ({
    isSelectedLogue,
    selectedOverviewOption,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateOptionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(OverviewListener)
