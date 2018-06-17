import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectScoreIndex } from '../redux/actions/storage'

import { getSongIsLogue } from '../helpers/dataHelper'
import { getIsScoreExpandable } from '../helpers/responsiveHelper'

class ScoreManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        selectedScoreIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectScoreIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    selectScore(
        selectedScoreValue = (this.props.selectedScoreIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        // We shouldn't be able to toggle score while in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        if (typeof selectedScoreValue === 'boolean') {
            selectedScoreValue = selectedScoreValue ? 1 : 0
        }

        /**
         * We shouldn't be able to expand score if it's phone width. So return
         * false if it's already collapsed, or collapse it if not.
         */
        if (!getIsScoreExpandable(this.props.deviceIndex)) {
            if (!this.props.selectedScoreIndex) {
                return false

            } else {
                selectedScoreValue = 0
            }
        }

        this.props.selectScoreIndex(selectedScoreValue)
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    selectedScoreIndex,
    selectedSongIndex
}) => ({
    deviceIndex,
    selectedScoreIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectScoreIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScoreManager)
