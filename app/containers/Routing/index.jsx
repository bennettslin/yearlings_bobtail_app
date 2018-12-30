import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'
import { updateSelectedStore } from 'flux/selected/action'
import { updateSessionStore } from 'flux/session/action'
import { updateTransientStore } from 'flux/transient/action'

import ListenerContainer from '../Listener'

import { getStartTimeForVerseIndex } from 'album/api/time'
import { getSceneIndexForVerseIndex } from 'album/api/scenes'
import {
    getValidRoutingIndices,
    getPathForIndices
} from './helper'

class RoutingContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        updateLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateTransientStore: PropTypes.func.isRequired,

        // From parent.
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)

        const
            { routingParamString } = props.match.params,

            // Get whatever params the route gives us.
            routingIndicesObject =
                getValidRoutingIndices(routingParamString),

            {
                routingSongIndex,
                routingVerseIndex,
                routingAnnotationIndex
            } = routingIndicesObject

        const {
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        } = props

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

            props.updateSelectedStore({
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
                lyricAnnotationIndex: routingAnnotationIndex
            })

            this.props.updateTransientStore({
                popupAnnotationIndex: routingAnnotationIndex
            })

            // Reset wiki.
            props.updateSessionStore({ selectedWikiIndex: 0 })
        }

        // Always replace path for consistency.
        this.replacePath(
            routingSongIndex,
            routingVerseIndex,
            routingAnnotationIndex
        )
    }

    componentDidMount() {
        logMount('RoutingContainer')
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

        this.props.history.replace(pathName)
    }

    render() {
        return (
            <ListenerContainer />
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
        updateLyricStore,
        updateSelectedStore,
        updateSessionStore,
        updateTransientStore
    }
)(RoutingContainer)
