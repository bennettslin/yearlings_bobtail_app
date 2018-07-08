import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    accessAnnotationIndex,
    accessDotIndex
} from '../redux/actions/access'

import {
    selectDotKey,
    selectDotsIndex
} from '../redux/actions/storage'

import { getSongIsLogue } from '../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../helpers/generalHelper'
import { getAnnotationIndexForVerseIndex } from '../helpers/logicHelper'

import { ALL_DOT_KEYS } from '../constants/dots'

class DotsManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        accessAnnotationIndex: PropTypes.func.isRequired,
        accessDotIndex: PropTypes.func.isRequired,
        selectDotKey: PropTypes.func.isRequired,
        selectDotsIndex: PropTypes.func.isRequired,

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
        }) || !getPropsAreShallowEqual({
            props: this.props.selectedDotKeys,
            nextProps: nextProps.selectedDotKeys
        })
    }

    toggleDot(selectedDotIndex) {
        const selectedDotKey = ALL_DOT_KEYS[selectedDotIndex],
            isSelected = !this.props.selectedDotKeys[selectedDotKey]

        this.props.selectDotKey(selectedDotKey, isSelected)

        // Make most recently toggled dot the accessed dot.
        this.accessDot(selectedDotIndex)
    }

    selectDotsExpand(
        selectedDotsValue = (this.props.selectedDotsIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        // Dots section cannot be changed in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        if (typeof selectedDotsValue === 'boolean') {
            selectedDotsValue = selectedDotsValue ? 1 : 0
        }

        /**
         * If closing dots section, get accessed annotation index because it
         * might have changed.
         */
        if (!selectedDotsValue) {
            this.props.accessAnnotationIndex(
                getAnnotationIndexForVerseIndex({
                    deviceIndex: this.props.deviceIndex,
                    verseIndex: this.props.selectedVerseIndex,
                    selectedSongIndex: this.props.selectedSongIndex,
                    selectedDotKeys: this.props.selectedDotKeys,
                    lyricColumnIndex: this.props.selectedLyricColumnIndex
                })
            )
        }

        this.props.selectDotsIndex(selectedDotsValue)
        return true
    }

    accessDot(accessedDotIndex) {
        this.props.accessDotIndex(accessedDotIndex)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    selectedDotsIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,
    selectedSongIndex,
    selectedVerseIndex
}) => ({
    deviceIndex,
    selectedDotsIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessAnnotationIndex,
        accessDotIndex,
        selectDotKey,
        selectDotsIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DotsManager)
