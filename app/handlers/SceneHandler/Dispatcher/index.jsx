import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateToggleStore } from 'flux/toggle/action'

import { getVerseIndexForNextScene } from './helper'

class SceneDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchScene = this.dispatchScene
    }

    dispatchScene = (
        direction,

        // TODO: Eventually get rid of this callback!
        selectVerse
    ) => {
        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props

        const nextVerseIndex = getVerseIndexForNextScene(
            selectedSongIndex,
            selectedVerseIndex,
            direction
        )

        if (nextVerseIndex > -1) {
            selectVerse({
                selectedVerseIndex: nextVerseIndex,
                scrollLog: 'Manual scene changed.'
            })

            /**
             * Verse bars always get reset. This behaviour can be a little
             * janky, but it doesn't matter since this won't get called in
             * production.
             */
            this.props.updateToggleStore({
                isVerseBarAbove: false,
                isVerseBarBelow: false
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SceneDispatcher)
