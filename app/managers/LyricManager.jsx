import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    setIsManualScroll
} from 'flux/actions/session'
import { selectLyricColumnIndex } from 'flux/actions/storage'
import { updateToggleStore } from 'flux/actions/toggle'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getShowOneOfTwoLyricColumns
} from 'helpers/responsiveHelper'

class LyricManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        selectLyricColumnIndex: PropTypes.func.isRequired,
        setIsManualScroll: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

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
        })
    }

    componentDidUpdate(prevProps) {
        this.collapseLyricIfNeeded(prevProps)
    }

    collapseLyricIfNeeded(prevProps) {
        const {
                isLyricExpandable,
                isHiddenLyric
            } = this.props,
            {
                isLyricExpandable: wasLyricExpandable,
                isHiddenLyric: wasHiddenLyric
            } = prevProps

        if (
            (!isLyricExpandable && wasLyricExpandable) ||
            (isHiddenLyric && !wasHiddenLyric)
        ) {
            this.selectLyricExpand(false)
        }
    }

    selectLyricExpand(isLyricExpanded = !this.props.isLyricExpanded) {

        // We shouldn't be able to expand or collapse lyric while in logue.
        if (this.props.isSelectedLogue) {
            return false
        }

        /**
         * We shouldn't be able to expand lyric if it's not expandable. So
         * return false if it's already collapsed, or collapse it if not.
         */
        if (!this.props.isLyricExpandable) {

            if (!this.props.isLyricExpanded) {
                return false

            } else {
                isLyricExpanded = false
            }
        }

        this.props.updateToggleStore({
            isLyricExpanded
        })
        return true
    }

    selectLyricColumn({
        selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2,
        selectedSongIndex = this.props.selectedSongIndex,
        isLogue = this.props.isSelectedLogue
    } = {}) {
        const { props } = this

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has double columns, or if in a logue. Check for new song if called
         * from wormhole.
         */
        if (
            !(getShowOneOfTwoLyricColumns(selectedSongIndex, props.deviceIndex)) || isLogue
        ) {
            return false
        }

        props.selectLyricColumnIndex(selectedLyricColumnIndex)

        // Switching lyric column might change accessed annotation index.
        this.props.accessAnnotationIfCurrentInvalid({
            selectedSongIndex,
            selectedLyricColumnIndex
        })

        return true
    }

    selectManualScroll(isManualScroll = false) {
        this.props.setIsManualScroll(isManualScroll)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    responsiveStore: {
        isLyricExpandable,
        isHiddenLyric
    },
    toggleStore: { isLyricExpanded },
    songStore: {
        selectedSongIndex,
        isSelectedLogue
    },
    selectedLyricColumnIndex
}) => ({
    deviceIndex,
    isLyricExpandable,
    isHiddenLyric,
    isLyricExpanded,
    selectedLyricColumnIndex,
    selectedSongIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectLyricColumnIndex,
        setIsManualScroll,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricManager)
