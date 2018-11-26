import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateOptionStore } from 'flux/option/action'

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
        isForcedShownOverview: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleSongChange()
    }

    componentDidUpdate(prevProps) {
        this._handleSongChange(prevProps)
        this._handleForcedOverview(prevProps)
    }

    _handleSongChange(prevProps = {}) {
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
                this.props.updateOptionStore({
                    selectedTipsOption: SHOWN,
                    isSongShownTips: true
                })

            // If shown, hide when now in logue.
            } else if (isSelectedLogue && selectedTipsOption === SHOWN) {
                this.props.updateOptionStore({
                    selectedTipsOption: HIDDEN
                })
            }
        }
    }

    _handleForcedOverview(prevProps) {
        const
            {
                isForcedShownOverview,
                selectedTipsOption
            } = this.props,
            { isForcedShownOverview: wasForcedShownOverview } = prevProps

        if (
            selectedTipsOption === SHOWN &&
            isForcedShownOverview && !wasForcedShownOverview
        ) {
            this.props.updateOptionStore({
                selectedTipsOption: HIDDEN,
                isForcedShownOverview: false
            })
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
        selectedTipsOption,
        isForcedShownOverview
    }
}) => ({
    isSelectedLogue,
    selectedTipsOption,
    isForcedShownOverview,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateOptionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TipsListener)
