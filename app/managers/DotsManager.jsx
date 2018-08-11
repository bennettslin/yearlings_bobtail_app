import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { accessDotIndex } from 'flux/actions/access'

import {
    selectDotKey,
    selectDotsIndex
} from 'flux/actions/storage'

import { getSongIsLogue } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { ALL_DOT_KEYS } from 'constants/dots'

class DotsManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        accessDotIndex: PropTypes.func.isRequired,
        selectDotKey: PropTypes.func.isRequired,
        selectDotsIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        accessAnnotationIfCurrentInvalid: PropTypes.func.isRequired
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
         * If closing dots section, check if accessed annotation index is now
         * invalid, and change if so.
         */
        if (!selectedDotsValue) {
            this.props.accessAnnotationIfCurrentInvalid()
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
    selectedDotsIndex,
    selectedDotKeys,
    selectedStore: { selectedSongIndex }
}) => ({
    selectedDotsIndex,
    selectedDotKeys,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessDotIndex,
        selectDotKey,
        selectDotsIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DotsManager)
