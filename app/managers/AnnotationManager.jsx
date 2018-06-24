import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    accessAnnotationIndex,
    accessAnnotationAnchorIndex
} from '../redux/actions/access'
import { setRenderableAnnotationIndex } from '../redux/actions/session'
import { selectAnnotationIndex } from '../redux/actions/storage'

import {
    getAnnotationIndexForDirection,
    getAnnotationAnchorIndexForDirection,
    shouldShowAnnotationForColumn
} from '../helpers/logicHelper'

class AnnotationManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        accessAnnotationIndex: PropTypes.func.isRequired,
        accessAnnotationAnchorIndex: PropTypes.func.isRequired,
        selectAnnotationIndex: PropTypes.func.isRequired,
        setRenderableAnnotationIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        const { selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys } = props

        // Set initial access state.
        props.accessAnnotationAnchorIndex(
            getAnnotationAnchorIndexForDirection({
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys
            })
        )
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    componentDidUpdate(prevProps) {
        const {
            deviceIndex,
            selectedDotKeys,
            selectedLyricColumnIndex,
            selectedAnnotationIndex,
            selectedSongIndex
        } = this.props

        if (selectedSongIndex !== prevProps.selectedSongIndex) {
            /**
             * Get new accessed annotation index by starting from first and
             * going forward. If not called from portal, it should always be
             * the title annotation unless deselected by dots.
             */

            const accessedAnnotationIndex = selectedAnnotationIndex ||
                getAnnotationIndexForDirection({
                    deviceIndex: deviceIndex,
                    currentAnnotationIndex: 1,
                    selectedSongIndex,
                    selectedDotKeys: selectedDotKeys,
                    lyricColumnIndex: selectedLyricColumnIndex
                })

            this.props.accessAnnotationIndex(
                accessedAnnotationIndex
            )
        }
    }

    selectAnnotation({
        selectedAnnotationIndex = 0,
        selectedSongIndex = this.props.selectedSongIndex,
        initialAnnotationAnchorIndex = 1,
        direction
    }) {
        const { props } = this

        // Called from arrow buttons in popup.
        if (direction) {
            selectedAnnotationIndex = getAnnotationIndexForDirection({
                deviceIndex: props.deviceIndex,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                currentAnnotationIndex: props.selectedAnnotationIndex,
                lyricColumnIndex: props.selectedLyricColumnIndex,
                direction
            })
        }

        // Keep accessed index, even if annotation is deselected.
        if (selectedAnnotationIndex) {
            const { selectedDotKeys } = props

            props.accessAnnotationIndex(selectedAnnotationIndex)

            // App does not know new index, so pass it directly.
            props.accessAnnotationAnchorIndex(
                getAnnotationAnchorIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialAnnotationAnchorIndex
                })
            )
        }

        props.selectAnnotationIndex(selectedAnnotationIndex)

        /**
         * There should always be a popup annotation, so that popup is not
         * suddenly empty when popup fades out.
         */

        /**
         * If selecting or changing annotation in same song, change index to
         * be rendered right away.
         */
        if (selectedSongIndex === props.selectedSongIndex) {
            props.setRenderableAnnotationIndex(selectedAnnotationIndex)
        }

        /**
         * This is the only place where router path will change based on a new
         * annotation index for the same song.
         */
        if (selectedSongIndex === this.props.selectedSongIndex) {
            props.updatePath({
                selectedSongIndex,
                selectedAnnotationIndex
            })
        }

        return selectedAnnotationIndex
    }

    deselectAnnotation({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedLyricColumnIndex = this.props.selectedLyricColumnIndex,
        annotationIndex = this.props.selectedAnnotationIndex,
        deviceIndex = this.props.deviceIndex
    }) {
        if (annotationIndex) {
            const showAnnotationForColumn = shouldShowAnnotationForColumn({
                    selectedSongIndex,
                    selectedLyricColumnIndex,
                    annotationIndex,
                    deviceIndex
                })

            if (!showAnnotationForColumn) {
                this.selectAnnotation({})
            }
        }
    }

    accessAnnotation(accessedAnnotationIndex) {
        this.props.accessAnnotationIndex(accessedAnnotationIndex)
        return true
    }

    accessAnnotationAnchor(accessedAnnotationAnchorIndex) {
        this.props.accessAnnotationAnchorIndex(accessedAnnotationAnchorIndex)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    selectedDotKeys,
    selectedAnnotationIndex,
    selectedLyricColumnIndex,
    selectedSongIndex,

}) => ({
    deviceIndex,
    selectedDotKeys,
    selectedAnnotationIndex,
    selectedLyricColumnIndex,
    selectedSongIndex,

})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessAnnotationIndex,
        accessAnnotationAnchorIndex,
        selectAnnotationIndex,
        setRenderableAnnotationIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationManager)
