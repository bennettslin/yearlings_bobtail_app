import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'
import { updateRenderedStore } from 'flux/rendered/action'
import { updateSongStore } from 'flux/song/action'

import AnnotationAccessDispatcher from '../../dispatchers/AnnotationAccessDispatcher'

import {
    getAnnotationIndexForDirection,
    getWikiWormholeIndexForDirection,
    shouldShowAnnotationForColumn
} from '../../helpers/annotation'

class AnnotationManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDotsSlideShown: PropTypes.bool.isRequired,
        isEarShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,
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

            accessedWikiWormholeIndex =
                getWikiWormholeIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys
                })

        // Set initial access state.
        props.updateAccessStore({ accessedWikiWormholeIndex })
    }

    componentDidMount() {
        this.props.setRef(this)
        this.dispatchAccessedAnnotation()
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this.dispatchAccessedAnnotation()
        }

        this.deselectAnnotationIfNeeded(prevProps)
        this.accessNewAnnotationIfNeeded(prevProps)
        this.accessAnnotationForInteractivatedVerseIfNeeded(prevProps)
    }

    deselectAnnotationIfNeeded(prevProps) {
        const {
                earColumnIndex,
                isEarShown
            } = this.props,
            {
                earColumnIndex: prevEarColumnIndex,
                isEarShown: wasDoublespeakerShown
            } = prevProps

        if (
            earColumnIndex !== prevEarColumnIndex ||
            (isEarShown && !wasDoublespeakerShown)
        ) {
            this._deselectAnnotation()
        }
    }

    accessNewAnnotationIfNeeded(prevProps) {
        /**
         * If closing dots slide, check if accessed annotation index is now
         * invalid, and change if so.
         */
        const
            {
                isDotsSlideShown,
                earColumnIndex
            } = this.props,
            {
                isDotsSlideShown: wasDotsSlideShown,
                earColumnIndex: prevEarColumnIndex
            } = prevProps

        if (
            (!isDotsSlideShown && wasDotsSlideShown) ||
            earColumnIndex !== prevEarColumnIndex
        ) {
            this.dispatchAccessedAnnotation()
        }
    }

    accessAnnotationForInteractivatedVerseIfNeeded(prevProps) {
        const
            { interactivatedVerseIndex } = this.props,
            { interactivatedVerseIndex: prevVerseIndex } = prevProps

        let newAccessedVerseIndex

        // If interactivated verse changed...
        if (interactivatedVerseIndex !== prevVerseIndex) {

            // ... if verse is still interactivated, access its annotation...
            if (interactivatedVerseIndex > -1) {
                newAccessedVerseIndex = interactivatedVerseIndex

            // ... otherwise, access annotation of newly selected verse.
            } else {
                newAccessedVerseIndex = this.props.selectedVerseIndex
            }

            this.dispatchAccessedAnnotation({ verseIndex: newAccessedVerseIndex })
        }
    }

    selectAnnotation({
        selectedAnnotationIndex = 0,
        selectedSongIndex = this.props.selectedSongIndex,
        initialWikiWormholeIndex = 1,
        direction,
        bypassUpdateSelected
    } = {}) {
        const { props } = this

        // Called from arrow buttons in popup.
        if (direction) {
            selectedAnnotationIndex = getAnnotationIndexForDirection({
                isEarShown: this.props.isEarShown,
                selectedSongIndex,
                selectedDotKeys: props.selectedDotKeys,
                currentAnnotationIndex: props.selectedAnnotationIndex,
                earColumnIndex: props.earColumnIndex,
                direction
            })
        }

        // Keep accessed index, even if annotation is deselected.
        if (selectedAnnotationIndex) {
            const { selectedDotKeys } = props

            props.updateAccessStore({
                accessedAnnotationIndex: selectedAnnotationIndex,
                accessedWikiWormholeIndex: getWikiWormholeIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialWikiWormholeIndex
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

    _deselectAnnotation({
        selectedSongIndex = this.props.selectedSongIndex,
        earColumnIndex = this.props.earColumnIndex,
        annotationIndex = this.props.selectedAnnotationIndex
    } = {}) {
        if (annotationIndex) {
            const showAnnotationForColumn = shouldShowAnnotationForColumn({
                selectedSongIndex,
                earColumnIndex,
                annotationIndex,
                isEarShown: this.props.isEarShown
            })

            if (!showAnnotationForColumn) {
                this.selectAnnotation()
            }
        }
    }

    accessWikiWormhole(direction) {
        const {
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys,
                accessedWikiWormholeIndex
            } = this.props,

            nextAccessedWikiWormholeIndex =
                getWikiWormholeIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialWikiWormholeIndex:
                        accessedWikiWormholeIndex,
                    direction
                })

        this.props.updateAccessStore({
            accessedWikiWormholeIndex: nextAccessedWikiWormholeIndex
        })
    }

    render() {
        return (
            <AnnotationAccessDispatcher {...{ getDispatch: this }} />
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isDotsSlideShown },
    transientStore: { isEarShown },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    },
    accessStore: { accessedWikiWormholeIndex },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    sessionStore: {
        earColumnIndex,
        interactivatedVerseIndex
    }
}) => ({
    isDotsSlideShown,
    isEarShown,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    accessedWikiWormholeIndex,
    dotsBitNumber,
    selectedDotKeys,
    earColumnIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        updateRenderedStore,
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationManager)
