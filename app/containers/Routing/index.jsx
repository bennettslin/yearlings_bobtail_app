import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateDotsStore } from 'flux/dots/action'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSceneStore } from 'flux/scene/action'
import { updateSelectedStore } from 'flux/selected/action'
import { resetWiki } from 'flux/session/action'
import { updateTransientStore } from 'flux/transient/action'

import ListenContainer from '../Listen'
import SceneChangeUpdateDispatcher from '../../listeners/SceneChange/Update'

import { getStartTimeForVerseIndex } from 'album/api/time'
import { getSceneIndexForVerseIndex } from 'album/api/verses'
import {
    getValidRoutingIndices,
    getPathForIndices
} from './helper'
import { populateRefs } from 'helpers/ref'

class RoutingContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateDotsStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        updateTransientStore: PropTypes.func.isRequired,
        resetWiki: PropTypes.func.isRequired,

        // From parent.
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount() {
        logMount('RoutingContainer')
        this._checkParams()
    }

    _checkParams() {
        const
            {
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex,
                match: { params: { routingParamString } }
            } = this.props,

            // Get whatever params the route gives us.
            {
                routingSongIndex,
                routingVerseIndex,
                routingAnnotationIndex
            } = getValidRoutingIndices({
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex,
                routingParamString
            })

        // Update storage to be consistent with route if necessary.
        if (
            routingSongIndex !== selectedSongIndex ||
            routingVerseIndex !== selectedVerseIndex ||
            routingAnnotationIndex !== selectedAnnotationIndex
        ) {

            const routingSceneIndex = getSceneIndexForVerseIndex(
                routingSongIndex,
                routingVerseIndex
            )

            this.props.updateSelectedStore({
                selectedSongIndex: routingSongIndex,
                selectedVerseIndex: routingVerseIndex,
                selectedAnnotationIndex: routingAnnotationIndex,
                selectedSceneIndex: routingSceneIndex,
                selectedTime: getStartTimeForVerseIndex(
                    routingSongIndex,
                    routingVerseIndex
                )
            })

            this.props.updateLyricStore({
                lyricSongIndex: routingSongIndex,
                lyricVerseIndex: routingVerseIndex,
                lyricAnnotationIndex: routingAnnotationIndex,
                lyricSceneIndex: routingSceneIndex
            })

            // If annotation is selected, preemptively select all eight dots.
            if (routingAnnotationIndex) {
                this.props.updateDotsStore({
                    dotsBitNumber: 255
                })
            }

            this.dispatchCanSceneEnter({
                songIndex: routingSongIndex,

                // Begin in default stage scene.
                sceneIndex: -1
            })

            this.props.updateTransientStore({
                popupAnnotationIndex: routingAnnotationIndex
            })

            this.props.resetWiki()
        }

        /**
         * Either way, tell store that routing is complete. Not sure I like
         * this solution, but overview and tips should not determine whether to
         * show until this is set.
         */
        this.props.updateSelectedStore({ isRoutingComplete: true })

        // Always replace path for consistency.
        this.replacePath(
            routingSongIndex,
            routingVerseIndex,
            routingAnnotationIndex
        )
    }

    componentDidUpdate(prevProps) {
        const {
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedVerseIndex: prevVerseIndex,
                selectedAnnotationIndex: prevAnnotationIndex
            } = prevProps

        // Only update path if it has changed.
        if (
            prevSongIndex !== selectedSongIndex ||
            prevVerseIndex !== selectedVerseIndex ||
            prevAnnotationIndex !== selectedAnnotationIndex
        ) {
            this.replacePath(
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            )
        }
    }

    replacePath(songIndex, verseIndex, annotationIndex) {

        const pathName = getPathForIndices(
            songIndex, verseIndex, annotationIndex
        )

        // TODO: Why does changing verse or annotation not add to history, but changing song does?
        this.props.history.replace(pathName)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <___>
                <ListenContainer />
                <SceneChangeUpdateDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex
})

export default connect(
    mapStateToProps,
    {
        updateDotsStore,
        updateLyricStore,
        updateSceneStore,
        updateSelectedStore,
        updateTransientStore,
        resetWiki
    }
)(RoutingContainer)
