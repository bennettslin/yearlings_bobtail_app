import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getVerseIndexForNextScene } from '../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../helpers/generalHelper'

class SceneManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

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

export default connect(mapStateToProps)(SceneManager)
