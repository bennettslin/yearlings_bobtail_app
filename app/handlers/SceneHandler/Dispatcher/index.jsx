import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateToggleStore } from 'flux/toggle/action'

import VerseDispatcher from '../../../dispatchers/VerseDispatcher'

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

    dispatchScene = (direction) => {
        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props

        const nextVerseIndex = getVerseIndexForNextScene(
            selectedSongIndex,
            selectedVerseIndex,
            direction
        )

        this.dispatchVerse({
            selectedVerseIndex: nextVerseIndex,
            scrollLog: 'Manual scene changed.'
        })

        return true
    }

    render() {
        return (
            <VerseDispatcher {...{ getDispatch: this }} />
        )
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
