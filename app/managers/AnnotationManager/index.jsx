import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    accessAnnotationIndex,
    accessAnnotationAnchorIndex
} from 'flux/actions/access'

import { updateRenderedStore } from 'flux/actions/rendered'
import { updateSongStore } from 'flux/actions/song'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getAnnotationIndexForVerseIndex,
    getAnnotationIndexForDirection,
    getAnnotationAnchorIndexForDirection,
    shouldShowAnnotationForColumn
} from './helper'

class AnnotationManager extends Component {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isDoublespeakerShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,

        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,

        accessAnnotationIndex: PropTypes.func.isRequired,
        accessAnnotationAnchorIndex: PropTypes.func.isRequired,
        updateRenderedStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
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

        this.deselectAnnotationIfNeeded(prevProps)
        this.accessNewAnnotationIfNeeded(prevProps)
    }

    deselectAnnotationIfNeeded(prevProps) {
        const {
                selectedLyricColumnIndex,
                isDoublespeakerShown
            } = this.props,
            {
                selectedLyricColumnIndex: prevLyricColumnIndex,
                isDoublespeakerShown: wasDoublespeakerShown
            } = prevProps

        if (
            selectedLyricColumnIndex !== prevLyricColumnIndex ||
            (
                isDoublespeakerShown && !wasDoublespeakerShown
            )
        ) {
            this.deselectAnnotation()
        }
    }

    accessNewAnnotationIfNeeded(prevProps) {
        /**
         * If closing dots slide, check if accessed annotation index is now
         * invalid, and change if so.
         */
        const
            { isDotsSlideShown } = this.props,
            { isDotsSlideShown: wasDotsSlideShown } = prevProps

        if (!isDotsSlideShown && wasDotsSlideShown) {
            this.accessAnnotationIfCurrentInvalid()
        }
    }

    selectAnnotation({
        selectedAnnotationIndex = 0,
        selectedSongIndex = this.props.selectedSongIndex,
        initialAnnotationAnchorIndex = 1,
        direction,
        bypassUpdateSelected
    } = {}) {
        const { props } = this

        // Called from arrow buttons in popup.
        if (direction) {
            selectedAnnotationIndex = getAnnotationIndexForDirection({
                isDoublespeakerShown: this.props.isDoublespeakerShown,
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

        if (!bypassUpdateSelected) {
            props.updateSongStore({
                selectedAnnotationIndex
            })
        }

        /**
         * If selecting or changing annotation in same song, change index to
         * be rendered right away.
         */
        if (selectedSongIndex === props.selectedSongIndex) {
            props.updateRenderedStore({
                renderedAnnotationIndex: selectedAnnotationIndex
            })
        }

        return selectedAnnotationIndex
    }

    deselectAnnotation({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedLyricColumnIndex = this.props.selectedLyricColumnIndex,
        annotationIndex = this.props.selectedAnnotationIndex
    } = {}) {
        if (annotationIndex) {
            const showAnnotationForColumn = shouldShowAnnotationForColumn({
                selectedSongIndex,
                selectedLyricColumnIndex,
                annotationIndex,
                isDoublespeakerShown: this.props.isDoublespeakerShown
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
        selectedLyricColumnIndex = this.props.selectedLyricColumnIndex,

        direction

    } = {}) {

        let accessedAnnotationIndex = 0

        if (annotationIndex) {
            accessedAnnotationIndex = getAnnotationIndexForDirection({
                currentAnnotationIndex: annotationIndex,
                selectedSongIndex,
                selectedDotKeys,
                isDoublespeakerShown: this.props.isDoublespeakerShown,
                lyricColumnIndex: selectedLyricColumnIndex,
                direction
            })
        } else {
            accessedAnnotationIndex = getAnnotationIndexForVerseIndex({
                verseIndex,
                selectedSongIndex,
                selectedDotKeys,
                isDoublespeakerShown: this.props.isDoublespeakerShown,
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
    toggleStore: { isDotsSlideShown },
    transientStore: { isDoublespeakerShown },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    },
    accessedAnnotationAnchorIndex,
    selectedDotKeys,
    selectedLyricColumnIndex
}) => ({
    isDotsSlideShown,
    isDoublespeakerShown,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    accessedAnnotationAnchorIndex,
    selectedDotKeys,
    selectedLyricColumnIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessAnnotationIndex,
        accessAnnotationAnchorIndex,
        updateRenderedStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationManager)
