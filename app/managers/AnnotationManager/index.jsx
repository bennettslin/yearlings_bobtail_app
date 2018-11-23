import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'

import { updateRenderedStore } from 'flux/rendered/action'
import { updateSongStore } from 'flux/song/action'

import {
    getAnnotationIndexForVerseIndex,
    getAnnotationIndexForDirection,
    getAnnotationAnchorIndexForDirection,
    shouldShowAnnotationForColumn
} from './helper'

class AnnotationManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isDoublespeakerShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,
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
        props.updateAccessStore({ accessedAnnotationAnchorIndex })
    }

    componentDidMount() {
        this.props.setRef(this)
        this.accessAnnotation()
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

            props.updateAccessStore({
                accessedAnnotationIndex: selectedAnnotationIndex,
                accessedAnnotationAnchorIndex: getAnnotationAnchorIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialAnnotationAnchorIndex
                })
            })
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

        this.props.updateAccessStore({ accessedAnnotationIndex })

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

        this.props.updateAccessStore({
            accessedAnnotationAnchorIndex: nextAccessedAnnotationAnchorIndex
        })
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
    accessStore: { accessedAnnotationAnchorIndex },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    sessionStore: { selectedLyricColumnIndex }
}) => ({
    isDotsSlideShown,
    isDoublespeakerShown,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    accessedAnnotationAnchorIndex,
    dotsBitNumber,
    selectedDotKeys,
    selectedLyricColumnIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updateRenderedStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationManager)
