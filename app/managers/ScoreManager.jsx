import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setIsScoreLoaded } from 'flux/actions/player'
import { selectScoreIndex } from 'flux/actions/storage'

import { getSongIsLogue } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getIsScoreExpandable } from 'helpers/responsiveHelper'

class ScoreManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        selectedScoreIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectScoreIndex: PropTypes.func.isRequired,
        setIsScoreLoaded: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate(prevProps) {
        const { selectedSongIndex } = this.props

        if (selectedSongIndex !== prevProps.selectedSongIndex) {
            this.props.setIsScoreLoaded(false)

            // If selecting a logue, toggle off score.
            if (getSongIsLogue(selectedSongIndex)) {
                this.selectScore(false)
            }
        }
    }

    selectScore(
        selectedScoreValue = (this.props.selectedScoreIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        if (getSongIsLogue(this.props.selectedSongIndex)) {
            /**
             * We shouldn't be able to toggle score on or off in logue. So if
             * it's still on, force it to toggle off. Otherwise, we will just
             * return without registering this event.
             */

            if (!this.props.selectedScoreIndex) {
                return false
            }
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
    deviceStore,
    selectedScoreIndex,
    selectedSongIndex
}) => ({
    deviceIndex: deviceStore.deviceIndex,
    selectedScoreIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectScoreIndex,
        setIsScoreLoaded
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScoreManager)
