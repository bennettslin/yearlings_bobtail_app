import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setCurrentSceneIndex } from '../redux/actions/session'

import {
    getSceneIndexForVerseIndex,
    getVerseIndexForNextScene
} from '../helpers/dataHelper'

import { getPropsAreShallowEqual } from '../helpers/generalHelper'

class SceneManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        setCurrentSceneIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired
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
        const {
            selectedSongIndex,
            selectedVerseIndex
        } = this.props

        if (
            selectedSongIndex !== prevProps.selectedSongIndex ||
            selectedVerseIndex !== prevProps.selectedVerseIndex
        ) {
            this.props.setCurrentSceneIndex(
                getSceneIndexForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )
            )
        }
    }

    selectScene(direction) {
        const { selectedSongIndex, selectedVerseIndex } = this.props

        const nextVerseIndex = getVerseIndexForNextScene(
            selectedSongIndex, selectedVerseIndex, direction
        )

        if (nextVerseIndex > -1) {
            this.props.selectVerse({
                selectedVerseIndex: nextVerseIndex,
                scrollLog: 'Manual scene changed.'
            })

            /**
             * Verse bars always get reset. This behaviour can be a little
             * janky, but it doesn't matter since this won't get called in
             * production.
             */
            this.props.resetVerseBars()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedSongIndex,
    selectedVerseIndex
}) => ({
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCurrentSceneIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SceneManager)
