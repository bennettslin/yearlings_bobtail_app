import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { accessAnnotationIndex } from '../redux/actions/access'
import {
    setIsLyricExpanded,
    setIsManualScroll
} from '../redux/actions/session'
import { selectLyricColumnIndex } from '../redux/actions/storage'

import { getSongIsLogue } from '../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../helpers/generalHelper'
import { getAnnotationIndexForVerseIndex } from '../helpers/logicHelper'
import {
    getShowOneOfTwoLyricColumns,
    getIsLyricExpandable
} from '../helpers/responsiveHelper'

class LyricManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        accessAnnotationIndex: PropTypes.func.isRequired,
        selectLyricColumnIndex: PropTypes.func.isRequired,
        setIsLyricExpanded: PropTypes.func.isRequired,
        setIsManualScroll: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        deselectAnnotation: PropTypes.func.isRequired
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

    selectLyricExpand(isLyricExpanded = !this.props.isLyricExpanded) {

        // We shouldn't be able to expand or collapse lyric while in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        /**
         * We shouldn't be able to expand lyric if it's not expandable. So
         * return false if it's already collapsed, or collapse it if not.
         */
        if (!getIsLyricExpandable(this.props.deviceIndex)) {

            if (!this.props.isLyricExpanded) {
                return false

            } else {
                isLyricExpanded = false
            }
        }

        this.props.setIsLyricExpanded(isLyricExpanded)
        return true
    }

    selectLyricColumn({
        selectedLyricColumnIndex = (this.props.selectedLyricColumnIndex + 1) % 2,
        selectedSongIndex = this.props.selectedSongIndex,
        annotationIndex = this.props.selectedAnnotationIndex
    }) {
        const { props } = this

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has double columns, or if in a logue. Check for new song if called
         * from portal.
         */
        if (!(getShowOneOfTwoLyricColumns(selectedSongIndex, props.deviceIndex)) || getSongIsLogue(selectedSongIndex)) {
            return false
        }

        /**
         * If selected, deselect selected annotation if not in new selected
         * column.
         */
        this.props.deselectAnnotation({
            selectedSongIndex,
            annotationIndex,
            selectedLyricColumnIndex
        })

        props.selectLyricColumnIndex(selectedLyricColumnIndex)

        // Switching lyric column might change accessed annotation index.
        this.props.accessAnnotationIndex(
            getAnnotationIndexForVerseIndex({
                deviceIndex: props.deviceIndex,
                verseIndex: props.selectedVerseIndex,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                lyricColumnIndex: selectedLyricColumnIndex
            })
        )
        return true
    }

    selectManualScroll(isManualScroll = false) {
        this.props.setIsManualScroll(isManualScroll);
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,
    selectedSongIndex,
    selectedVerseIndex
}) => ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessAnnotationIndex,
        selectLyricColumnIndex,
        setIsLyricExpanded,
        setIsManualScroll
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricManager)
