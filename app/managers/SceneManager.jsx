import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getVerseIndexForNextScene } from '../helpers/dataHelper'

class SceneManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    selectScene(direction) {
        const { selectedSongIndex, selectedVerseIndex } = this.props

        const nextVerseIndex = getVerseIndexForNextScene(
            selectedSongIndex, selectedVerseIndex, direction
        )

        if (nextVerseIndex > -1) {
            this.props.selectVerse({
                selectedVerseIndex: nextVerseIndex
            })
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
