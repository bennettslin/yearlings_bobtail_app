// Singleton to watch for non-toggle events that require collapsing lyric.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectLyricColumnIndex } from 'flux/storage/action'
import { updateToggleStore } from 'flux/toggle/action'

class LyricManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isDoublespeakerShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        selectLyricColumnIndex: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        accessAnnotationIfCurrentInvalid: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    componentDidUpdate(prevProps) {
        this.collapseLyricIfNeeded(prevProps)
    }

    collapseLyricIfNeeded(prevProps) {
        const
            {
                isLyricExpandable,
                isSelectedLogue
            } = this.props,
            {
                isLyricExpandable: wasLyricExpandable,
                isSelectedLogue: wasSelectedLogue
            } = prevProps

        if (
            (isSelectedLogue && !wasSelectedLogue) ||
            !isLyricExpandable && wasLyricExpandable
        ) {
            this.props.updateToggleStore({ isLyricExpanded: false })
        }
    }

    selectLyricColumn({
        selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2,
        selectedSongIndex = this.props.selectedSongIndex,
        isLogue = this.props.isSelectedLogue
    } = {}) {
        const { isDoublespeakerShown } = this.props

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has double columns, or if in a logue. Check for new song if called
         * from wormhole.
         */
        if (!isDoublespeakerShown || isLogue) {
            return false
        }

        this.props.selectLyricColumnIndex(selectedLyricColumnIndex)

        // Switching lyric column might change accessed annotation index.
        this.props.accessAnnotationIfCurrentInvalid({
            selectedSongIndex,
            selectedLyricColumnIndex
        })

        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    responsiveStore: { isLyricExpandable },
    toggleStore: { isLyricExpanded },
    transientStore: { isDoublespeakerShown },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    },
    selectedLyricColumnIndex
}) => ({
    deviceIndex,
    isLyricExpandable,
    isLyricExpanded,
    isDoublespeakerShown,
    selectedLyricColumnIndex,
    selectedSongIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectLyricColumnIndex,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricManager)
