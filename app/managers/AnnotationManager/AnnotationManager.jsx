import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    accessAnnotationIndex,
    accessAnnotationAnchorIndex
} from '../../redux/actions/access'

import { setRenderableAnnotationIndex } from '../../redux/actions/renderable'
import { selectAnnotationIndex } from '../../redux/actions/storage'

import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

import {
    getAnnotationIndexForVerseIndex,
    getAnnotationIndexForDirection,
    getAnnotationAnchorIndexForDirection,
    shouldShowAnnotationForColumn
} from './annotationManagerHelper'

class AnnotationManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,

        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

        accessAnnotationIndex: PropTypes.func.isRequired,
        accessAnnotationAnchorIndex: PropTypes.func.isRequired,
        selectAnnotationIndex: PropTypes.func.isRequired,
        setRenderableAnnotationIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        updatePath: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        const {
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys
            } = props,

            accessedAnnotationAnchorIndex =
                getAnnotationAnchorIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys
                })

        // Set initial access state.
        props.accessAnnotationAnchorIndex(
            accessedAnnotationAnchorIndex
        )
    }

    componentDidMount() {
        this.props.setRef(this)
        this.accessAnnotation()
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

    componentDidUpdate(prevProps) {
        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this.accessAnnotation()
        }
    }

    selectAnnotation({
        selectedAnnotationIndex = 0,
        selectedSongIndex = this.props.selectedSongIndex,
        initialAnnotationAnchorIndex = 1,
        direction
    } = {}) {
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
                this.selectAnnotation()
            }
        }
    }

    accessAnnotation({

        annotationIndex,
        verseIndex = this.props.selectedVerseIndex,

        selectedSongIndex = this.props.selectedSongIndex,
        selectedDotKeys = this.props.selectedDotKeys,

        deviceIndex = this.props.deviceIndex,
        selectedLyricColumnIndex = this.props.selectedLyricColumnIndex,

        direction

    } = {}) {

        let accessedAnnotationIndex = 0

        if (annotationIndex) {
            accessedAnnotationIndex = getAnnotationIndexForDirection({
                currentAnnotationIndex: annotationIndex,
                selectedSongIndex,
                selectedDotKeys,
                deviceIndex,
                lyricColumnIndex: selectedLyricColumnIndex,
                direction
            })
        } else {
            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                verseIndex,
                selectedSongIndex,
                selectedDotKeys,
                deviceIndex,
                lyricColumnIndex: selectedLyricColumnIndex,
                direction
            })
        }

        this.props.accessAnnotationIndex(accessedAnnotationIndex)

        // If needed, scroll to this annotation index.
        return accessedAnnotationIndex
    }

    accessAnnotationIfCurrentInvalid({
        selectedSongIndex,
        selectedLyricColumnIndex
    } = {}) {
        this.accessAnnotation({
            selectedSongIndex,
            selectedLyricColumnIndex
        })
    }

    accessAnnotationAnchor(direction) {
        const {
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys,
                accessedAnnotationAnchorIndex
            } = this.props,

            nextAccessedAnnotationAnchorIndex =
                getAnnotationAnchorIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialAnnotationAnchorIndex:
                        accessedAnnotationAnchorIndex,
                    direction
                })

        this.props.accessAnnotationAnchorIndex(
            nextAccessedAnnotationAnchorIndex
        )
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    accessedAnnotationAnchorIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,

}) => ({
    deviceIndex: deviceStore.deviceIndex,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    accessedAnnotationAnchorIndex,
    selectedDotKeys,
    selectedLyricColumnIndex,

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
